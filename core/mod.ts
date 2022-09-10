import { ExecError, graphql, listCommits, listRepositoryTags } from "./gh.ts";
import { parse } from "./ghrepo.ts";
import { getHeadSha, getOriginRepo, GitError } from "./git.ts";
import { globToRegExp } from "https://deno.land/std@0.148.0/path/glob.ts";

export default ghDescribe;

interface Repo {
  owner: string;
  name: string;
  host?: string;
}

interface Tags {
  readonly size: number;
  get(sha: string): string | undefined;
}

type ForAwaitable<T> = Iterable<T> | AsyncIterable<T>;

type Histories = ForAwaitable<string>;

interface GhDescribeOutput {
  /**
   * `git describe --tags` like describe.
   */
  describe: string;

  /**
   * Most recent tag.
   */
  tag: string;

  /**
   * The number of additional commits from most recent tag.
   */
  distance: number;

  /**
   * 	Object name for the commit itself.
   */
  sha: string;
}

export class GhDescribeError extends Error {}

export async function searchTag(
  tags: Tags,
  histories: Histories,
): Promise<{ distance: number; tag: string } | null> {
  if (0 < tags.size) {
    let distance = 0;
    for await (const commit of histories) {
      const tag = tags.get(commit);
      if (tag) {
        return { tag, distance };
      } else {
        distance++;
      }
    }
  }
  return null;
}

interface GhDescribeOptions {
  /**
   * Target repository. Defaults to origin if omitted. Format: OWNER/REPO
   *
   * @default
   */
  repo?: string | Repo;

  /**
   * Target Commit-ish object name. Defaults to HEAD if omitted.
   */
  commitish?: string;

  /**
   * Only consider tags matching the given glob pattern.
   */
  match?: string | RegExp | (string | RegExp)[];

  /**
   * Do not consider tags matching the given glob pattern.
   */
  exclude?: string | RegExp | (string | RegExp)[];

  /**
   * Use this value if the name is not found.
   */
  defaultTag?: string;
}

/**
 * Emulate `git describe --tags` in shallow clone repository.
 */
export async function ghDescribe(
  {
    repo,
    commitish,
    defaultTag,
    match,
    exclude,
  }: GhDescribeOptions = {},
): Promise<GhDescribeOutput> {
  repo = await resolveRepo(repo);

  const [tags, { sha, histories }] = await Promise.all([
    fetchTags(repo, { match, exclude }),
    (async () => {
      const sha = await fetchSha(repo, commitish);
      const histories = fetchHistory(repo, sha);
      return { sha, histories };
    })(),
  ]);

  const { distance, tag } = (await searchTag(tags, histories)) || {
    distance: 0,
    tag: defaultTag,
  };

  if (!tag) {
    throw new GhDescribeError("No names found, cannot describe anything.");
  }

  const describe = genDescribe(tag, distance, sha);
  return { describe, tag, distance, sha };
}

export async function resolveRepo(repo?: string | Repo): Promise<Repo> {
  if (typeof repo === "string") {
    return parse(repo);
  }

  try {
    return await getOriginRepo();
  } catch (e: unknown) {
    if (
      e instanceof GitError &&
      e.stderr === "fatal: not a git repository (or any of the parent directories): .git"
    ) {
      throw new GhDescribeError(e.stderr, e);
    }
    throw e;
  }
}

interface FetchTagsOptions {
  match?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
}

function toReqExpArray(glob?: string | RegExp | (string | RegExp)[]): RegExp[] {
  if (!glob) {
    return [];
  }

  if (!(glob instanceof Array)) {
    glob = [glob];
  }

  return glob.map((x) => x instanceof RegExp ? x : globToRegExp(x));
}

export async function fetchTags(
  { owner, name, host }: Repo,
  {
    match: argMatch,
    exclude: argExclude,
  }: FetchTagsOptions = {},
): Promise<Tags> {
  const match = toReqExpArray(argMatch);
  const exclude = toReqExpArray(argExclude);

  const tags: [sha: string, name: string][] = [];
  const perPage = 100;
  const jq = ".[] | [.commit.sha, .name]";
  let page = 0;
  let count: number;
  do {
    page++;
    const stdout = await listRepositoryTags(owner, name, { perPage, page, host, jq });
    count = tags.push(
      ...stdout
        .split("\n")
        .filter((x) => !!x)
        .map((x) => JSON.parse(x))
        .filter(([, tag]) =>
          (!match.length || match.some((y) => y.test(tag))) &&
          (!exclude.length || !exclude.some((y) => y.test(tag)))
        ),
    );
  } while (count === perPage);
  return new Map(tags);
}

export async function fetchSha({ owner, name, host }: Repo, sha?: string): Promise<string> {
  if (sha) {
    try {
      const perPage = 1;
      const jq = ".[].sha";
      return await listCommits(owner, name, { sha, perPage, host, jq });
    } catch {
      return sha;
    }
  } else {
    return getHeadSha();
  }
}

export async function* fetchHistory(repo: Repo, sha: string): Histories {
  try {
    const { owner, name, host } = repo;
    const perPage = 100;
    const jq = ".[].sha";
    let page = 0;
    let count: number;
    do {
      page++;
      const stdout = await listCommits(owner, name, { sha, perPage, page, host, jq });
      const historySpan = stdout
        .trim()
        .split("\n");
      count = historySpan.length;
      for (const commitSha of historySpan) {
        yield commitSha;
      }
    } while (count === perPage);
  } catch (e: unknown) {
    if (e instanceof ExecError && e.stderr === "gh: Not Found (HTTP 404)") {
      const msg = `ambiguous argument '${sha}': unknown revision or path not in the ${repo} tree.`;
      throw new GhDescribeError(msg);
    }
    throw e;
  }
}

export async function fetchTotalCommit({ owner, name, host }: Repo, sha: string) {
  const stdout = await graphql({ host })`
  {
    repository(owner: "${owner}", name: "${name}") {
      object(expression: "${sha}") {
        ... on Commit {
          history(first: 0) {
            totalCount
          }
        }
      }
    }
  }`;
  const repository = JSON.parse(stdout);
  return repository.object.history.totalCount;
}

export function genDescribe(tag: string, distance: number, sha: string) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substring(0, 7)}`;
  }
}
