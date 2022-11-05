import { exec } from "./exec.ts";
import type { GitOptions } from "./types.d.ts";

interface RevParse {
  arg: string;
}

function createArgs({ arg, cwd }: RevParse & GitOptions): string[] {
  const args = [];
  if (cwd) args.push("-C", cwd);
  args.push("rev-parse", arg);
  return args;
}

/**
 * @see https://git-scm.com/docs/git-rev-parse
 */
export async function revParse(options: RevParse & GitOptions): Promise<string> {
  const args = createArgs(options);
  return await exec(args);
}
