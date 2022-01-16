import { build as dnt } from "https://deno.land/x/dnt@0.16.0/mod.ts";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.14.11/mod.js";
import Package from "../package.json" assert { type: "json" };

console.log("$ dnt");
await dnt({
  entryPoints: ["./src/actions.ts"],
  outDir: "./dist/dnt",
  shims: {
    deno: true,
  },
  test: false,
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
  entryPoints: ["dist/dnt/esm/actions.js"],
  outfile: "./dist/index.js",
  platform: "node",
  target: "es2021",
});

Deno.exit();
