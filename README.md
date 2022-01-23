# gh describe

`git describe --tags` in shallow clones.

`git describe` command is useful for versioning a development build. However, this command requires
a history of all tags and branches, which is difficult to use in workflows where you often shallow
clone. This action gets the history from the GitHub API instead of locally and reproduces its
behavior.

## Install

### GitHub CLI Extensions

Require [GitHub CLI](https://github.com/cli/cli#installation) and JavaScript Runtime
([Deno](https://deno.land/#installation) or [Node.js](https://nodejs.org/)).

```sh
gh extensions install proudust/gh-describe
```

### Deno Install

Require [GitHub CLI](https://github.com/cli/cli#installation) and
[Deno](https://deno.land/#installation).

```sh
deno run -n gh-describe --allow-run --unstable https://raw.githubusercontent.com/proudust/gh-describe/v1.4.3/cli/main.ts
```

or

```sh
deno install -n gh-describe --allow-run --unstable https://raw.githubusercontent.com/proudust/gh-describe/v1.4.3/cli/main.ts
```

### Deno Compile

Require [GitHub CLI](https://github.com/cli/cli#installation). Download from
[Release page](https://github.com/proudust/gh-describe/releases/latest).

## Usage

GitHub CLI Extensions:

```
gh describe
```

Deno:

```
gh-describe
```

### Help

```sh
$ gh describe --help
  Usage:   gh-describe [commit-ish]
  Version: v1.4.3

  Description:

    Emulate `git describe --tags` in shallow clone repository.

  Options:

    -h, --help                - Show this help.
    -V, --version             - Show the version number for this program.
    -R, --repo     <repo>     - Target repository. Format: OWNER/REPO
    --default      <tag>      - Use this value if the name is not found.
    --runtime      <runtime>  - If installed by `gh extension install`, can specify the execution runtime.  (Values: "deno", "node")
```

## GitHub Actions

```yml
- name: Git describe
  id: ghd
  uses: proudust/gh-describe@v1
```

### Action inputs

All inputs are optional. If not set, sensible defaults will be used.

| Name       | Description                              | Default                                                   |
| ---------- | ---------------------------------------- | --------------------------------------------------------- |
| token      | Personal Access Token (PAT)              | `GITHUB_TOKEN`                                            |
| repo       | Target repository                        | The owner and repository that triggered the workflow run. |
| commit-ish | Commit-ish object names to describe.     | The branch or tag ref that triggered the workflow run.    |
| default    | Use this value if the name is not found. | `​`                                                       |

### Action outputs

The following outputs can be used by subsequent workflow steps.

| Name     | Description                                            | Example              |
| -------- | ------------------------------------------------------ | -------------------- |
| describe | `git describe --tags` like describe.                   | `v1.0.4-14-g2414721` |
| tag      | Most recent tag.                                       | `v1.0.4`             |
| distance | The number of additional commits from most recent tag. | `14`                 |
| sha      | Object name for the commit itself.                     | `2414721`            |

Step outputs can be accessed as in the following example.\
Note that in order to read the step outputs the action step must have an id.

```yml
- name: Git describe
  id: ghd
  uses: proudust/gh-describe@v1
- name: Check outputs
  run: |
    echo "describe: ${{ steps.ghd.outputs.describe }}"
    echo "tag     : ${{ steps.ghd.outputs.tag }}"
    echo "distance: ${{ steps.ghd.outputs.distance }}"
    echo "sha     : ${{ steps.ghd.outputs.sha }}"
```

## License

[MIT License](LICENSE)
