import { exec } from "./exec.ts";
import { GitOptions } from "./types.d.ts";

function creareArgs({ cwd }: GitOptions): string[] {
  const args = [];
  if (cwd) args.push("-C", cwd);
  args.push("remote", "-v");
  return args;
}

interface Remote {
  name: string;
  fetchUrl?: string;
  pushUrl?: string;
}

function parseRemotes(stdout: string): Remote[] {
  const lines = stdout.split("\n")
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

/**
 * @see https://git-scm.com/docs/git-remote
 */
export async function listRemotes(options: GitOptions = {}): Promise<Remote[]> {
  const args = creareArgs(options);
  const stdout = await exec(args);
  return parseRemotes(stdout);
}
