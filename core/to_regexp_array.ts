import { globToRegExp } from "@std/path";

export function toReqExpArray(glob?: string | RegExp | (string | RegExp)[]): RegExp[] {
  if (!glob) {
    return [];
  }

  if (!(glob instanceof Array)) {
    glob = [glob];
  }

  return glob.map((x) => x instanceof RegExp ? x : globToRegExp(x));
}
