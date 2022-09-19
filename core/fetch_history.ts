import * as gh from "../gh-wrapper/mod.ts";
import { GhDescribeError } from "./gh_describe_error.ts";

interface FetchHistoryArgs {
  owner: string;
  repo: string;
  host?: string;
  sha: string;
}

export async function* fetchHistory(
  {
    owner,
    repo,
    host,
    sha,
  }: FetchHistoryArgs,
): AsyncGenerator<string, void, void> {
  try {
    const perPage = 100;
    const jq = ".[].sha";
    let page = 0;
    let count: number;
    do {
      page++;
      const stdout = await gh.listCommits({ owner, repo, sha, perPage, page, host, jq });
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
