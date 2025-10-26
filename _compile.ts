import $ from "jsr:@david/dax@0.43.2";
import { build as esbuild } from "https://deno.land/x/esbuild@v0.25.11/mod.js";
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
    "jsr:@cliffy/ansi@1.0.0-rc.8/colors",
    "jsr:@cliffy/command@1.0.0-rc.8",
    "jsr:@std/path@1.0.6",
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
  const cmd = $`deno compile -q --allow-run -o ${output} --target ${target} ./dist/cli_deno.js`;
  const { code } = await cmd;
  if (code !== 0) {
    throw new Error(`\`deno compile\` exit code is not zero, ExitCode: ${code}`);
  }
}

Deno.exit();
