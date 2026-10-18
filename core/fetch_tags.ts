import * as gh from "../wrapper/gh/mod.ts";
import { toReqExpArray } from "./to_regexp_array.ts";
import { GhDescribeError } from "./gh_describe_error.ts";

type TagTuple = [sha: string, tag: string];

interface FetchTagsContext {
  match: RegExp[];
  exclude: RegExp[];
}

function parseTags(stdout: string): TagTuple[] {
  return stdout.split("\n")
    .map((line, index) => [line, index + 1] as [string, number])
    .filter(([line]) => line)
    .map<TagTuple>(([line, lineNumber]) => {
      try {
        return JSON.parse(line);
      } catch (error: unknown) {
        throw new GhDescribeError(
          `Failed to parse tag at line ${lineNumber}: ${line}`,
          { cause: error },
        );
      }
    });
}

export type ListTagsOption = gh.ListTagsOption;

export interface FetchTagsArgs {
  owner: string;
  repo: string;
  host?: string;
  match?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
  listTagsFn?: (args: ListTagsOption) => string | Promise<string>;
}

type Tags = Map<string, string>;

export async function fetchTags(
  {
    owner,
    repo,
    host,
    match,
    exclude,
    listTagsFn = gh.listTags,
  }: FetchTagsArgs,
): Promise<Tags> {
  const matchArray = toReqExpArray(match);
  const excludeArray = toReqExpArray(exclude);

  // GitHub API returns tags in newest-first order.
  // When multiple tags point to the same commit, keep the first (newest) one.
  const tags = new Map<string, string>();
  const perPage = 100;
  const jq = ".[] | [.commit.sha, .name]";
  let page = 0;
  let tuples: TagTuple[];
  do {
    page++;
    const stdout = await listTagsFn({ owner, repo, perPage, page, host, jq });
    tuples = parseTags(stdout);
    for (const [sha, name] of tuples) {
      if (
        (!matchArray.length || matchArray.some((y) => y.test(name))) &&
        (!excludeArray.length || !excludeArray.some((y) => y.test(name))) &&
        !tags.has(sha)
      ) {
        tags.set(sha, name);
      }
    }
  } while (tuples.length === perPage);
  return tags;
}
