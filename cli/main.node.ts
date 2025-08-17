/**
 * Entry point for GitHub CLI Extensions using Node.js.
 *
 * @module
 */

import { dirname } from "jsr:@std/path@1.1.2";
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
