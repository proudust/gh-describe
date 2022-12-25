import { fetchHistory } from "./fetch_history.ts";
import { fetchSha } from "./fetch_sha.ts";
import { fetchTags } from "./fetch_tags.ts";
import { GhDescribeError } from "./gh_describe_error.ts";
import { resolveRepo } from "./resolve_repo.ts";
import { searchTag } from "./search_tags.ts";

interface Repo {
  owner: string;
  repo: string;
  host?: string;
}

/**
 * Options which can be set when calling {@link ghDescribe}.
 */
interface GhDescribeOptions {
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
interface GhDescribeOutput {
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
}

export function createDescribe(tag: string, distance: number, sha: string) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substring(0, 7)}`;
  }
}

/**
 * Emulate `git describe --tags` in shallow clone repository.
 */
export async function ghDescribe(options?: GhDescribeOptions): Promise<GhDescribeOutput> {
  const {
    commitish,
    defaultTag,
    match,
    exclude,
  } = options ?? {};
  const { owner, repo, host } = await resolveRepo(options?.repo);

  const [tags, { sha, histories }] = await Promise.all([
    fetchTags({ owner, repo, host, match, exclude }),
    (async () => {
      const sha = await fetchSha({ owner, repo, host, sha: commitish });
      const histories = fetchHistory({ owner, repo, host, sha });
      return { sha, histories };
    })(),
  ]);

  const { distance, tag } = (await searchTag(tags, histories)) || {
    distance: 0,
    tag: defaultTag,
  };

  if (!tag) {
    throw new GhDescribeError("No names found, cannot describe anything.");
  }

  const describe = createDescribe(tag, distance, sha);
  return { describe, tag, distance, sha };
}
