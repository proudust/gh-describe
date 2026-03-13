export async function exec(cmd: "gh" | "git", args: string[]): Promise<string> {
  let process: Deno.Process | null = null;
  try {
    // deno-lint-ignore no-deprecated-deno-api
    process = Deno.run({
      cmd: [cmd, ...args],
      stdout: "piped",
      stderr: "piped",
    });
    const [{ code }, stdout, stderr] = await Promise.all([
      process.status(),
      process.output(),
      process.stderrOutput(),
    ]);
    if (code === 0) {
      return (new TextDecoder().decode(stdout)).trim();
    } else {
      throw new CliError(cmd, args, code, (new TextDecoder().decode(stderr)).trim());
    }
  } finally {
    process?.close();
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
    public readonly code: number,
    public readonly stderr: string,
  ) {
    super(
      `\`${cmd} ${
        args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")
      }\` exit code is not zero, ExitCode: ${code}\n${stderr}`,
    );
  }
}
