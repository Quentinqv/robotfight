import Fighter from "../interfaces/Fighter.js";
import * as readLine from "readline";

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

/**
 * @class Challenger
 * @extends Fighter
 * @description
 * Challenger fighter.
 * @property {string} name - The name of the fighter.
 * @property {number} strength - The strength of the fighter.
 * @property {number} stamina - The stamina of the fighter.
 * @property {number} speed - The speed of the fighter.
 */

class Challenger extends Fighter {
  constructor(name, strength, stamina, speed) {
    super(name, strength, stamina, speed);
  }

  /**
   * @method
   * @name Challenger#attack
   * @description
   * Attack the opponent.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.attack(opponent);
   * @override
   * @see Fighter#attack
   */
  async attack(opponent) {
    if (opponent instanceof Fighter) {

      console.log("Choose your attack: 1. Jab, 2. Hook, 3. Uppercut, 4. Sequence");
      let attack = await new Promise((resolve, reject) => {
        rl.question("Enter your choice: ", resolve);
      });

      switch (attack) {
        case "1":
          this.jab(opponent);
          break;
        case "2":
          this.hook(opponent);
          break;
        case "3":
          this.uppercut(opponent);
          break;
        case "4":
          this.sequence(opponent);
          break;
        default:
          this.jab(opponent);
          break;
      }

      // 10% chance to KO the opponent
      if (Math.random() < 0.1) {
        console.log("You KO'd your opponent!");
        opponent.stamina = 0;
      }

      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Challenger#jab
   * @description
   * Jab the opponent. Basic strength.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.jab(opponent);
   */
  jab(opponent) {
    if (opponent instanceof Fighter) {
      opponent.stamina -= this.strength;
      console.log("You jabbed your opponent!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Challenger#uppercut
   * @description
   * Uppercut the opponent. Basic strength + 20.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.uppercut(opponent);
   */
  uppercut(opponent) {
    if (opponent instanceof Fighter) {
      opponent.stamina -= this.strength + 20;
      console.log("You uppercut your opponent!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Challenger#hook
   * @description
   * Hook the opponent. Basic strength + 15.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.hook(opponent);
   */
  hook(opponent) {
    if (opponent instanceof Fighter) {
      opponent.stamina -= this.strength + 15;
      console.log("You hooked your opponent!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Challenger#sequence
   * @description
   * Sequence of attacks. Basic strength + 30.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.sequence(opponent);
   */
  sequence(opponent) {
    if (opponent instanceof Fighter) {
      opponent.stamina -= this.strength + 30;
      console.log("You attacked your opponent with a sequence!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }
}

export default Challenger;
