/**
 * Options given to `git` command.
 */
export interface GitOptions {
  /**
   * Run as if git was started in <path> instead of the current working directory.
   */
  cwd?: string;
}
