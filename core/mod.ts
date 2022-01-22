import { graphql, listCommits, listRepositoryTags } from "./gh.ts";
import { parse } from "./ghrepo.ts";

export default ghDescribe;

interface GhDescribeOutput {
  describe: string;
  tag: string;
  distance: number;
  sha: string;
}

export async function ghDescribe(
  repoString: string,
  commitish: string,
  defaultValue?: string,
): Promise<GhDescribeOutput> {
  const repo = parse(repoString);
  const [tags, sha] = await Promise.all([fetchTags(repo), fetchSha(repo, commitish)]);

  if (0 < tags.size) {
    let distance = 0;
    for await (const commit of fetchHistory(repo, sha)) {
      const tag = tags.get(commit);
      if (tag) {
        const describe = genDescribe(tag, distance, sha);
        return { describe, tag, distance, sha };
      } else {
        distance++;
      }
    }
  }

  if (!defaultValue) {
    throw new Error("A tag cannot be found in the commit history.");
  }

  const totalCommit = 0;
  const describe = genDescribe(defaultValue, totalCommit, sha);
  return { describe, tag: defaultValue, distance: totalCommit, sha };
}

interface Repo {
  owner: string;
  name: string;
  host?: string;
}

export async function fetchTags({ owner, name, host }: Repo): Promise<Map<string, string>> {
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
        .map((x) => JSON.parse(x)),
    );
  } while (count === perPage);
  return new Map(tags);
}

export async function fetchSha({ owner, name, host }: Repo, sha: string): Promise<string> {
  const perPage = 1;
  const jq = ".[].sha";
  return await listCommits(owner, name, { sha, perPage, host, jq });
}

export async function* fetchHistory(
  { owner, name, host }: Repo,
  sha: string,
): AsyncGenerator<string, void, void> {
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
