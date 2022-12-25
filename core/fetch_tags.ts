import * as gh from "../gh-wrapper/mod.ts";
import { toReqExpArray } from "./to_regexp_array.ts";

type TagTuple = [sha: string, tag: string];

interface FetchTagsContext {
  match: RegExp[];
  exclude: RegExp[];
}

function parseTags(stdout: string, { match, exclude }: FetchTagsContext): TagTuple[] {
  return stdout.split("\n")
    .filter((x) => x)
    .map<TagTuple>((x) => JSON.parse(x))
    .filter(([, tag]) =>
      (!match.length || match.some((y) => y.test(tag))) &&
      (!exclude.length || !exclude.some((y) => y.test(tag)))
    );
}

interface FetchTagsArgs {
  owner: string;
  repo: string;
  host?: string;
  match?: string | RegExp | (string | RegExp)[];
  exclude?: string | RegExp | (string | RegExp)[];
}

type Tags = Map<string, string>;

export async function fetchTags(
  {
    owner,
    repo,
    host,
    match,
    exclude,
  }: FetchTagsArgs,
): Promise<Tags> {
  const context = {
    match: toReqExpArray(match),
    exclude: toReqExpArray(exclude),
  };

  const tags: [sha: string, name: string][] = [];
  const perPage = 100;
  const jq = ".[] | [.commit.sha, .name]";
  let page = 0;
  let count: number;
  do {
    page++;
    const stdout = await gh.listTags({ owner, repo, perPage, page, host, jq });
    const tuples = parseTags(stdout, context);
    count = tags.push(...tuples);
  } while (count === perPage);
  return new Map(tags);
}
