import { build as dnt } from "jsr:@deno/dnt@0.41.3";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.24.0/mod.js";
import { ghDescribe } from "./core/mod.ts";
import * as git from "./git-wrapper/mod.ts";

console.log("$ gh describe");
const describe = await ghDescribe()
  .then(({ describe }) => describe)
  .catch(async () => {
    console.warn("failed");
    console.log("$ git describe");
    return await git.describe();
  });
console.log(describe);

console.log("$ dnt");
await dnt({
  entryPoints: [
    "./actions/main.ts",
    "./cli/main.node.ts",
  ],
  outDir: "./dist/dnt",
  shims: {
    deno: true,
  },
  typeCheck: false,
  declaration: false,
  scriptModule: false,
  skipSourceOutput: true,
  package: {
    name: "gh-describe",
    version: describe,
    description: "`git describe --tags` in shallow clones on GitHub Actions.",
    repository: {
      type: "git",
      url: "git+https://github.com/proudust/gh-describe.git",
    },
    keywords: [
      "actions",
    ],
    author: "Proudust",
    license: "MIT",
    bugs: {
      url: "https://github.com/proudust/gh-describe/issues",
    },
    homepage: "https://github.com/proudust/gh-describe#readme",
  },
});

console.log("$ esbuild");
await Promise.all([
  esbuild({
    bundle: true,
    entryPoints: ["./dist/dnt/esm/actions/main.js"],
    outfile: "./dist/actions.js",
    platform: "node",
    target: "es2021",
  }),
  esbuild({
    bundle: true,
    entryPoints: ["./dist/dnt/esm/cli/main.node.js"],
    outfile: "./dist/cli.js",
    platform: "node",
    target: "es2021",
  }),
]);

Deno.exit();
