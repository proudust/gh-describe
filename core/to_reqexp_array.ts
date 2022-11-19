import { globToRegExp } from "https://deno.land/std@0.165.0/path/glob.ts";

export function toReqExpArray(glob?: string | RegExp | (string | RegExp)[]): RegExp[] {
  if (!glob) {
    return [];
  }

  if (!(glob instanceof Array)) {
    glob = [glob];
  }

  return glob.map((x) => x instanceof RegExp ? x : globToRegExp(x));
}
