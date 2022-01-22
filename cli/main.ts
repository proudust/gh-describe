import { colors } from "https://deno.land/x/cliffy@v0.20.1/ansi/mod.ts";
import { Command, EnumType } from "https://deno.land/x/cliffy@v0.20.1/command/mod.ts";
import { ghDescribe, GhDescribeError } from "../core/mod.ts";
import { getOriginRepo } from "../core/git.ts";

type CommandOptions = { repo?: string; default?: string };
type CommandArguments = [commitIsh: string | undefined];

const cli = new Command<CommandOptions, CommandArguments>()
  .name("gh-describe")
  .version("")
  .description("Emulate `git describe --tags` in shallow clone repository.")
  .option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO")
  .option("--default <tag:string>", "Use this value if the name is not found.")
  .type("runtime", new EnumType(["deno", "node"]))
  .option(
    "--runtime <runtime:runtime>",
    "If installed by `gh extension install`, can specify the execution runtime.",
  )
  .arguments("[commit-ish]")
  .action(async (options, commitish) => {
    const repo = options.repo || await getOriginRepo();
    const defaultValue = options.default;

    try {
      await Deno.permissions.request({ name: "run", command: "gh" });
      const { describe } = await ghDescribe(repo, commitish, defaultValue);
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

(async () => (await cli))();
