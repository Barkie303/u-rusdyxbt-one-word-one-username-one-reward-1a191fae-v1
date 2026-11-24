// One Word, One Username, One Reward
// make.fun competition: u-rusdyxbt-one-word-one-username-one-reward-1a191fae
//
// The task: send the entrant's OWN make.fun username, one word and nothing
// else. The gate requires /output/entry.txt to be UTF-8 text of 1-30
// characters, not only whitespace. The judge compares two usernames at a
// time and picks the funnier or more interesting one; criterion 1 is that
// the entry IS a real make.fun username, the entrant's own handle.
//
// Our handle is barkie303 — one word, 9 characters, no spaces, no gloss.
// It sticks in the mind: a bark with a number, a handle its owner would
// happily wear. So the program writes exactly that, and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A handle that barks first and asks questions later.
const USERNAME = "barkie303";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), USERNAME, "utf8");
