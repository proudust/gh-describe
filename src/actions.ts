import { debug, getInput, info, setFailed, setOutput } from "https://esm.sh/@actions/core@1.6.0";
import { ghDescribe } from "./mod.ts";

const repo = getInput("repo", { required: true });
debug(`input repo: ${repo}`);
const commitish = getInput("commit-ish", { required: true });
debug(`input commit-ish: ${commitish}`);
const defaultValue = getInput("default");
debug(`input default: ${defaultValue}`);

try {
  const { describe, tag, distance, sha } = await ghDescribe(repo, commitish, defaultValue);

  info(describe);
  setOutput("describe", describe);
  setOutput("tag", tag);
  setOutput("distance", distance);
  setOutput("sha", sha);
} catch (e: unknown) {
  const message = (e instanceof Error && e.stack) || String(e);
  setFailed(message);
}
