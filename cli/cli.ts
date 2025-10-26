import { colors } from "jsr:@cliffy/ansi@1.0.0-rc.8/colors";
import { Command, EnumType } from "jsr:@cliffy/command@1.0.0-rc.8";
import { ghDescribe, GhDescribeError } from "../core/mod.ts";

interface GhDescribeCliArgs {
  version: string | (() => string);
}

export async function ghDescribeCli({ version }: GhDescribeCliArgs) {
  return await new Command()
    .name("gh-describe")
    .version(version)
    .description("Emulate `git describe --tags` for shallow clone repositories.")
    .group("Options like `git describe`")
    .option("--match <pattern...:string>", "Only consider tags matching the given glob pattern.")
    .option("--no-match", "Clear and reset the list of match patterns.")
    .option(
      "--exclude <pattern...:string>",
      "Do not consider tags matching the given glob pattern.",
    )
    .option("--no-exclude", "Clear and reset the list of exclude patterns.")
    .group("Options for `gh`")
    .option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO")
    .group("Other options")
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
