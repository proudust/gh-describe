import { debug, getInput, info, setFailed, setOutput } from "@actions/core";
import { getOctokit } from "@actions/github";

type Octokit = ReturnType<typeof getOctokit>;

async function run(): Promise<void> {
  try {
    const token = getInput("token");
    const [owner, repo] = getInput("repo").split("/");
    debug(`input repo: ${owner}/${repo}`);
    const sha = getInput("sha");
    debug(`input sha: ${sha}`);
    const defaultDescribe = getInput("default");
    debug(`input default: ${defaultDescribe}`);
    const octokit = getOctokit(token);

    const [tags, commits] = await Promise.all([
      fetchTagsMap(octokit, owner, repo),
      octokit.rest.repos.listCommits({ owner, repo, sha }),
    ]);

    let describe = defaultDescribe;
    for (let i = 0; i < commits.data.length; i++) {
      const tag = tags.get(commits.data[i].sha);
      if (tag) {
        describe = getDescribe(tag, i, sha);
        break;
      }
    }
    info(describe);
    setOutput("describe", describe);
  } catch (e) {
    setFailed(e?.stack || e);
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
