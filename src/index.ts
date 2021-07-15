import { getInput, info, setFailed, setOutput } from "@actions/core";
import { getOctokit } from "@actions/github";

type Octokit = ReturnType<typeof getOctokit>;

async function run(): Promise<void> {
  try {
    const token = getInput("token");
    const [owner, repo] = getInput("repo").split("/");
    const baseSha = getInput("sha");
    const defaultDescribe = getInput("default");
    const octokit = getOctokit(token);

    const [tags, commits] = await Promise.all([
      fetchTagsMap(octokit, owner, repo),
      octokit.rest.repos.listCommits({ owner, repo, sha: baseSha }),
    ]);

    let describe = defaultDescribe;
    for (let i = 0; i < commits.data.length; i++) {
      const sha = commits.data[i].sha;
      const tag = tags.get(sha);
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
  const tags = await octokit.rest.repos.listTags({ owner, repo });
  return new Map(tags.data.map((t) => [t.commit.sha, t.name]));
}

function getDescribe(tag: string, distance: number, sha: string) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substr(0, 7)}`;
  }
}

run();
