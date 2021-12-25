import { debug, getInput, info, setFailed, setOutput } from "@actions/core";
import { getOctokit } from "@actions/github";

type Octokit = ReturnType<typeof getOctokit>;

interface Inputs {
  token: string;
  owner: string;
  repo: string;
  commitish: string;
  defaultValue: string;
}

function getInputs(): Inputs {
  const token = getInput("token");

  function get(name: string): string {
    const value = getInput(name);
    debug(`input ${name}: ${value}`);
    return value;
  }

  const [owner, repo] = get("repo").split("/");
  const commitish = get("commit-ish");
  const defaultValue = get("default");
  return { token, owner, repo, commitish, defaultValue };
}

async function run(): Promise<void> {
  try {
    const inputs = getInputs();
    const octokit = getOctokit(inputs.token);

    const [tags, commits] = await Promise.all([
      fetchTagsMap(octokit, inputs.owner, inputs.repo),
      octokit.rest.repos.listCommits({
        owner: inputs.owner,
        repo: inputs.repo,
        sha: inputs.commitish,
      }),
    ]);

    for (let i = 0; i < commits.data.length; i++) {
      const tag = tags.get(commits.data[i].sha);
      if (tag) {
        const describe = getDescribe(tag, i, commits.data[0].sha);
        info(describe);
        setOutput("describe", describe);
        setOutput("tag", tag);
        setOutput("distance", i);
        setOutput("sha", commits.data[0].sha);
        return;
      }
    }

    if (!inputs.defaultValue) {
      setFailed("A tag cannot be found in the commit history.");
    } else {
      const describe = getDescribe(
        inputs.defaultValue,
        commits.data.length,
        commits.data[0].sha
      );
      info(describe);
      setOutput("describe", describe);
      setOutput("tag", inputs.defaultValue);
      setOutput("distance", commits.data.length);
      setOutput("sha", commits.data[0].sha);
    }
  } catch (e) {
    const message = (e instanceof Error && e.stack) || String(e);
    setFailed(message);
  }
}

async function fetchTagsMap(
  octokit: Octokit,
  owner: string,
  repo: string
): Promise<ReadonlyMap<string, string>> {
  try {
    const { data } = await octokit.rest.repos.listTags({ owner, repo });
    return new Map(data.map((t) => [t.commit.sha, t.name]));
  } catch {
    return new Map();
  }
}

function getDescribe(tag: string, distance: number, sha: string) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substr(0, 7)}`;
  }
}

run();
