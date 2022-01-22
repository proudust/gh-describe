import { build as dnt } from "https://deno.land/x/dnt@0.16.0/mod.ts";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.14.11/mod.js";
import Package from "../package.json" assert { type: "json" };

console.log("$ dnt");
await dnt({
  entryPoints: ["./actions/main.ts"],
  outDir: "./actions/dist",
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
  entryPoints: ["./actions/dist/esm/actions/main.js"],
  outfile: "./actions/dist/index.js",
  platform: "node",
  target: "es2021",
});

Deno.exit();
