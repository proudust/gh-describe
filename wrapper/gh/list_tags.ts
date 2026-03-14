import { execWithRetry } from "../exec.ts";
import type { GitHubCliOptions } from "./types.ts";

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags--parameters
 */
export interface ListTagsOption extends GitHubCliOptions {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * The number of results per page (max 100).
   */
  perPage?: number;

  /**
   * Page number of the results to fetch.
   */
  page?: number;
}

function createUrl(
  {
    owner,
    repo,
    perPage,
    page,
  }: ListTagsOption,
): string {
  const param = new URLSearchParams();
  if (perPage) param.set("per_page", String(perPage));
  if (page) param.set("page", String(page));
  return `repos/${owner}/${repo}/tags?${param}`;
}

function createArgs(
  {
    host,
    jq,
    ...options
  }: ListTagsOption,
): string[] {
  const args = ["api", createUrl(options)];
  if (host) args.push("--hostname", host);
  if (jq) args.push("-q", jq);
  return args;
}

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags
 */
export async function listTags(
  options: ListTagsOption,
): Promise<string> {
  const args = createArgs(options);
  return await execWithRetry("gh", args);
}
