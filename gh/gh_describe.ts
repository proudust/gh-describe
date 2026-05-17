import { fetchHistory } from "../gh/fetch_history.ts";
import { fetchSha } from "../gh/fetch_sha.ts";
import { fetchTags } from "../gh/fetch_tags.ts";
import { fetchTotalCommit } from "../gh/fetch_total_commit.ts";
import { resolveRepo } from "../core/resolve_repo.ts";
import { ghDescribe as ghDescribeCore } from "../core/gh_describe.ts";

interface Repo {
  owner: string;
  repo: string;
  host?: string;
}

/**
 * Options which can be set when calling {@link ghDescribe}.
 */
export interface GhDescribeOptions {
  /**
   * Target repository. Defaults to origin if omitted. Format: [HOST/]OWNER/REPO
   */
  repo?: string | Repo;

  /**
   * Target Commit-ish object name. Defaults to HEAD if omitted.
   */
  commitish?: string;

  /**
   * Only consider tags matching the given glob pattern.
   */
  match?: string | RegExp | (string | RegExp)[];

  /**
   * Do not consider tags matching the given glob pattern.
   */
  exclude?: string | RegExp | (string | RegExp)[];

  /**
   * If the name is not found, use this value.
   */
  defaultTag?: string;
}

/**
 * The interface returned from calling {@link ghDescribe} which represents the
 * human readable name based on an available ref.
 */
export interface GhDescribeOutput {
  /**
   * `git describe --tags` like describe.
   */
  describe: string;

  /**
   * Most recent tag.
   */
  tag: string;

  /**
   * The number of additional commits from most recent tag.
   */
  distance: number;

  /**
   * Object name for the commit itself.
   */
  sha: string;

  /**
   * Abbreviated object name for the commit itself.
   */
  shortSha: string;
}

// Return the slot of the most-significant bit set in x.
export function MSB(x: number) {
  let r = 0;
  while (x > 1) {
    x >>= 1;
    r++;
  }
  return r;
}

export function createDescribe(
  tag: string,
  distance: number,
  sha: string,
  shortShaChars: number,
): string {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substring(0, shortShaChars)}`;
  }
}

/**
 * Emulate git describe --tags for shallow clone repositories.
 */
export async function ghDescribe(options?: GhDescribeOptions): Promise<GhDescribeOutput> {
  const {
    commitish,
    defaultTag,
    match,
    exclude,
  } = options ?? {};
  const { owner, repo, host } = await resolveRepo(options?.repo);

  const [tags, { sha, histories, commitCount }] = await Promise.all([
    fetchTags({ owner, repo, host, match, exclude }),
    (async () => {
      const sha = await fetchSha({ owner, repo, host, sha: commitish });
      const histories = fetchHistory({ owner, repo, host, sha });
      const commitCount = await fetchTotalCommit({ owner, repo, host, sha });
      return { sha, histories, commitCount };
    })(),
  ]);

  return await ghDescribeCore({
    defaultTag,
    histories,
    objectCount: commitCount,
    sha,
    tags,
  });
}
