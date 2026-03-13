/**
 * Options given to `gh api` command.
 */
export interface GitHubCliOptions {
  /**
   * The GitHub hostname for the request. (default "github.com")
   */
  host?: string | undefined;

  /**
   * Query to select values from the response using jq syntax.
   */
  jq?: string;
}
