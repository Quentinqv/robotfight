/**
 * @interface
 * @name Fighter
 * @description
 * Interface for a fighter.
 * @property {string} name - The name of the fighter.
 * @property {number} strength - The strength of the fighter.
 * @property {number} stamina - The stamina of the fighter.
 * @property {number} speed - The speed of the fighter.
 */

class Fighter {
  constructor(name, strength, stamina, speed) {
    this.name = name;
    this.strength = strength;
    this.stamina = stamina;
    this.speed = speed;
  }

  /**
   * @method
   * @name Fighter#attack
   * @description
   * Attack the opponent.
   * @param {Fighter} opponent - The opponent.
   * @returns {Fighter}
   * @throws {Error}
   * @example
   * const fighter = new Fighter("Fighter", 10, 10, 10);
   * const opponent = new Fighter("Opponent", 10, 10, 10);
   * fighter.attack(opponent);
   */
  attack(opponent) {}
}

export default Fighter;
