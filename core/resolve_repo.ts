import * as git from "../git-wrapper/mod.ts";
import { GitHubRepository, parse } from "./ghrepo.ts";
import { GhDescribeError } from "./gh_describe_error.ts";
import { getOriginRepo } from "./git.ts";

interface Repo {
  owner: string;
  repo: string;
  host?: string;
}

export async function resolveRepo(repo?: string | Repo): Promise<GitHubRepository> {
  if (typeof repo === "string") {
    return parse(repo);
  }

  try {
    return await getOriginRepo();
  } catch (e: unknown) {
    if (
      e instanceof git.GitError &&
      e.stderr === "fatal: not a git repository (or any of the parent directories): .git"
    ) {
      throw new GhDescribeError(e.stderr, e);
    }
    throw e;
  }
}
