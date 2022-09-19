export async function exec(args: string[]): Promise<string> {
  const process = Deno.run({
    cmd: ["git", ...args],
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
    throw new GitError(args, code, (new TextDecoder().decode(stderr)).trim());
  }
}

export class GitError extends Error {
  constructor(
    public readonly args: readonly string[],
    public readonly code: number,
    public readonly stderr: string,
  ) {
    super(
      `\`git ${
        args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")
      }\` exit code is not zero, ExitCode: ${code}\n${stderr}`,
    );
  }
}
