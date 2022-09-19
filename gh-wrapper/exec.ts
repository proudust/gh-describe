export async function exec(args: string[]): Promise<string> {
  const process = Deno.run({
    cmd: ["gh", ...args],
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
    // If the jq parameter is specified,
    // re-running the command without the jq parameter because the error is hard to understand.
    const jqIndex = args.indexOf("-q");
    if (0 < jqIndex) {
      await exec([...args.slice(0, jqIndex), ...args.slice(jqIndex + 2, args.length)]);

      // Throws the first run error if re-run does not result in an error
    }
    throw new GitHubCliError(args, code, (new TextDecoder().decode(stderr)).trim());
  }
}

export class GitHubCliError extends Error {
  constructor(
    public readonly args: readonly string[],
    public readonly code: number,
    public readonly stderr: string,
  ) {
    super(
      `\`gh ${
        args.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")
      }\` exit code is not zero, ExitCode: ${code}\n${stderr}`,
    );
  }
}
