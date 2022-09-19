import { dirname, fromFileUrl } from "https://deno.land/std@0.148.0/path/mod.ts";
import { colors } from "https://deno.land/x/cliffy@v0.25.0/ansi/mod.ts";
import { Command, EnumType } from "https://deno.land/x/cliffy@v0.25.0/command/mod.ts";
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

export async function ghDescribeCli() {
  return await new Command()
    .name("gh-describe")
    .version(globalThis.version || await version())
    .description("Emulate `git describe --tags` in shallow clone repository.")
    .option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO")
    .option("--match <pattern...:string>", "Only consider tags matching the given glob pattern.")
    .option("--no-match", "Clear and reset list of match pattern.")
    .option(
      "--exclude <pattern...:string>",
      "Do not consider tags matching the given glob pattern.",
    )
    .option("--no-exclude", "Clear and reset list of exclude pattern.")
    .option("--default <tag:string>", "If the name is not found, use this value.")
    .type("runtime", new EnumType(["deno", "node"]))
    .option(
      "--runtime <runtime:runtime>",
      "If installed by `gh extension install`, can specify the execution runtime.",
    )
    .arguments("[commit-ish]")
    .action(async ({ repo, default: defaultTag, match, exclude }, commitish) => {
      try {
        const { describe } = await ghDescribe({
          repo,
          commitish,
          match: match || undefined,
          exclude: exclude || undefined,
          defaultTag,
        });
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
