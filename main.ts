import { mkdirSync, writeFileSync } from "node:fs";

const word = "hovercraft"; // one word, 10 chars: he hovers over everything, never lands

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", word);
