# gh describe

Emulate `git describe --tags` for shallow clone repositories.

The [`git describe`](https://git-scm.com/docs/git-describe) command is a useful tool for versioning
a development build. However, it requires access to the full history of all tags and branches, which
can be a problem in workflows where you often work with shallow clones of repositories. This tool,
`gh-describe`, retrieves the necessary historical information from the GitHub API instead of
locally, allowing you to use `git describe` as you normally would even in shallow clone
repositories.

## Usage in GitHub Actions

```yml
- name: Git describe
  id: ghd
  uses: proudust/gh-describe@v1
```

### Action inputs

All inputs are optional, and sensible defaults will be used if they are not set.

| Name       | Description                                           | Default                                                   |
| ---------- | ----------------------------------------------------- | --------------------------------------------------------- |
| token      | Personal Access Token (PAT)                           | `GITHUB_TOKEN`                                            |
| repo       | Target repository                                     | The owner and repository that triggered the workflow run. |
| commit-ish | Commit-ish object names to describe.                  | The branch or tag ref that triggered the workflow run.    |
| match      | Only consider tags matching the given glob pattern.   |                                                           |
| exclude    | Do not consider tags matching the given glob pattern. |                                                           |
| default    | If the name is not found, use this value.             | If the name is not found, the action fails.               |

### Action outputs

The following outputs can be used by subsequent workflow steps.

| Name      | Description                                                | Example                                    |
| --------- | ---------------------------------------------------------- | ------------------------------------------ |
| describe  | `git describe --tags`-like description.                    | `v1.5.4-2-g4fdf9d0`                        |
| tag       | The most recent tag.                                       | `v1.5.4`                                   |
| distance  | The number of additional commits from the most recent tag. | `2`                                        |
| sha       | The object name for the commit itself.                     | `4fdf9d0b88fe5f55e465ae947bca6b6b55c39415` |
| short-sha | The object name for the commit itself.                     | `4fdf9d0`                                  |

Step outputs can be accessed using the following example.\
Note that in order to read the step outputs, the action step must have an ID.

```yml
- name: Git describe
  id: ghd
  uses: proudust/gh-describe@v1
- name: Check outputs
  run: |
    echo "describe  : ${{ steps.ghd.outputs.describe }}"
    echo "tag       : ${{ steps.ghd.outputs.tag }}"
    echo "distance  : ${{ steps.ghd.outputs.distance }}"
    echo "sha       : ${{ steps.ghd.outputs.sha }}"
    echo "short-sha : ${{ steps.ghd.outputs.short-sha }}"
```

## Usage on your terminal

### GitHub CLI Extensions

Require [GitHub CLI](https://github.com/cli/cli#installation) and JavaScript Runtime
([Deno](https://deno.land/#installation) or [Node.js](https://nodejs.org/)).

```sh
gh extensions install proudust/gh-describe
gh describe
```

### Deno

Require [GitHub CLI](https://github.com/cli/cli#installation) and
[Deno](https://deno.land/#installation).

```sh
deno run --allow-run https://deno.land/x/gh_describe@v2.0.0/main.ts
```

or

```sh
deno install -n gh-describe --allow-run https://deno.land/x/gh_describe@v2.0.0/main.ts
gh-describe
```

### Self-contained executable

Require [GitHub CLI](https://github.com/cli/cli#installation). Download from
[Release page](https://github.com/proudust/gh-describe/releases/latest).

Windows:

```cmd
gh-describe-x86_64-pc-windows-msvc.exe
```

Mac or Linux:

```sh
./gh-describe-aarch64-apple-darwin
./gh-describe-x86_64-apple-darwin
./gh-describe-x86_64-unknown-linux-gnu
```

### Help

```sh
$ gh describe --help
  Usage:   gh-describe [commit-ish]
  Version: v2.0.0

  Description:

    Emulate `git describe --tags` for shallow clone repositories.

  Options:

    -h, --help     - Show this help.
    -V, --version  - Show the version number for this program.

  Options like `git describe`:

    --match       <pattern...>  - Only consider tags matching the given glob pattern.
    --no-match                  - Clear and reset the list of match patterns.
    --exclude     <pattern...>  - Do not consider tags matching the given glob pattern.
    --no-exclude                - Clear and reset the list of exclude patterns.

  Options for `gh`:

    -R, --repo  <repo>  - Target repository. Format: OWNER/REPO

  Other options:

    --default  <tag>      - If the name is not found, use this value.
    --runtime  <runtime>  - If installed by `gh extension install`, can specify the execution runtime.  (Values: "deno", "node")
```

## License

[MIT License](LICENSE)
