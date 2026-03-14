import { execWithRetry } from "../exec.ts";
import type { GitHubCliOptions } from "./types.ts";

/**
 * @see https://docs.github.com/en/rest/reference/commits#list-commits--parameters
 */
interface ListCommitsOptions {
  /**
   * The account owner of the repository. The name is not case sensitive.
   */
  owner: string;

  /**
   * The name of the repository. The name is not case sensitive.
   */
  repo: string;

  /**
   * SHA or branch to start listing commits from.
   * Default: the repository’s default branch (usually master).
   */
  sha?: string;

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
    sha,
    perPage,
    page,
  }: ListCommitsOptions,
): string {
  const param = new URLSearchParams();
  if (sha) param.set("sha", sha);
  if (perPage) param.set("per_page", String(perPage));
  if (page) param.set("page", String(page));
  return `repos/${owner}/${repo}/commits?${param}`;
}

interface ListCommitsOptionsWithCliOptions extends ListCommitsOptions, GitHubCliOptions {
}

function createArgs(
  {
    host,
    jq,
    ...options
  }: ListCommitsOptionsWithCliOptions,
): string[] {
  const args = ["api", createUrl(options)];
  if (host) args.push("--hostname", host);
  if (jq) args.push("-q", jq);
  return args;
}

/**
 * @see https://docs.github.com/en/rest/reference/commits#list-commits
 */
export async function listCommits(
  options: ListCommitsOptionsWithCliOptions,
): Promise<string> {
  const args = createArgs(options);
  return await execWithRetry("gh", args);
}
