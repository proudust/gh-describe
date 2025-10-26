import * as gh from "../gh-wrapper/mod.ts";
import * as git from "../git-wrapper/mod.ts";
import { GhDescribeError } from "./gh_describe_error.ts";

interface FetchShaArgs {
  owner: string;
  repo: string;
  host?: string;
  sha?: string;
}

export async function fetchSha(args: FetchShaArgs): Promise<string> {
  const { sha } = args;
  if (sha) {
    try {
      const perPage = 1;
      const jq = ".[].sha";
      return await gh.listCommits({ ...args, perPage, jq });
    } catch (e: unknown) {
      throw new GhDescribeError(`couldn't find remote ref ${sha}`, { cause: e });
    }
  } else {
    return git.revParse({ arg: "HEAD" });
  }
}
