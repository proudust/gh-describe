import { fetchHistory } from "./fetch_history.ts";
import { fetchSha } from "./fetch_sha.ts";
import { fetchTags } from "./fetch_tags.ts";
import { fetchTotalCommit } from "./fetch_total_commit.ts";
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

  const [tags, { sha, histories, shortShaChars }] = await Promise.all([
    fetchTags({ owner, repo, host, match, exclude }),
    (async () => {
      const sha = await fetchSha({ owner, repo, host, sha: commitish });
      const histories = fetchHistory({ owner, repo, host, sha });

      // Emulate https://github.com/git/git/blob/e9356ba3ea2a6754281ff7697b3e5a1697b21e24/object-name.c#L829-L847
      const commitCount = await fetchTotalCommit({ owner, repo, host, sha });
      // fetch highest set bit in commitCount
      const distance = MSB(commitCount) + 1;
      // calculate how many chars to use for short sha
      // 7 is the default for git describe
      // https://git-scm.com/docs/git-describe#_examples
      const shortShaChars = Math.max(7, Math.round((distance + 1) / 2));

      return { sha, histories, shortShaChars };
    })(),
  ]);

  const { distance, tag } = (await searchTag(tags, histories)) || {
    distance: 0,
    tag: defaultTag,
  };

  if (!tag) {
    throw new GhDescribeError("No names found, cannot describe anything.");
  }

  const describe = createDescribe(tag, distance, sha, shortShaChars);
  return {
    describe,
    tag,
    distance,
    sha,
    shortSha: sha.substring(0, shortShaChars),
  };
}
