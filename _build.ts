import { build as dnt } from "https://deno.land/x/dnt@0.16.1/mod.ts";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.14.13/mod.js";
import { ghDescribe } from "./core/mod.ts";

console.log("$ gh describe");
const { describe } = await ghDescribe();

console.log("$ dnt");
await dnt({
  entryPoints: [
    "./actions/main.ts",
    "./cli/main.ts",
  ],
  outDir: "./dist/dnt",
  shims: {
    deno: true,
  },
  test: false,
  typeCheck: false,
  declaration: false,
  cjs: false,
  package: {
    name: "gh-describe",
    version: "1.4.3",
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
  await esbuild({
    bundle: true,
    entryPoints: ["./dist/dnt/esm/actions/main.js"],
    outfile: "./dist/actions.js",
    platform: "node",
    target: "es2021",
    define: {
      "globalThis.version": `"${describe}"`,
    },
  }),
  await esbuild({
    bundle: true,
    entryPoints: ["./dist/dnt/esm/cli/main.js"],
    outfile: "./dist/cli.js",
    platform: "node",
    target: "es2021",
    define: {
      "globalThis.version": "undefined",
      "import.meta.url": "undefined",
    },
  }),
]);

Deno.exit();
