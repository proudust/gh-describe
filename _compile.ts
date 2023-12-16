import $ from "https://deno.land/x/dax@0.35.0/mod.ts";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.15.16/mod.js";
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
  const cmd = $`deno compile -q --allow-run -o ${output} --target ${target} ./dist/cli_deno.js`;
  const { code } = await cmd;
  if (code !== 0) {
    throw new Error(`\`deno compile\` exit code is not zero, ExitCode: ${code}`);
  }
}

Deno.exit();
