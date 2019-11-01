import * as patternConstants from "../../js/constants/patternConstants.js";
import * as alienTypeConstants from "../../js/constants/alienTypeConstants.js";

export const LEVEL_FOUR = {
  dropInterval: 500,
  coinGenerationInterval: 100,
  noOfCoinsGenerated: 5,
  noOfAliensToShootToGenerateCoins: 15,
  boss: {
    pauseInterval: 275,
    pause: 100,
    moveDownPause: 200,
    moveDownFireRate: 6,
    moveDownUpto: 200,
    score: 2200
  },
  randomAliens: {
    interval: 175,
    minimumNumber: 1,
    maximumNumber: 4,
    minimumPattern: 1,
    maximumPattern: 2,
    aliens: [
      {
        size: alienTypeConstants.MEDIUM,
        type: alienTypeConstants.TWO
      },
      {
        size: alienTypeConstants.MEDIUM,
        type: alienTypeConstants.ONE
      },
      {
        size: alienTypeConstants.SMALL,
        type: alienTypeConstants.TWO
      },
      {
        size: alienTypeConstants.SMALL,
        type: alienTypeConstants.ONE
      },
      {
        size: alienTypeConstants.LARGE,
        type: alienTypeConstants.ONE
      }
    ],
    patterns: [
      patternConstants.TOP_LEFT_TO_BOTTOM_RIGHT,
      patternConstants.TOP_RIGHT_TO_BOTTOM_LEFT,
      patternConstants.BOTTOM_LEFT_TO_TOP_RIGHT,
      patternConstants.BOTTOM_RIGHT_TO_TOP_LEFT,
      patternConstants.TOP_LEFT_TO_BOTTOM_LEFT,
      patternConstants.TOP_RIGHT_TO_BOTTOM_RIGHT,
      patternConstants.BOTTOM_LEFT_TO_TOP_LEFT,
      patternConstants.BOTTOM_RIGHT_TO_TOP_RIGHT,
    ]
  },
  generateAlien: [{
    counter: 0,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.ONE,
          number: 3
        }, {
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.BOTTOM_LEFT_TO_POSITION_TWO
      },
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 3
        }, {
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.ONE,
          number: 3
        }],
        pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 1800,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.TWO,
          number: 2
        }, {
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.ONE,
          number: 2
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }, {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.TWO,
          number: 2
        }, {
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.ONE,
          number: 2
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
      }
    ]
  }, {
    counter: 3000,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }, {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 3800,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 3
        }, {
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.TWO,
          number: 2
        }],
        pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 4800,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 5600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.TWO,
          number: 5
        }],
        pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION_TWO
      },
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 3
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
      }
    ]
  }, {
    counter: 6500,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
      },
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }
    ]
  }, {
    counter: 7600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.ONE,
          number: 4
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
      }
    ]
  }, {
    counter: 8600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.TWO,
          number: 2
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
      },
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.TWO,
          number: 2
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }
    ]
  }, {
    counter: 10000,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.TWO,
          number: 2
        }, {
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 2
        }],
        pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION_TWO
      },
      {
        alienTypes: [{
          size: alienTypeConstants.LARGE,
          type: alienTypeConstants.TWO,
          number: 2
        }, {
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 2
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }
    ]
  },
    {
      counter: 11000,
      aliens: [
        {
          alienTypes: [{
            size: alienTypeConstants.MEDIUM,
            type: alienTypeConstants.TWO,
            number: 2
          }, {
            size: alienTypeConstants.LARGE,
            type: alienTypeConstants.ONE,
            number: 2
          }],
          pattern: patternConstants.TOP_RIGHT_TO_POSITION
        },
        {
          alienTypes: [{
            size: alienTypeConstants.MEDIUM,
            type: alienTypeConstants.TWO,
            number: 2
          }, {
            size: alienTypeConstants.LARGE,
            type: alienTypeConstants.ONE,
            number: 2
          }],
          pattern: patternConstants.TOP_LEFT_TO_POSITION
        },
        {
          alienTypes: [{
            size: alienTypeConstants.SMALL,
            type: alienTypeConstants.ONE,
            number: 2
          }, {
            size: alienTypeConstants.SMALL,
            type: alienTypeConstants.TWO,
            number: 2
          }],
          pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION
        },
        {
          alienTypes: [{
            size: alienTypeConstants.SMALL,
            type: alienTypeConstants.ONE,
            number: 2
          }, {
            size: alienTypeConstants.SMALL,
            type: alienTypeConstants.TWO,
            number: 2
          }],
          pattern: patternConstants.BOTTOM_LEFT_TO_POSITION_TWO
        }
      ]
    }
  ]
};
