import { exec } from "./exec.ts";
import type { GitHubCliOptions } from "./types.d.ts";

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags--parameters
 */
interface ListTagsOption {
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
  }: ListTagsOption,
): string {
  return `repos/${owner}/${repo}/tags`;
}
function getPageParams(
  {
    perPage,
    page,
  }: ListTagsOption,
): string[] {
  const params = [];
  if (perPage) params.push(`-F per_page=${perPage}`);
  if (page) params.push(`-F page=${page}`);
  return params;
}

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags
 */
export async function listTags(
  {
    host,
    jq,
    ...options
  }: ListTagsOption & GitHubCliOptions,
): Promise<string> {
  const args = ["api", "-XGET", createUrl(options), ...getPageParams(options)];
  if (host) args.push("--hostname", host);
  if (jq) args.push("-q", jq);

  return await exec(args);
}
