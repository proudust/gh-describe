import * as git from "../git-wrapper/mod.ts";
import { parseFromUrl } from "./ghrepo.ts";

export async function getOriginRepo() {
  const remotes = await git.listRemotes();
  const { fetchUrl } = remotes.find((x) => x.name === "origin" && x.fetchUrl) || remotes[0];
  if (!fetchUrl) throw new Error();

  return parseFromUrl(fetchUrl);
}
