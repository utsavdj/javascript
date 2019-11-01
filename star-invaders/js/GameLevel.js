import * as levelConstants from "../js/constants/levelConstants.js";
import {LEVEL_ONE} from "../js/levels/levelOne.js";
import {LEVEL_TWO} from "../js/levels/levelTwo.js";
import {LEVEL_THREE} from "../js/levels/levelThree.js";
import {LEVEL_FOUR} from "../js/levels/levelFour.js";
import {LEVEL_FIVE} from "../js/levels/levelFive.js";

class GameLevel {
  constructor(level) {
    this.level = level;
  }

  getLevel() {
    if (this.level === levelConstants.ONE) {
      return LEVEL_ONE;
    } else if (this.level === levelConstants.TWO) {
      return LEVEL_TWO;
    } else if (this.level === levelConstants.THREE) {
      return LEVEL_THREE;
    } else if (this.level === levelConstants.FOUR) {
      return LEVEL_FOUR;
    } else if (this.level === levelConstants.FIVE) {
      return LEVEL_FIVE;
    }

  }
}

export default GameLevel;
