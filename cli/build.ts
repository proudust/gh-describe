import { build as dnt } from "https://deno.land/x/dnt@0.16.1/mod.ts";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.14.11/mod.js";
import Package from "../package.json" assert { type: "json" };

console.log("$ dnt");
await dnt({
  entryPoints: ["./cli/main.ts"],
  outDir: "./cli/dist",
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
await esbuild({
  bundle: true,
  entryPoints: ["./cli/dist/esm/cli/main.js"],
  outfile: "./cli/dist/index.js",
  platform: "node",
  target: "es2021",
});

Deno.exit();
