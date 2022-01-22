import { join } from "https://deno.land/std@0.122.0/path/mod.ts";
import { build as dnt } from "https://deno.land/x/dnt@0.16.1/mod.ts";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.14.11/mod.js";
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
    },
  }),
  await esbuild({
    bundle: true,
    entryPoints: ["./cli/main.ts"],
    outfile: "./dist/cli_deno.js",
    format: "esm",
    target: "es2021",
    define: {
      "globalThis.version": `"${describe}"`,
    },
  }),
]);

for (
  const target of [
    "x86_64-unknown-linux-gnu",
    "x86_64-pc-windows-msvc",
    "x86_64-apple-darwin",
    "aarch64-apple-darwin",
  ]
) {
  console.log(`$ deno compile --target ${target}`);
  const cmd = [
    "deno",
    "compile",
    "-q",
    "--allow-run",
    "--unstable",
    "--no-check",
    "-o",
    join("dist", `gh-describe-${target}`),
    "--target",
    target,
    "./dist/cli_deno.js",
  ];
  const process = Deno.run({ cmd });
  const { code } = await process.status();
  if (code !== 0) {
    const command = cmd.map((x) => x.includes(" ") ? `"${x}"` : x).join(" ");
    throw new Error(`\`${command}\` exit code is not zero, ExitCode: ${code}`);
  }
}

Deno.exit();
