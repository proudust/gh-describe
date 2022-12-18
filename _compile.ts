import { join } from "https://deno.land/std@0.165.0/path/mod.ts";
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
  const cmd = [
    "deno",
    "compile",
    "-q",
    "--allow-run",
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
