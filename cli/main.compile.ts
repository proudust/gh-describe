/**
 * Entry point for `deno compile`.
 *
 * @module
 */

import { ghDescribeCli } from "./cli.ts";

declare let globalThis: {
  version: string;
};

ghDescribeCli({
  version: globalThis.version,
});
