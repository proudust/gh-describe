/**
 * Entry point for GitHub CLI Extensions using Node.js.
 *
 * @module
 */

import { dirname } from "https://deno.land/std@0.165.0/path/mod.ts";
import * as git from "../git-wrapper/mod.ts";
import { ghDescribeCli } from "./cli.ts";

declare const __filename: string;

async function version(): Promise<string> {
  return await git.describe({ cwd: dirname(__filename) });
}

async function run() {
  ghDescribeCli({
    version: await version(),
  });
}

run();
