import { assertEquals } from "https://deno.land/std@0.148.0/testing/asserts.ts";

Deno.test({
  name: "empty",
  fn() {
    assertEquals(void 0, undefined);
  },
});
