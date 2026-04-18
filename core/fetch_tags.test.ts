import { assertEquals } from "jsr:@std/assert@1.0.19";
import { fetchTags, ListTagsOption } from "./fetch_tags.ts";

Deno.test("async function fetchTags(args)", async (ctx) => {
  await ctx.step(
    "#104: Repository with exactly 100 tags causes API rate limit exceeded",
    async () => {
      let callCount = 0;

      const mockListTags = (options: ListTagsOption) => {
        callCount++;

        // Page 1: Return 100 tags
        if (options.page === 1) {
          const tags = Array.from({ length: 100 }, (_, i) => ({
            commit: { sha: `sha${i}` },
            name: `v1.${i}`,
          }));
          return tags.map((tag) => JSON.stringify([tag.commit.sha, tag.name]))
            .join("\n");
        }

        // Page 2: Return empty
        if (options.page === 2) {
          return "";
        }

        // Beyond: throw error to detect infinite loop
        throw new Error("Should not call listTags beyond page 2");
      };

      const result = await fetchTags({
        owner: "test",
        repo: "repo",
        listTagsFn: mockListTags,
      });

      assertEquals(result.size, 100);

      // Should only call listTags twice (page 1 with 100 tags, page 2 with 0)
      assertEquals(callCount, 2);
    },
  );

  await ctx.step(
    "#115: Multiple tags on same commit should keep newest tag",
    async () => {
      const mockListTags = (options: ListTagsOption) => {
        if (options.page === 1) {
          // GitHub API returns tags newest-first
          const tags = [
            { commit: { sha: "aaa" }, name: "v0.0.7" },
            { commit: { sha: "aaa" }, name: "v0.0.6" },
            { commit: { sha: "bbb" }, name: "v0.0.5" },
          ];
          return tags.map((tag) => JSON.stringify([tag.commit.sha, tag.name]))
            .join("\n");
        }
        return "";
      };

      const result = await fetchTags({
        owner: "test",
        repo: "repo",
        listTagsFn: mockListTags,
      });

      // Same SHA "aaa" has two tags; newest (v0.0.7) should be kept
      assertEquals(result.get("aaa"), "v0.0.7");
      assertEquals(result.get("bbb"), "v0.0.5");
      assertEquals(result.size, 2);
    },
  );
});
