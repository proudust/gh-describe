/**
 * Entry point for GitHub CLI Extensions using Node.js.
 *
 * @module
 */

import { dirname } from "https://deno.land/std@0.171.0/path/mod.ts";
import * as git from "../git-wrapper/mod.ts";
import { ghDescribeCli } from "./cli.ts";

declare const __filename: string;

function version(): string {
  return git.describeSync({ cwd: dirname(__filename) });
}

ghDescribeCli({ version });
