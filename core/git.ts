import { parseFromUrl } from "./ghrepo.ts";

async function exec(cmd: string[]): Promise<string> {
  await Deno.permissions.request({ name: "run", command: cmd[0] });
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
    throw new GitError(cmd, status.code, (new TextDecoder().decode(stderr)).trim());
  }
}

export class GitError extends Error {
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

interface Remote {
  name: string;
  fetchUrl?: string;
  pushUrl?: string;
}

export async function listRemotes(): Promise<Remote[]> {
  const lines = (await exec(["git", "remote", "-v"]))
    .split("\n")
    .map<string[]>((x) => /(.+)\s+(.+)\s+\((push|fetch)\)/.exec(x) || [])
    .filter((x) => x.length === 4);
  const remotes: Remote[] = [];
  let name: string | undefined = undefined;
  let fetchUrl: string | undefined = undefined;
  let pushUrl: string | undefined = undefined;
  for (const [_, lineName, lineUrl, type] of lines) {
    if (!name) {
      name = lineName;
    } else if (name != lineName) {
      remotes.push({ name, fetchUrl, pushUrl });
      name = lineName;
      fetchUrl = pushUrl = undefined;
    }

    switch (type) {
      case "fetch":
        fetchUrl = lineUrl;
        break;
      case "push":
        pushUrl = lineUrl;
        break;
    }
  }

  if (name) {
    remotes.push({ name, fetchUrl, pushUrl });
  }
  return remotes;
}

export async function getOriginRepo() {
  const remotes = await listRemotes();
  const { fetchUrl } = remotes.find((x) => x.name === "origin" && x.fetchUrl) || remotes[0];
  if (!fetchUrl) throw new Error();

  return parseFromUrl(fetchUrl);
}

export async function getHeadSha(): Promise<string> {
  return (await exec(["git", "rev-parse", "HEAD"]));
}

export async function gitDescribe({ cwd }: { cwd: string }) {
  const cmd = ["git"];
  if (cwd) cmd.push("-C", cwd);
  cmd.push("describe", "--tags");
  return await exec(cmd);
}
