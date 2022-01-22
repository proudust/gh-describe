import { debug, getInput, info, setFailed, setOutput } from "https://esm.sh/@actions/core@1.6.0";
import { ghDescribe } from "../core/mod.ts";

async function run() {
  const token = getInput("token", { required: true });
  const [owner, repo] = getInput("repo", { required: true }).split("/");
  debug(`input repo: ${owner}/${repo}`);
  const commitish = getInput("commit-ish", { required: true });
  debug(`input commit-ish: ${commitish}`);
  const defaultValue = getInput("default");
  debug(`input default: ${defaultValue}`);

  try {
    Deno.env.set("GITHUB_TOKEN", token);
    const { describe, tag, distance, sha } = await ghDescribe(owner, repo, commitish, defaultValue);

    info(describe);
    setOutput("describe", describe);
    setOutput("tag", tag);
    setOutput("distance", distance);
    setOutput("sha", sha);
  } catch (e: unknown) {
    const message = (e instanceof Error && e.stack) || String(e);
    setFailed(message);
  }
}

run();
