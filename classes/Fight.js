/**
 * @class Fight
 * @param {Character} character1
 * @param {Character} character2
 * @param {Number} [rounds=1]
 * @description
 * Fight between two characters.
 * @property {Character} character1 - The first character.
 * @property {Character} character2 - The second character.
 * @property {Number} rounds - The number of rounds.
 * @property {Number} round - The current round.
 * @property {Number} winner - The winner of the fight.
 * @property {Number} loser - The loser of the fight.
 */

class Fight {
  constructor(character1, character2, rounds = 10) {
    if (character1.speed == character2.speed) {
      // 50% chance to start with character1
      if (Math.random() < 0.5) {
        this.character1 = character1;
        this.character2 = character2;
      } else {
        this.character1 = character2;
        this.character2 = character1;
      }
    } else {
      this.character1 =
        character1.speed > character2.speed ? character1 : character2;
      this.character2 =
        character1.speed < character2.speed ? character1 : character2;
    }

    this.rounds = rounds > 10 ? 10 : rounds;
    this.round = 0;
    this.winner = null;
    this.loser = null;
  }

  /**
   * @method
   * @name Fight#start
   * @description
   * Start the fight.
   * @returns {Fight}
   * @throws {Error}
   * @example
   * const fight = new Fight(character1, character2, 3);
   * fight.start();
   */
  async start() {
    while (this.round < this.rounds && !this.isEnded()) {
      this.round++;
      await this.character1.attack(this.character2);
      if (this.isEnded()) return this;
      await this.character2.attack(this.character1);
    }

    return this;
  }

  /**
   * @method
   * @name Fight#isEnded
   * @description
   * Check if the fight is ended.
   * @returns {Boolean}
   * @example
   * const fight = new Fight(character1, character2, 3);
   * fight.start();
   * fight.isEnded();
   */
  isEnded() {
    // If a fighter has no stamina, the fight is ended
    if (this.character1.stamina <= 0 || this.character2.stamina <= 0) {
      this.loser =
        this.character1.stamina <= 0 ? this.character1 : this.character2;
      this.winner =
        this.character1.stamina <= 0 ? this.character2 : this.character1;
      return true;
    }

    return false;
  }
}

export default Fight;
