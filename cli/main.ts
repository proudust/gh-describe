import { dirname, fromFileUrl } from "https://deno.land/std@0.148.0/path/mod.ts";
import { gitDescribe } from "../core/git.ts";
import { ghDescribeCli } from "./cli.ts";

declare const __filename: string;

async function version(): Promise<string> {
  if (import.meta.url?.startsWith("file:")) {
    return await gitDescribe({ cwd: dirname(fromFileUrl(import.meta.url)) });
  } else if (import.meta.url?.startsWith("https:")) {
    return /v\d+\.\d+\.\d+/.exec(import.meta.url)?.[0] || "unknown";
  } else {
    return await gitDescribe({ cwd: dirname(__filename) });
  }
}

async function run() {
  ghDescribeCli({
    version: await version(),
  });
}

run();
