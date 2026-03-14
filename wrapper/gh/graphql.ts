import { execWithRetry } from "../exec.ts";
import type { GitHubCliOptions } from "./types.ts";

type TaggedTemplatesArgs = Parameters<typeof String.raw>;

function createArgs(
  [template, ...substitutions]: TaggedTemplatesArgs,
  { host, jq }: GitHubCliOptions,
): string[] {
  const query = String.raw(template, ...substitutions);
  const args = ["api", "graphql", "-f", `query=${query}`];
  if (host) args.push("--hostname", host);
  if (jq) args.push("-q", jq);
  return args;
}

/**
 * @see https://docs.github.com/en/graphql
 */
export function graphql({ host, jq }: GitHubCliOptions = {}) {
  return async function graphqlTag(...templateString: TaggedTemplatesArgs) {
    const args = createArgs(templateString, { host, jq });
    return await execWithRetry("gh", args);
  };
}
