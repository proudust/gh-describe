import { dirname, fromFileUrl } from "https://deno.land/std@0.148.0/path/mod.ts";
import * as git from "../git-wrapper/mod.ts";
import { ghDescribeCli } from "./cli.ts";

async function version(): Promise<string> {
  if (import.meta.url.startsWith("file:")) {
    return await git.describe({ cwd: dirname(fromFileUrl(import.meta.url)) });
  } else {
    return /v\d+\.\d+\.\d+/.exec(import.meta.url)?.[0] || "unknown";
  }
}

async function run() {
  ghDescribeCli({
    version: await version(),
  });
}

run();
