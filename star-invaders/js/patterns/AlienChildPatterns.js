import Common from "../../js/Common.js";

class AlienChildPatterns {
  constructor() {
    this.init();
  }

  init() {
    this.common = new Common();
  }

  getAlienChildPatterns(positionX, positionY, playerRecentPositionX, alienHeight, gameWidth, gameHeight) {
    return {
      childLeftToDown: [{
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
        p4: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 9),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 9),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 9),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 46)
        },
        p3: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 46)
        },
        p4: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY - this.common.getOffsetPositionY(gameHeight, 35)
        },
        p3: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 24),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 56)
        },
        p4: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 33),
          y: -alienHeight
        }
      }],
      childRightToDown: [{
        p1: {x: positionX, y: positionY},
        p2: {x: positionX, y: positionY - this.common.getOffsetPositionY(gameHeight, 6)},
        p3: {
          x: positionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: positionY - this.common.getOffsetPositionY(gameHeight, 6)
        },
        p4: {x: positionX - this.common.getOffsetPositionX(gameWidth, 9), y: positionY}
      }, {
        p1: {x: positionX - this.common.getOffsetPositionX(gameWidth, 9), y: positionY},
        p2: {x: positionX, y: positionY + this.common.getOffsetPositionY(gameHeight, 12)},
        p3: {x: playerRecentPositionX, y: positionY - this.common.getOffsetPositionY(gameHeight, 6)},
        p4: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 46)
        },
        p3: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 46)
        },
        p4: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: playerRecentPositionX + this.common.getOffsetPositionX(gameWidth, 28),
          y: positionY - this.common.getOffsetPositionY(gameHeight, 35)
        },
        p3: {
          x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 24),
          y: positionY + this.common.getOffsetPositionY(gameHeight, 56)
        },
        p4: {x: playerRecentPositionX - this.common.getOffsetPositionX(gameWidth, 33), y: -alienHeight}
      }]
    }
  }
}

export default AlienChildPatterns;
