export async function exec(cmd: string[]): Promise<string> {
  const process = Deno.run({
    cmd,
    stdout: "piped",
    stderr: "piped",
  });
  const [status, stdout, stderr] = await Promise.all([
    process.status(),
    process.output(),
    process.stderrOutput(),
  ]);
  if (status.code === 0) {
    return (new TextDecoder().decode(stdout)).trim();
  } else {
    // If the jq parameter is specified,
    // re-running the command without the jq parameter because the error is hard to understand.
    const jqIndex = cmd.indexOf("-q");
    if (0 < jqIndex) {
      await exec([...cmd.slice(0, jqIndex), ...cmd.slice(jqIndex + 2, cmd.length)]);

      // Throws the first run error if re-run does not result in an error
    }
    throw new ExecError(cmd, status.code, (new TextDecoder().decode(stderr)).trim());
  }
}

export class ExecError extends Error {
  constructor(
    public readonly cmd: readonly string[],
    public readonly code: number,
    public readonly stderr: string,
  ) {
    super(
      `\`${
        cmd.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ")
      }\` exit code is not zero, ExitCode: ${code}\n${stderr}`,
    );
  }
}

interface GitHubCliOptions {
  host?: string | undefined;
  jq?: string;
}

/**
 * @see https://docs.github.com/en/rest/reference/commits#list-commits--parameters
 */
interface ListCommitsOptions {
  sha?: string;
  perPage?: number;
  page?: number;
}

/**
 * @see https://docs.github.com/en/rest/reference/commits#list-commits
 */
export async function listCommits(
  owner: string,
  repo: string,
  { sha, perPage, page, host, jq }: ListCommitsOptions & GitHubCliOptions = {},
): Promise<string> {
  const param = new URLSearchParams();
  if (sha) param.set("sha", sha);
  if (perPage) param.set("per_page", String(perPage));
  if (page) param.set("page", String(page));

  const cmd = ["gh", "api", `repos/${owner}/${repo}/commits?${param}`];
  if (host) cmd.push("--hostname", host);
  if (jq) cmd.push("-q", jq);

  return await exec(cmd);
}

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags--parameters
 */
interface ListRepositoryTagsOption {
  perPage?: number;
  page?: number;
}

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags
 */
export async function listRepositoryTags(
  owner: string,
  repo: string,
  { perPage, page, host, jq }: ListRepositoryTagsOption & GitHubCliOptions = {},
): Promise<string> {
  const param = new URLSearchParams();
  if (perPage) param.set("per_page", String(perPage));
  if (page) param.set("page", String(page));

  const cmd = ["gh", "api", `repos/${owner}/${repo}/tags?${param}`];
  if (host) cmd.push("--hostname", host);
  if (jq) cmd.push("-q", jq);

  return await exec(cmd);
}

/**
 * @see https://docs.github.com/en/graphql
 */
export function graphql({ host, jq }: GitHubCliOptions = {}) {
  return async (
    pieces: { readonly raw: readonly string[] },
    ...args: unknown[]
  ): Promise<string> => {
    const query = pieces.raw.reduce((s, p) => s += p + args.shift(), "");
    const cmd = ["gh", "api", "graphql", "-f", `query=${query}`];
    if (host) cmd.push("--hostname", host);
    if (jq) cmd.push("-q", jq);

    return await exec(cmd);
  };
}
