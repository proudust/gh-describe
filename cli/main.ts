import { dirname, fromFileUrl } from "https://deno.land/std@0.171.0/path/mod.ts";
import * as git from "../git-wrapper/mod.ts";
import { ghDescribeCli } from "./cli.ts";

function version(): string {
  if (import.meta.url.startsWith("file:")) {
    const url = fromFileUrl(import.meta.url);
    const cwd = dirname(url);
    return git.describeSync({ cwd });
  } else {
    return /v\d+\.\d+\.\d+/.exec(import.meta.url)?.[0] || "unknown";
  }
}

ghDescribeCli({ version });
