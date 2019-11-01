import {MAX_ROWS, NO_OF_COLS_OFFSET, ALIEN_WIDTH, ALIENS_POSITION_X_OFFSET} from "../js/constants/gameConstants.js";
import MoveDownPatterns from "../js/patterns/MoveDownPatterns.js";
import Patterns from "../js/patterns/Patterns.js";
import AlienChildPatterns from "../js/patterns/AlienChildPatterns.js";

class Pattern {
  constructor() {
  }

  // bezier curve to generate x and y co-ordinates for pattern
  generateCoOrdinates(t, pattern) {
    let x = (Math.pow((1 - t), 3) * pattern.p1.x) + (3 * Math.pow((1 - t), 2) * t * pattern.p2.x) +
      (3 * (1 - t) * Math.pow(t, 2) * pattern.p3.x) + (Math.pow(t, 3) * pattern.p4.x);
    let y = (Math.pow((1 - t), 3) * pattern.p1.y) + (3 * Math.pow((1 - t), 2) * t * pattern.p2.y) +
      (3 * (1 - t) * Math.pow(t, 2) * pattern.p3.y) + (Math.pow(t, 3) * pattern.p4.y);

    return {x: x, y: y};
  }

  moveDownPatterns(playerRecentPositionX, positionX, positionY, gameWidth, gameHeight) {
    let moveDownPatterns = new MoveDownPatterns();
    return moveDownPatterns.getMoveDownPatterns(playerRecentPositionX, positionX, positionY, gameWidth, gameHeight);
  }

  getNumberOfCols(gameWidth) {
    return Math.round(gameWidth / (ALIEN_WIDTH + ALIENS_POSITION_X_OFFSET)) - NO_OF_COLS_OFFSET;
  }

  // function to generate alien position and their move down interval
  getAlienPositionAndInterval(gameWidth) {
    let numCols = this.getNumberOfCols(gameWidth);
    let numRows = MAX_ROWS;
    let xCounter = numCols / 2;
    let array = [];
    let col = 0;
    let interval = numCols;
    let row = 0;

    for (let j = 0; j < numRows; j++) {
      for (let i = 0; i < xCounter; i++) {
        col = xCounter + (i + 1);
        array.push({x: col, y: j, interval: interval});
        interval -= 1;
        col = xCounter - i;
        row += 1;
        array.push({x: col, y: j, interval: interval});
        row = 0;
        interval -= 1;
      }
    }

    return array;
  }

  getPatterns(gameWidth, gameHeight, alienHeight) {
    let patterns = new Patterns();
    return patterns.getPatterns(gameWidth, gameHeight, alienHeight);
  }

  getAlienChildPatterns(positionX, positionY, playerRecentPositionX, alienHeight, gameWidth, gameHeight) {
    let alienChildPatterns = new AlienChildPatterns();
    return alienChildPatterns.getAlienChildPatterns(positionX, positionY, playerRecentPositionX,
      alienHeight, gameWidth, gameHeight);
  }
}

export default Pattern;
