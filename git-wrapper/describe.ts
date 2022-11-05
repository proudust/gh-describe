import { exec } from "./exec.ts";
import type { GitOptions } from "./types.d.ts";

function createArgs({ cwd }: GitOptions): string[] {
  const args = [];
  if (cwd) args.push("-C", cwd);
  args.push("describe", "--tags");
  return args;
}

/**
 * @see https://git-scm.com/docs/git-describe
 */
export async function describe(options: GitOptions = {}) {
  const args = createArgs(options);
  return await exec(args);
}
