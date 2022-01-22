import { graphql, listCommits, listRepositoryTags } from "./gh.ts";

export default ghDescribe;

interface GhDescribeOutput {
  describe: string;
  tag: string;
  distance: number;
  sha: string;
}

export async function ghDescribe(
  owner: string,
  repo: string,
  commitish: string,
  defaultValue?: string,
): Promise<GhDescribeOutput> {
  const [tags, sha] = await Promise.all([fetchTags(owner, repo), fetchSha(owner, repo, commitish)]);

  if (0 < tags.size) {
    let distance = 0;
    for await (const commit of fetchHistory(owner, repo, sha)) {
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

export async function fetchTags(owner: string, repo: string): Promise<Map<string, string>> {
  const tags: [sha: string, name: string][] = [];
  const perPage = 100;
  const jq = ".[] | [.commit.sha, .name]";
  let page = 0;
  let count: number;
  do {
    page++;
    const stdout = await listRepositoryTags(owner, repo, { perPage, page, jq });
    count = tags.push(
      ...stdout
        .split("\n")
        .map((x) => JSON.parse(x)),
    );
  } while (count === perPage);
  return new Map(tags);
}

export async function fetchSha(owner: string, repo: string, sha: string): Promise<string> {
  const perPage = 1;
  const jq = ".[].sha";
  return await listCommits(owner, repo, { sha, perPage, jq });
}

export async function* fetchHistory(
  owner: string,
  repo: string,
  sha: string,
): AsyncGenerator<string, void, void> {
  const perPage = 100;
  const jq = ".[].sha";
  let page = 0;
  let count: number;
  do {
    page++;
    const stdout = await listCommits(owner, repo, { sha, perPage, page, jq });
    const historySpan = stdout
      .trim()
      .split("\n");
    count = historySpan.length;
    for (const commitSha of historySpan) {
      yield commitSha;
    }
  } while (count === perPage);
}

export async function fetchTotalCommit(owner: string, repo: string, sha: string) {
  const stdout = await graphql`
  {
    repository(owner: "${owner}", name: "${repo}") {
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
