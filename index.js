import Challenger from "./classes/Challenger.js";
import Hippo from "./classes/Hippo.js";
import Fight from "./classes/Fight.js";

import * as readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false,
});


async function main() {
  const nbRounds = await new Promise((resolve, reject) => {
    rl.question("Number of rounds in the fight (Max 10) : ", resolve);
  });

  const name = await new Promise((resolve, reject) => {
    rl.question("What's your Challenger name ? ", resolve);
  });

  const hippo = new Hippo("Hippo", 10, 30, 15);
  const challenger = new Challenger(name, 2, 30, 16);
  const fight = new Fight(hippo, challenger, nbRounds);

  fight.start();

  if (fight.isEnded()) {
    console.log("Fight ended after", fight.round, "rounds");
    console.log("Winner:", fight.winner.name);
    console.log("Loser:", fight.loser.name);
  }
}

main();