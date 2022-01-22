import { Command, EnumType } from "https://deno.land/x/cliffy@v0.20.1/command/mod.ts";
import { ghDescribe } from "../core/mod.ts";

interface Remote {
  name: string;
  fetchUrl?: string;
  pushUrl?: string;
}

async function listRemotes() {
  const process = Deno.run({
    cmd: ["git", "remote", "-v"],
    stdout: "piped",
    stderr: "piped",
  });
  const [status, stdout, stderr] = await Promise.all([
    process.status(),
    process.output(),
    process.stderrOutput(),
  ]);
  if (status.code === 0) {
    const lines = (new TextDecoder().decode(stdout))
      .trim()
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
  } else {
    throw new Error((new TextDecoder().decode(stderr)).trim());
  }
}

async function getOriginRepo() {
  const remotes = await listRemotes();
  const { fetchUrl } = remotes.find((x) => x.name === "origin" && x.fetchUrl) || remotes[0];
  if (!fetchUrl) throw new Error();

  const [_, owner, name] = new URL(fetchUrl).pathname.split("/", 3);
  return `${owner}/${name.endsWith(".git") ? name.substring(0, name.length - 4) : name}`;
}

async function getHeadSha() {
  await Deno.permissions.request({ name: "run", command: "git" });
  const process = Deno.run({
    cmd: ["git", "rev-parse", "HEAD"],
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
    throw new Error((new TextDecoder().decode(stderr)).trim());
  }
}

type CommandOptions = { repo?: string; default?: string };
type CommandArguments = [commitIsh: string | undefined];

const cli = new Command<CommandOptions, CommandArguments>()
  .name("gh-describe")
  .version("")
  .description("Emulate `git describe --tags` in shallow clone repository.")
  .option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO")
  .option("--default", "It is output instead when it action fails. If empty, this step will fail.")
  .type("runtime", new EnumType(["deno", "node"]))
  .option(
    "--runtime <runtime:runtime>",
    "If installed by `gh extension install`, can specify the execution runtime.",
  )
  .arguments("[commit-ish]")
  .action(async (options, commitish) => {
    const repo = (options.repo || await (async () => {
      await Deno.permissions.request({ name: "run", command: "git" });
      return await getOriginRepo();
    })());
    const defaultValue = options.default;
    commitish ||= await getHeadSha();

    await Deno.permissions.request({ name: "run", command: "gh" });
    const { describe } = await ghDescribe(repo, commitish, defaultValue);
    console.log(describe);
  })
  .parse(Deno.args);

(async () => (await cli))();
