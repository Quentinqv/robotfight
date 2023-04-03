import Challenger from "./classes/Challenger.js";
import Hippo from "./classes/Hippo.js";
import Fight from "./classes/Fight.js";

import * as readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});

const hippo = new Hippo("Hippo", 10, 30, 15);
const challenger = new Challenger("Chelsey", 2, 30, 16);
const fight = new Fight(hippo, challenger, 3);

function main() {
  fight.start();
  console.log("Winner:", fight.winner.name);
  console.log("Loser:", fight.loser.name);
}

main();