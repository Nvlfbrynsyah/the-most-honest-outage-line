import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "My API, dashboard, and monitoring are all down, so I cannot confirm which service broke, what caused it, or that anyone is reading this page.";

const args = process.argv.slice(2);

if (args.includes("--help")) {
  console.log("Usage: node main.ts [output-path]");
  console.log("Writes the outage line to [output-path] (default /output/entry.txt).");
  process.exit(0);
}

const outPath = args[0] ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, { encoding: "utf8" });
process.exit(0);
