// Node 22 entry point for a make.fun judged joke bounty.
// Keep the authored joke in one place; the output must be deterministic and single-line.
// Only Node's built-in fs/path modules are used, and only the three required helpers.
// Anti-cliche rule: pick a fresh workplace mechanism, not the worn meeting/email/morning bits.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Punchline rule: turn corporate jargon literal, then rebrand it at the last beat.
const joke = "Our team went async-first, so now I can leave you on read and call it productivity.";

// The judge reads entry.txt from MAKEFUN_OUTPUT_DIR; the default keeps local runs predictable.
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Create the target directory when absent, then write exactly one UTF-8 text file.
mkdirSync(outputDir, { recursive: true });
// Determinism rule: emit the same fixed UTF-8 bytes every run, with no timestamps or randomness.
writeFileSync(join(outputDir, "entry.txt"), joke, "utf8");
