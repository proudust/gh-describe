import $ from "@david/dax";
import { build as esbuild } from "esbuild";
import { ghDescribe } from "./core/mod.ts";

console.log("$ gh describe");
const { describe } = await ghDescribe();

console.log("$ esbuild");
await esbuild({
  bundle: true,
  entryPoints: ["./cli/main.compile.ts"],
  outfile: "./dist/cli_deno.js",
  format: "esm",
  target: "es2021",
  define: {
    "globalThis.version": `"${describe}"`,
  },
  external: [
    "@cliffy/ansi",
    "@cliffy/command",
    "@std/path",
  ],
});

for (
  const target of [
    "x86_64-unknown-linux-gnu",
    "x86_64-pc-windows-msvc",
    "x86_64-apple-darwin",
    "aarch64-apple-darwin",
  ]
) {
  console.log(`$ deno compile --target ${target}`);
  const output = `dist/gh-describe-${target}`;
  const cmd =
    $`deno compile -q --no-check --allow-run -o ${output} --target ${target} ./cli/main.compile.ts`;
  const { code } = await cmd;
  if (code !== 0) {
    throw new Error(`\`deno compile\` exit code is not zero, ExitCode: ${code}`);
  }
}

Deno.exit();
