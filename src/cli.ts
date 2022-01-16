import { Command } from "https://deno.land/x/cliffy@v0.20.1/command/mod.ts";
import { ghDescribe } from "./mod.ts";

type CommandOptions = { repo: string; default: string };
type CommandArguments = [commitIsh: string | undefined];

await new Command<CommandOptions, CommandArguments>()
  .name("gh-describe")
  .version("")
  .description("Emulate `git describe --tags` in shallow clone repository.")
  .option("-R, --repo <repo>", "Target repository. Format: OWNER/REPO")
  .option("--default", "It is output instead when it action fails. If empty, this step will fail.")
  .arguments("[commit-ish]")
  .action(async (options, commitish) => {
    await Deno.permissions.request({ name: "run", command: "gh" });
    console.debug(options);

    const { repo, default: defaultValue } = options;
    commitish ||= "master";

    try {
      const { describe } = await ghDescribe(repo, commitish, defaultValue);
      console.log(describe);
    } catch (e: unknown) {
      console.error(e instanceof Error && e.message || String(e));
    }
  })
  .parse(Deno.args);
