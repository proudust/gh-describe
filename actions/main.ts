import { debug, getInput, info, setFailed, setOutput } from "npm:@actions/core@1.11.1";
import { ghDescribe, GhDescribeError } from "../core/mod.ts";

async function run() {
  const token = getInput("token", { required: true });
  const repo = getInput("repo", { required: true });
  debug(`input repo: ${repo}`);
  const commitish = getInput("commit-ish", { required: true });
  debug(`input commit-ish: ${commitish}`);
  const match = (getInput("match") || null)?.split(/\s*,\s*/);
  debug(`input match: ${match}`);
  const exclude = (getInput("exclude") || null)?.split(/\s*,\s*/);
  debug(`input exclude: ${exclude}`);
  const defaultTag = getInput("default");
  debug(`input default: ${defaultTag}`);

  try {
    Deno.env.set("GITHUB_TOKEN", token);
    const { describe, tag, distance, sha, shortSha } = await ghDescribe({
      repo,
      commitish,
      defaultTag,
      match,
      exclude,
    });

    info(describe);
    setOutput("describe", describe);
    setOutput("tag", tag);
    setOutput("distance", distance);
    setOutput("sha", sha);
    setOutput("short-sha", shortSha);
  } catch (e: unknown) {
    if (e instanceof GhDescribeError) {
      setFailed(`fatal: ${e.message}`);
    } else {
      const message = (e instanceof Error && e.stack) || String(e);
      setFailed(message);
    }
  }
}

run();
