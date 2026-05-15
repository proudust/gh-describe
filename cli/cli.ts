import { colors } from "jsr:@cliffy/ansi@1.1.0/colors";
import { Command, EnumType } from "jsr:@cliffy/command@1.1.0";
import { takeLastWhile } from "jsr:@std/collections@1.1.7";
import { ghDescribe, GhDescribeError } from "../core/mod.ts";

function resolveCollectOption(array: (string | false)[] | undefined): string[] | undefined {
  // If the array is undefined, it means the option was not provided at all, so we return undefined to indicate that.
  if (!array) return undefined;

  // Remove all false values and all elements preceding them from the --no-match and --no-exclude options.
  const filtered = takeLastWhile(array, Boolean) as string[];

  // If the filtered array is empty, return undefined to reset the list.
  return filtered.length > 0 ? filtered : undefined;
}

interface GhDescribeCliArgs {
  version: string | (() => string);
}

export async function ghDescribeCli({ version }: GhDescribeCliArgs) {
  return await new Command()
    .name("gh-describe")
    .version(version)
    .description("Emulate `git describe --tags` for shallow clone repositories.")
    .group("Options like `git describe`")
    .option("--match <pattern:string>", "Only consider tags matching the given glob pattern.", {
      collect: true,
    })
    .option("--no-match", "Clear and reset the list of match patterns.", {
      collect: true,
    })
    .option(
      "--exclude <pattern:string>",
      "Do not consider tags matching the given glob pattern.",
      { collect: true },
    )
    .option("--no-exclude", "Clear and reset the list of exclude patterns.", {
      collect: true,
    })
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
          match: resolveCollectOption(match),
          exclude: resolveCollectOption(exclude),
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
