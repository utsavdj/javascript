import Common from "../../js/Common.js";

class Patterns {
  constructor() {
    this.init();
  }

  init() {
    this.common = new Common();
  }

  getPatterns(gameWidth, gameHeight, alienHeight) {
    let gameCenterPositionX = gameWidth / 2;
    return {
      topLeftToPosition: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 8), y: -alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 3)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 49)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 84)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 84)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 23)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 23)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 68)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 68)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }],
      bottomLeftToPosition: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 8), y: gameHeight + alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 97)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 51)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 16)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 16)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 77)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 77)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 32)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 32)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }],
      topRightToPosition: [{
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 8),
          y: -alienHeight
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 3)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 49)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 84)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 84)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 23)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 23)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }],
      bottomRightToPosition: [{
        p1: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 8), y: gameHeight + alienHeight},
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 97)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 51)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 16)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 16)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 96),
          y: this.common.getOffsetPositionY(gameHeight, 77)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 77)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 22),
          y: this.common.getOffsetPositionY(gameHeight, 32)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 32)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 9),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        }
      }],
      topLeftToPositionTwo: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10), y: -alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 15)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 19)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 39)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 39)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 69)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 69)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 39)
        }
      }],
      bottomLeftToPositionTwo: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10), y: gameWidth + alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 85)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 81)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 61)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 61)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 61)
        }
      }],
      topRightToPositionTwo: [{
        p1: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10), y: -alienHeight},
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 15)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 19)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 39)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 39)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 69)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 69)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 39)
        }
      }],
      bottomRightToPositionTwo: [{
        p1: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10), y: gameWidth + alienHeight},
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 85)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 81)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 61)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 61)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 41),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 10),
          y: this.common.getOffsetPositionY(gameHeight, 61)
        }
      }],
      topLeftToBottomRight: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 8), y: -alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 3)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 35)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 35)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 31),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p4: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 31), y: gameHeight + alienHeight}
      }],
      topRightToBottomLeft: [{
        p1: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 8), y: -alienHeight},
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 3)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 68)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 68)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 35)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 35)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 31),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p4: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 31), y: gameHeight + alienHeight}
      }],
      bottomLeftToTopRight: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 8), y: gameHeight + alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 15)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 15)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 67)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 67)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 31),
          y: this.common.getOffsetPositionY(gameHeight, 3)
        },
        p4: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 31), y: -alienHeight}
      }],
      bottomRightToTopLeft: [{
        p1: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 8), y: gameHeight + alienHeight},
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 3),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 70)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 15)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 15)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 2),
          y: this.common.getOffsetPositionY(gameHeight, 67)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 67)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 53)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35),
          y: this.common.getOffsetPositionY(gameHeight, 47)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 31),
          y: this.common.getOffsetPositionY(gameHeight, 3)
        },
        p4: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 31), y: -alienHeight}
      }],
      topLeftToBottomLeft: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35), y: -alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 13),
          y: this.common.getOffsetPositionY(gameHeight, 7)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 6),
          y: this.common.getOffsetPositionY(gameHeight, 50)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 19),
          y: this.common.getOffsetPositionY(gameHeight, 76)
        },
        p4: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35), y: gameHeight + alienHeight}
      }],
      topRightToBottomRight: [{
        p1: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35), y: -alienHeight},
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 13),
          y: this.common.getOffsetPositionY(gameHeight, 7)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 6),
          y: this.common.getOffsetPositionY(gameHeight, 50)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 19),
          y: this.common.getOffsetPositionY(gameHeight, 76)
        },
        p4: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35), y: gameHeight + alienHeight}
      }],
      bottomLeftToTopLeft: [{
        p1: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35), y: gameHeight + alienHeight},
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 13),
          y: this.common.getOffsetPositionY(gameHeight, 76)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 50)
        },
        p4: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 13),
          y: this.common.getOffsetPositionY(gameHeight, 7)
        },
        p4: {x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 35), y: -alienHeight}
      }],
      bottomRightToTopRight: [{
        p1: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35), y: gameHeight + alienHeight},
        p2: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 13),
          y: this.common.getOffsetPositionY(gameHeight, 76)
        },
        p3: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 50)
        },
        p4: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        }
      }, {
        p1: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 30)
        },
        p2: {
          x: gameCenterPositionX - this.common.getOffsetPositionX(gameWidth, 7),
          y: this.common.getOffsetPositionY(gameHeight, 31)
        },
        p3: {
          x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 13),
          y: this.common.getOffsetPositionY(gameHeight, 7)
        },
        p4: {x: gameCenterPositionX + this.common.getOffsetPositionX(gameWidth, 35), y: -alienHeight}
      }]
    };
  }
}

export default Patterns;
