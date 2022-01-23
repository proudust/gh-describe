import { build as dnt } from "https://deno.land/x/dnt@0.16.1/mod.ts";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.14.13/mod.js";
import { ghDescribe } from "./core/mod.ts";
import Package from "./package.json" assert { type: "json" };

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
    name: Package.name,
    version: Package.version,
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
