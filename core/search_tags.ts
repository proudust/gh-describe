interface Tags {
  readonly size: number;
  get(sha: string): string | undefined;
}

type ForAwaitable<T> = Iterable<T> | AsyncIterable<T>;
type Histories = ForAwaitable<string>;

interface SearchTagResult {
  /**
   * Most recent tag.
   */
  tag: string;

  /**
   * The number of additional commits from most recent tag.
   */
  distance: number;
}

/**
 * Search histories for tag with matching SHA.
 */
export async function searchTag(
  tags: Tags,
  histories: Histories,
): Promise<SearchTagResult | null> {
  if (0 < tags.size) {
    let distance = 0;
    for await (const commit of histories) {
      const tag = tags.get(commit);
      if (tag) {
        return { tag, distance };
      } else {
        distance++;
      }
    }
  }
  return null;
}
