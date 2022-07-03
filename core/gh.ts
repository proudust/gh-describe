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
    throw new GhError(cmd, status.code, (new TextDecoder().decode(stderr)).trim());
  }
}

export function execSync(cmd: string[]) {
  const { status, stdout, stderr } = Deno.spawnSync(cmd[0], { args: cmd.slice(1) });
  if (status.code === 0) {
    return (new TextDecoder().decode(stdout)).trim();
  } else {
    // If the jq parameter is specified,
    // re-running the command without the jq parameter because the error is hard to understand.
    const jqIndex = cmd.indexOf("-q");
    if (0 < jqIndex) {
      execSync([...cmd.slice(0, jqIndex), ...cmd.slice(jqIndex + 2, cmd.length)]);

      // Throws the first run error if re-run does not result in an error
    }
    throw new GhError(cmd, status.code, (new TextDecoder().decode(stderr)).trim());
  }
}

export class GhError extends Error {
  constructor(
    public readonly cmd: readonly string[],
    public readonly code: number,
    public readonly stderr: string,
  ) {
    const cmdStr = cmd.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ");
    const message = `\`${cmdStr}\` exit code is not zero.
  code: ${code}
  stderr: "${stderr}"`;
    super(message);

    Error.captureStackTrace?.(this, this.constructor);
  }
}

Object.defineProperty(GhError.prototype, "name", {
  configurable: true,
  enumerable: false,
  value: GhError.name,
  writable: true,
});

interface GitHubCliOptions {
  host?: string | undefined;
  jq?: string;
}

/**
 * @see https://docs.github.com/en/rest/reference/commits#list-commits--parameters
 */
interface ListCommitsOptions {
  owner: string;
  repo: string;
  sha?: string;
  perPage?: number;
  page?: number;
}

function listCommitsArgs({
  owner,
  repo,
  sha,
  perPage,
  page,
  host,
  jq,
}: ListCommitsOptions & GitHubCliOptions): string[] {
  const param = new URLSearchParams();
  if (sha) param.set("sha", sha);
  if (perPage) param.set("per_page", String(perPage));
  if (page) param.set("page", String(page));

  const cmd = ["gh", "api", `repos/${owner}/${repo}/commits?${param}`];
  if (host) cmd.push("--hostname", host);
  if (jq) cmd.push("-q", jq);

  return cmd;
}

/**
 * @see https://docs.github.com/en/rest/reference/commits#list-commits
 */
export async function listCommits(params: ListCommitsOptions & GitHubCliOptions): Promise<string> {
  const cmd = listCommitsArgs(params);
  return await exec(cmd);
}

/**
 * @see https://docs.github.com/en/rest/reference/commits#list-commits
 */
export function listCommitsSync(params: ListCommitsOptions & GitHubCliOptions): string {
  const cmd = listCommitsArgs(params);
  return execSync(cmd);
}

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags--parameters
 */
interface ListRepositoryTagsOption {
  owner: string;
  repo: string;
  perPage?: number;
  page?: number;
}

function listRepositoryTagsArgs({
  owner,
  repo,
  perPage,
  page,
  host,
  jq,
}: ListRepositoryTagsOption & GitHubCliOptions): string[] {
  const param = new URLSearchParams();
  if (perPage) param.set("per_page", String(perPage));
  if (page) param.set("page", String(page));

  const cmd = ["gh", "api", `repos/${owner}/${repo}/tags?${param}`];
  if (host) cmd.push("--hostname", host);
  if (jq) cmd.push("-q", jq);

  return cmd;
}

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags
 */
export async function listRepositoryTags(
  params: ListCommitsOptions & GitHubCliOptions,
): Promise<string> {
  const cmd = listRepositoryTagsArgs(params);
  return await exec(cmd);
}

/**
 * @see https://docs.github.com/en/rest/reference/repos#list-repository-tags
 */
export function listRepositoryTagsSync(params: ListCommitsOptions & GitHubCliOptions): string {
  const cmd = listRepositoryTagsArgs(params);
  return execSync(cmd);
}

function graphqlArgs(
  { host, jq }: GitHubCliOptions,
  pieces: { raw: readonly string[] },
  ...args: unknown[]
): string[] {
  const query = pieces.raw.reduce((s, p) => s += p + args.shift(), "");
  const cmd = ["gh", "api", "graphql", "-f", `query=${query}`];
  if (host) cmd.push("--hostname", host);
  if (jq) cmd.push("-q", jq);

  return cmd;
}

/**
 * @see https://docs.github.com/en/graphql
 */
export function graphql(params: GitHubCliOptions = {}) {
  return async (
    pieces: { readonly raw: readonly string[] },
    ...args: unknown[]
  ): Promise<string> => {
    const cmd = graphqlArgs({ ...params }, pieces, ...args);
    return await exec(cmd);
  };
}

/**
 * @see https://docs.github.com/en/graphql
 */
export function graphqlSync(params: GitHubCliOptions = {}) {
  return (
    pieces: { readonly raw: readonly string[] },
    ...args: unknown[]
  ): string => {
    const cmd = graphqlArgs({ ...params }, pieces, ...args);
    return execSync(cmd);
  };
}
