import { assertRejects } from "jsr:@std/assert@1.0.15";
import { fetchSha } from "./fetch_sha.ts";
import { GhDescribeError } from "./mod.ts";

Deno.test("async function fetchSha(args)", async (ctx) => {
  await ctx.step(
    "If GitHub does not recognize the specified commit-ish, it will result in an error.",
    async () => {
      async function fn() {
        await fetchSha({
          owner: "proudust",
          repo: "gh-describe",
          sha: "refs/pull/1/merge",
        });
      }
      const ErrorClass = GhDescribeError;
      const msgIncludes = "couldn't find remote ref refs/pull/1/merge";
      await assertRejects(fn, ErrorClass, msgIncludes);
    },
  );
});
