import Fighter from "../interfaces/Fighter.js";

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
  attack(opponent) {
    if (opponent instanceof Fighter) {
      // 10% chance to KO the opponent
      if (Math.random() < 0.1) {
        opponent.stamina = 0;
        return opponent;
      }

      opponent.stamina -= this.strength;
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }
}

export default Challenger;
