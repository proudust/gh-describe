import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";
import { searchTag } from "./mod.ts";

async function* toAsyncGenerator<T>(array: T[]) {
  for (const item of array) {
    yield item;
  }
}

Deno.test("function searchTag(tags, histories)", async (ctx) => {
  await ctx.step("if match, return the tag name and distance", async () => {
    const tags = new Map([
      ["2222222222222222222222222222222222222222", "v0.1.0"],
    ]);
    const histories = toAsyncGenerator<string>([
      "0000000000000000000000000000000000000000",
      "1111111111111111111111111111111111111111",
      "2222222222222222222222222222222222222222",
    ]);
    const result = await searchTag(tags, histories);
    assertEquals(result, {
      distance: 2,
      tag: "v0.1.0",
    });
  });

  await ctx.step("if not match, return null", async () => {
    const tags = new Map([
      ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "v0.1.0"],
    ]);
    const histories = toAsyncGenerator([
      "0000000000000000000000000000000000000000",
      "1111111111111111111111111111111111111111",
      "2222222222222222222222222222222222222222",
    ]);
    const result = await searchTag(tags, histories);
    assertEquals(result, null);
  });

  await ctx.step("if tags is empty, return null", async () => {
    const tags = new Map<never, never>();
    const histories = toAsyncGenerator<string>([
      "0000000000000000000000000000000000000000",
      "1111111111111111111111111111111111111111",
      "2222222222222222222222222222222222222222",
    ]);
    const result = await searchTag(tags, histories);
    assertEquals(result, null);
  });

  await ctx.step("if histories is empty, return null", async () => {
    const tags = new Map([
      ["aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "v0.1.0"],
    ]);
    const histories = toAsyncGenerator([]);
    const result = await searchTag(tags, histories);
    assertEquals(result, null);
  });
});
