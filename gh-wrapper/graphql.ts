import { exec } from "./exec.ts";
import type { GitHubCliOptions } from "./types.d.ts";

type TaggedTemplateString = Parameters<typeof String.raw>;

/**
 * @see https://docs.github.com/en/graphql
 */
export function graphql({ host, jq }: GitHubCliOptions = {}) {
  return async function graphqlTag(...[template, ...substitutions]: TaggedTemplateString) {
    const query = String.raw(template, ...substitutions);
    const args = ["api", "graphql", "-f", `query=${query}`];
    if (host) args.push("--hostname", host);
    if (jq) args.push("-q", jq);

    return await exec(args);
  };
}
