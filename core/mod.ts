import * as gh from "../gh-wrapper/mod.ts";
import { fetchTags } from "./fetch_tags.ts";
import { parse } from "./ghrepo.ts";
import { getOriginRepo } from "./git.ts";
import * as git from "../git-wrapper/mod.ts";
import { searchTag } from "./search_tags.ts";

export default ghDescribe;

interface Repo {
  owner: string;
  name: string;
  host?: string;
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
   * If the name is not found, use this value.
   */
  defaultTag?: string;
}

/**
 * Emulate `git describe --tags` in shallow clone repository.
 */
export async function ghDescribe(
  {
    repo: maybeRepo,
    commitish,
    defaultTag,
    match,
    exclude,
  }: GhDescribeOptions = {},
): Promise<GhDescribeOutput> {
  const { owner, name: repo, host } = await resolveRepo(maybeRepo);

  const [tags, { sha, histories }] = await Promise.all([
    fetchTags({ owner, repo, host, match, exclude }),
    (async () => {
      const sha = await fetchSha({ owner, name: repo, host }, commitish);
      const histories = fetchHistory({ owner, name: repo, host }, sha);
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
      e instanceof git.GitError &&
      e.stderr === "fatal: not a git repository (or any of the parent directories): .git"
    ) {
      throw new GhDescribeError(e.stderr, e);
    }
    throw e;
  }
}

export async function fetchSha({ owner, name, host }: Repo, sha?: string): Promise<string> {
  if (sha) {
    try {
      const perPage = 1;
      const jq = ".[].sha";
      return await gh.listCommits({ owner, repo: name, sha, perPage, host, jq });
    } catch {
      return sha;
    }
  } else {
    return git.revParse({ arg: "HEAD" });
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
      const stdout = await gh.listCommits({ owner, repo: name, sha, perPage, page, host, jq });
      const historySpan = stdout
        .trim()
        .split("\n");
      count = historySpan.length;
      for (const commitSha of historySpan) {
        yield commitSha;
      }
    } while (count === perPage);
  } catch (e: unknown) {
    if (e instanceof gh.GitHubCliError && e.stderr === "gh: Not Found (HTTP 404)") {
      const msg = `ambiguous argument '${sha}': unknown revision or path not in the ${repo} tree.`;
      throw new GhDescribeError(msg);
    }
    throw e;
  }
}

export async function fetchTotalCommit({ owner, name, host }: Repo, sha: string) {
  const stdout = await gh.graphql({ host })`
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
