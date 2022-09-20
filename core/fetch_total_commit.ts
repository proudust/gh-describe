import * as gh from "../gh-wrapper/mod.ts";

interface FetchTotalCommitArgs {
  owner: string;
  repo: string;
  host?: string;
  sha?: string;
}

export async function fetchTotalCommit({ owner, repo, host, sha }: FetchTotalCommitArgs) {
  const stdout = await gh.graphql({ host })`
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
