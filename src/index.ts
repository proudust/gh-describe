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
    const { sha } = commits.data[0];

    if (0 < tags.size) {
      for (let i = 0; i < commits.data.length; i++) {
        const tag = tags.get(commits.data[i].sha);
        if (tag) {
          const describe = getDescribe(tag, i, sha);
          info(describe);
          setOutput("describe", describe);
          setOutput("tag", tag);
          setOutput("distance", i);
          setOutput("sha", sha);
          return;
        }
      }
    }

    if (!inputs.defaultValue) {
      setFailed("A tag cannot be found in the commit history.");
      return;
    } else {
      const totalCount = await fetchHistoryTotalCount(
        octokit,
        inputs.owner,
        inputs.repo,
        sha
      );

      const describe = getDescribe(inputs.defaultValue, totalCount, sha);
      info(describe);
      setOutput("describe", describe);
      setOutput("tag", inputs.defaultValue);
      setOutput("distance", totalCount);
      setOutput("sha", sha);
      return;
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

interface FetchHistoryTotalCountResult {
  repository: {
    object: {
      history: {
        totalCount: number;
      };
    };
  };
}

async function fetchHistoryTotalCount(
  octokit: Octokit,
  owner: string,
  repo: string,
  sha: string
) {
  const { repository } = await octokit.graphql<FetchHistoryTotalCountResult>(`
    {
      repository(owner: "${owner}", name: "${repo}") {
        object(expression: "${sha}") {
          ... on Commit {
            history(first: 0) {
              totalCount
            }
          }
        }
      }
    }
  `);
  return repository.object.history.totalCount;
}

function getDescribe(tag: string, distance: number, sha: string) {
  if (distance === 0) {
    return tag;
  } else {
    return `${tag}-${distance}-g${sha.substr(0, 7)}`;
  }
}

run();
