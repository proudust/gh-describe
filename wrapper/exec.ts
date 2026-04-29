import { execFile } from "node:child_process";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);

export async function exec(cmd: "gh" | "git", args: string[]): Promise<string> {
  try {
    const { stdout } = await execFileAsync(cmd, args, {
      encoding: "utf8",
      maxBuffer: Infinity,
    });
    return stdout.trim();
  } catch (e: unknown) {
    // execFile error: either exit code (number) or spawn error (string code)
    if (e && typeof e === "object" && "code" in e) {
      const code = (e as Record<string, unknown>).code;
      const stderr = (e as Record<string, unknown>).stderr;
      throw new CliError(cmd, args, code as number | string, String(stderr).trim());
    }
    throw e;
  }
}

export async function execWithRetry(cmd: "gh", args: string[]): Promise<string> {
  try {
    return await exec(cmd, args);
  } catch (e) {
    if (e instanceof CliError && e.cmd === "gh") {
      const jqIndex = e.args.indexOf("-q");
      if (jqIndex > 0) {
        await exec(cmd, [...e.args.slice(0, jqIndex), ...e.args.slice(jqIndex + 2)]);
      }
    }
    throw e;
  }
}

export class CliError extends Error {
  constructor(
    public readonly cmd: "gh" | "git",
    public readonly args: readonly string[],
    public readonly code: number | string,
    public readonly stderr: string,
  ) {
    super(
      `\`${cmd} ${
        args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")
      }\` exit code is not zero, ExitCode: ${code}\n${stderr}`,
    );
  }
}
