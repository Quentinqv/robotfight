import Fighter from "../interfaces/Fighter.js";

/**
 * @class Hippo
 * @extends Fighter
 * @description
 * Hippo fighter.
 * @property {string} name - The name of the fighter.
 * @property {number} strength - The strength of the fighter.
 * @property {number} stamina - The stamina of the fighter.
 * @property {number} speed - The speed of the fighter.
 */

class Hippo extends Fighter {
  constructor(name, strength, stamina, speed) {
    super(name, strength, stamina, speed);
  }

  /**
   * @method
   * @name Hippo#attack
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

      const random = Math.floor(Math.random() * 4);
      switch (random) {
        case 0:
          this.smash(opponent);
        case 1:
          this.uppercut(opponent);
        case 2:
          this.gazellePunch(opponent);
        case 3:
          this.dempseyRoll(opponent);
      }

      // 10% chance to KO the opponent
      if (Math.random() < 0.1) {
        console.log("Hippo KO'd you!");
        opponent.stamina = 0;
      }
      
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Hippo#smash
   * @description
   * Smash the opponent. Basic strength.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.smash(opponent);
   */
  smash(opponent) {
    if (opponent instanceof Fighter) {
      opponent.stamina -= this.strength;
      console.log("Hippo smashed you!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Hippo#uppercut
   * @description
   * Uppercut the opponent. Basic strength + 30.
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
      opponent.stamina -= this.strength + 30;
      console.log("Hippo uppercut you!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Hippo#gazellePunch
   * @description
   * Gazelle punch the opponent. Basic strength + 20.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.gazellePunch(opponent);
   */
  gazellePunch(opponent) {
    if (opponent instanceof Fighter) {
      opponent.stamina -= this.strength + 20;
      console.log("Hippo gazelle punched you!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }

  /**
   * @method
   * @name Hippo#dempseyRoll
   * @description
   * Dempsey roll the opponent. Basic strength + 50.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.dempseyRoll(opponent);
   */
  dempseyRoll(opponent) {
    if (opponent instanceof Fighter) {
      opponent.stamina -= this.strength + 50;
      console.log("Hippo dempsey rolled you!");
      return opponent;
    } else {
      throw new Error("Opponent is not a fighter");
    }
  }
}

export default Hippo;
