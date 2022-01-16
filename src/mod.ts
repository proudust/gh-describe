export default ghDescribe;

interface GhDescribeOutput {
  describe: string;
  tag: string;
  distance: number;
  sha: string;
}

export async function ghDescribe(
  repo: string,
  commitish: string,
  defaultValue?: string,
): Promise<GhDescribeOutput> {
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

export async function fetchTags(repo: string): Promise<Map<string, string>> {
  const tags: [sha: string, name: string][] = [];
  const perPage = 100;
  let page = 0;
  let count: number;
  do {
    page++;
    const process = Deno.run({
      cmd: [
        "gh",
        "api",
        `repos/${repo}/tags?per_page=${perPage}&page=${page}`,
        "--jq",
        ".[] | [.commit.sha, .name]",
      ],
      stdout: "piped",
      stderr: "piped",
    });
    const [status, stdout, stderr] = await Promise.all([
      process.status(),
      process.output(),
      process.stderrOutput(),
    ]);
    if (status.code === 0) {
      count = tags.push(
        ...(new TextDecoder().decode(stdout))
          .trim()
          .split("\n")
          .map((x) => JSON.parse(x)),
      );
    } else {
      throw new Error((new TextDecoder().decode(stderr)).trim());
    }
  } while (count === perPage);
  return new Map(tags);
}

export async function fetchSha(repo: string, sha: string): Promise<string> {
  const perPage = 1;
  const page = 1;
  const process = Deno.run({
    cmd: [
      "gh",
      "api",
      `repos/${repo}/commits?per_page=${perPage}&page=${page}&sha=${sha}`,
      "--jq",
      ".[].sha",
    ],
    stdout: "piped",
    stderr: "piped",
  });
  const [status, stdout, stderr] = await Promise.all([
    process.status(),
    process.output(),
    process.stderrOutput(),
  ]);
  if (status.code === 0) {
    return (new TextDecoder().decode(stdout)).trim();
  } else {
    throw new Error((new TextDecoder().decode(stderr)).trim());
  }
}

export async function* fetchHistory(
  repo: string,
  sha: string,
): AsyncGenerator<string, void, void> {
  const perPage = 100;
  let page = 0;
  let count: number;
  do {
    page++;
    const process = Deno.run({
      cmd: [
        "gh",
        "api",
        `repos/${repo}/commits?per_page=${perPage}&page=${page}&sha=${sha}`,
        "--jq",
        ".[].sha",
      ],
      stdout: "piped",
      stderr: "piped",
    });
    const [status, stdout, stderr] = await Promise.all([
      process.status(),
      process.output(),
      process.stderrOutput(),
    ]);
    if (status.code === 0) {
      const historySpan = (new TextDecoder().decode(stdout))
        .trim()
        .split("\n");
      count = historySpan.length;
      for (const commitSha of historySpan) {
        yield commitSha;
      }
    } else {
      throw new Error((new TextDecoder().decode(stderr)).trim());
    }
  } while (count === perPage);
}

export async function fetchTotalCommit(repo: string, sha: string) {
  const [owner, name] = repo.split("/");
  const process = Deno.run({
    cmd: [
      "gh",
      "api",
      `graphql`,
      "-F",
      `query={
        repository(owner: "${owner}", name: "${name}") {
          object(expression: "${sha}") {
            ... on Commit {
              history(first: 0) {
                totalCount
              }
            }
          }
        }
      }`,
    ],
    stdout: "piped",
    stderr: "piped",
  });
  const [status, stdout, stderr] = await Promise.all([
    process.status(),
    process.output(),
    process.stderrOutput(),
  ]);
  if (status.code === 0) {
    const repository = JSON.parse((new TextDecoder().decode(stdout)).trim());
    return repository.object.history.totalCount;
  } else {
    throw new Error((new TextDecoder().decode(stderr)).trim());
  }
}

export function genDescribe(tag: string, distance: number, sha: string) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substring(0, 7)}`;
  }
}
