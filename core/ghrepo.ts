class GitHubRepository {
  constructor(
    public readonly owner: string,
    public readonly name: string,
    public readonly host?: string,
  ) {}

  public toString() {
    if (this.host) {
      return `${this.host}/${this.owner}/${this.name}`;
    } else {
      return `${this.owner}/${this.name}`;
    }
  }
}

/**
 * @param repo "OWNER/REPO" or full url
 */
export function parse(repo: string): GitHubRepository {
  if (isUrl(repo)) {
    return parseFromUrl(repo);
  } else {
    return parseFromFullName(repo);
  }
}

function isUrl(maybeUrl: string): boolean {
  return maybeUrl.startsWith("git@") ||
    maybeUrl.startsWith("ssh:") ||
    maybeUrl.startsWith("git+ssh:") ||
    maybeUrl.startsWith("git:") ||
    maybeUrl.startsWith("http:") ||
    maybeUrl.startsWith("git+https:") ||
    maybeUrl.startsWith("https:");
}

function parseFromUrl(rawUrl: string): GitHubRepository {
  const { host, pathname } = new URL(rawUrl);
  const [_, owner, rawName] = pathname.split("/", 3);
  const name = rawName.endsWith(".git") ? rawName.substring(0, rawName.length - 4) : rawName;
  const maybeHost = host !== "github.com" ? host : undefined;
  return new GitHubRepository(owner, name, maybeHost);
}

function parseFromFullName(fullName: string): GitHubRepository {
  const parts = fullName.split("/", 4);
  if (parts.some((p) => p.length <= 0)) {
    throwFormatError(fullName);
  }

  switch (parts.length) {
    case 2:
      return new GitHubRepository(parts[0], parts[1]);

    case 3:
      return new GitHubRepository(parts[1], parts[2], parts[0]);

    default:
      throwFormatError(fullName);
  }

  function throwFormatError(invalid: string): never {
    throw new Error(`"${invalid}" is invalid format. Requires "[HOST/]OWNER/REPO" format.`);
  }
}
