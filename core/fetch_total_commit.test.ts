import { assertEquals, assertInstanceOf, assertStringIncludes } from "jsr:@std/assert@1.0.19";
import { fetchTotalCommit } from "./fetch_total_commit.ts";
import { GhDescribeError } from "./gh_describe_error.ts";
import { GraphQLOptions, GraphQLTag } from "../wrapper/gh/graphql.ts";

Deno.test("async function fetchTotalCommit(args)", async (ctx) => {
  await ctx.step(
    "Invalid JSON response throws GhDescribeError with cause",
    async () => {
      const mockGraphQL = (_args: GraphQLOptions): GraphQLTag => () => "{ invalid json }";

      let thrownError: GhDescribeError | null = null;
      try {
        await fetchTotalCommit({
          owner: "test-owner",
          repo: "test-repo",
          sha: "abc123",
          graphqlFn: mockGraphQL,
        });
      } catch (error) {
        thrownError = error as GhDescribeError;
      }

      // Should throw GhDescribeError
      assertInstanceOf(thrownError, GhDescribeError);

      // Error message should include owner, repo, and sha
      assertStringIncludes(
        thrownError!.message,
        "Failed to fetch total commit count for test-owner/test-repo@abc123",
      );

      // Error message should include the invalid response (truncated)
      assertStringIncludes(
        thrownError!.message,
        "{ invalid json }",
      );

      // cause should be a SyntaxError
      assertInstanceOf(thrownError!.cause, SyntaxError);
    },
  );

  await ctx.step(
    "Valid JSON response returns totalCount",
    async () => {
      const mockGraphQL = (_args: GraphQLOptions): GraphQLTag => () =>
        JSON.stringify({
          data: {
            repository: {
              object: {
                history: {
                  totalCount: 42,
                },
              },
            },
          },
        });

      const result = await fetchTotalCommit({
        owner: "test-owner",
        repo: "test-repo",
        sha: "abc123",
        graphqlFn: mockGraphQL,
      });

      assertEquals(result, 42);
    },
  );
});
