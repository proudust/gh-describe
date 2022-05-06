import { dirname, fromFileUrl } from "https://deno.land/std@0.122.0/path/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.24.0/ansi/mod.ts";
import { Command, EnumType } from "https://deno.land/x/cliffy@v0.24.0/command/mod.ts";
import { ghDescribe, GhDescribeError } from "../core/mod.ts";
import { gitDescribe } from "../core/git.ts";

declare const __filename: string;

declare let globalThis: {
  version: string | undefined;
};

async function version(): Promise<string> {
  if (import.meta.url?.startsWith("file:")) {
    return await gitDescribe({ cwd: dirname(fromFileUrl(import.meta.url)) });
  } else if (import.meta.url?.startsWith("https:")) {
    return /v\d+\.\d+\.\d+/.exec(import.meta.url)?.[0] || "unknown";
  } else {
    return await gitDescribe({ cwd: dirname(__filename) });
  }
}

type CommandOptions = { repo?: string; default?: string };
type CommandArguments = [commitIsh: string | undefined];

async function run() {
  return await new Command<CommandOptions, CommandArguments>()
    .name("gh-describe")
    .version(globalThis.version || await version())
    .description("Emulate `git describe --tags` in shallow clone repository.")
    .option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO")
    .option("--default <tag:string>", "Use this value if the name is not found.")
    .type("runtime", new EnumType(["deno", "node"]))
    .option(
      "--runtime <runtime:runtime>",
      "If installed by `gh extension install`, can specify the execution runtime.",
    )
    .arguments("[commit-ish]")
    .action(async ({ repo, default: defaultTag }, commitish) => {
      try {
        await Deno.permissions.request({ name: "run", command: "gh" });
        const { describe } = await ghDescribe(repo, commitish, defaultTag);
        console.log(describe);
      } catch (e: unknown) {
        if (e instanceof GhDescribeError) {
          console.error(`${colors.bold.red("fatal:")} ${e.message}`);
          Deno.exit(1);
        } else {
          throw e;
        }
      }
    })
    .parse(Deno.args);
}

run();
