import Common from "../../js/Common.js";

class MoveDownPatterns {
  constructor() {
    this.init();
  }

  init() {
    this.common = new Common();
  }

  getMoveDownPatterns(playerRecentPositionX, positionX, positionY, gameWidth, gameHeight) {
    return [{
      p1: {x: positionX, y: positionY},
      p2: {x: positionX, y: positionY - this.common.getOffsetPositionY(gameHeight, 6)},
      p3: {
        x: positionX + this.common.getOffsetPositionX(gameWidth, 9),
        y: positionY - this.common.getOffsetPositionY(gameHeight, 6)
      },
      p4: {x: positionX + this.common.getOffsetPositionX(gameWidth, 9), y: positionY}
    }, {
      p1: {x: positionX + this.common.getOffsetPositionX(gameWidth, 9), y: positionY},
      p2: {x: positionX, y: positionY + this.common.getOffsetPositionY(gameHeight, 12)},
      p3: {x: playerRecentPositionX, y: positionY - this.common.getOffsetPositionY(gameHeight, 6)},
      p4: {x: playerRecentPositionX, y: positionY + this.common.getOffsetPositionY(gameHeight, 30)}
    }]
  }
}

export default MoveDownPatterns;
