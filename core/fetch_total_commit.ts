import * as gh from "../wrapper/gh/mod.ts";
import { GhDescribeError } from "./gh_describe_error.ts";

interface FetchTotalCommitArgs {
  owner: string;
  repo: string;
  host?: string;
  sha: string;
  graphqlFn?: (args: gh.GraphQLOptions) => gh.GraphQLTag;
}

export async function fetchTotalCommit({
  owner,
  repo,
  host,
  sha,
  graphqlFn = gh.graphql,
}: FetchTotalCommitArgs) {
  const stdout = await graphqlFn({ host })`
  query {
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
  try {
    const repository = JSON.parse(stdout);
    return repository.data.repository.object.history.totalCount;
  } catch (error: unknown) {
    throw new GhDescribeError(
      `Failed to fetch total commit count for ${owner}/${repo}@${sha}. Response is invalid JSON: ${stdout}`,
      { cause: error },
    );
  }
}
