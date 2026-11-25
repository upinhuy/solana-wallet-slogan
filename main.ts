// One-Line Slogan for a Solana Wallet Agent.
// This program writes a single slogan (one line, at most 20 words)
// for a Solana wallet agent to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const slogan =
  "Your Solana wallet, finally with a brain — it swaps, stakes, and saves while you sleep.";

const words = slogan.trim().split(/\s+/).length;
if (words > 20 || slogan.length > 140) {
  throw new Error(`Slogan out of bounds: ${words} words, ${slogan.length} chars`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", slogan + "\n", "utf8");
console.log(slogan);
