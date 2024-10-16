import { globToRegExp } from "jsr:@std/path@1.0.6";

export function toReqExpArray(glob?: string | RegExp | (string | RegExp)[]): RegExp[] {
  if (!glob) {
    return [];
  }

  if (!(glob instanceof Array)) {
    glob = [glob];
  }

  return glob.map((x) => x instanceof RegExp ? x : globToRegExp(x));
}
