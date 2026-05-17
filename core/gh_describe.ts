import { GhDescribeError } from "./gh_describe_error.ts";
import { searchTag } from "./search_tags.ts";

/**
 * Options which can be set when calling {@link ghDescribe}.
 */
export interface GhDescribeOptions {
  /**
   * If the name is not found, use this value.
   */
  defaultTag?: string;

  /**
   * An iterable of commit SHAs in reverse chronological order, starting from the
   * specified commit-ish.
   */
  histories: Iterable<string> | AsyncIterable<string>;

  /**
   * The total number of commits in the repository.
   * This is used to calculate how many characters to use for the short SHA.
   */
  objectCount: number;

  /**
   * Commit SHA to describe.
   */
  sha: string;

  /**
   * A map of commit SHA keys to tag name values.
   */
  tags: Map<string, string>;
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
export function msb(x: number) {
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
  shortSha: string,
): string {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${shortSha}`;
  }
}

/**
 * Emulate git describe --tags for shallow clone repositories.
 */
export async function ghDescribe(options: GhDescribeOptions): Promise<GhDescribeOutput> {
  const {
    defaultTag,
    histories,
    objectCount,
    sha,
    tags,
  } = options;

  // Emulate https://github.com/git/git/blob/e9356ba3ea2a6754281ff7697b3e5a1697b21e24/object-name.c#L829-L847
  // fetch highest set bit in commitCount
  const len = msb(objectCount) + 1;
  // calculate how many chars to use for short sha
  // 7 is the default for git describe
  // https://git-scm.com/docs/git-describe#_examples
  const shortShaChars = Math.max(7, Math.round((len + 1) / 2));
  const shortSha = sha.substring(0, shortShaChars);

  const { distance, tag } = (await searchTag(tags, histories)) || {
    distance: 0,
    tag: defaultTag,
  };

  if (!tag) {
    throw new GhDescribeError("No names found, cannot describe anything.");
  }

  const describe = createDescribe(tag, distance, shortSha);
  return {
    describe,
    tag,
    distance,
    sha,
    shortSha,
  };
}
