export async function exec(args: string[]): Promise<string> {
  const { code, stdout, stderr } = await new Deno.Command("git", { args }).output();
  if (code === 0) {
    return (new TextDecoder().decode(stdout)).trim();
  } else {
    throw new GitError(args, code, (new TextDecoder().decode(stderr)).trim());
  }
}

export function execSync(args: string[]): string {
  const { code, stdout, stderr } = new Deno.Command("git", { args }).outputSync();
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
