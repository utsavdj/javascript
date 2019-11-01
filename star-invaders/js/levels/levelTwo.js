import * as patternConstants from "../../js/constants/patternConstants.js";
import * as alienTypeConstants from "../../js/constants/alienTypeConstants.js";

export const LEVEL_TWO = {
  dropInterval: 600,
  coinGenerationInterval: 100,
  noOfCoinsGenerated: 5,
  noOfAliensToShootToGenerateCoins: 15,
  boss: {
    pauseInterval: 300,
    pause: 100,
    moveDownPause: 200,
    moveDownFireRate: 6,
    moveDownUpto: 200,
    score: 2200
  },
  randomAliens: {
    interval: 275,
    minimumNumber: 1,
    maximumNumber: 4,
    minimumPattern: 1,
    maximumPattern: 2,
    aliens: [
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
      }
    ],
    patterns: [
      patternConstants.TOP_LEFT_TO_BOTTOM_RIGHT,
      patternConstants.BOTTOM_LEFT_TO_TOP_RIGHT,
      patternConstants.TOP_LEFT_TO_BOTTOM_LEFT,
      patternConstants.BOTTOM_LEFT_TO_TOP_LEFT,
    ]
  },
  generateAlien: [{
    counter: 0,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 2
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
      },
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 3
        }],
        pattern: patternConstants.BOTTOM_LEFT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 2
        }, {
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 3
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
      }, {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 2
        }, {
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
      }
    ]
  }, {
    counter: 1600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 3
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
      }, {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 3
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 2300,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 4
        }, {
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.TWO,
          number: 4
        }],
        pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 3100,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 4
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }
    ]
  }, {
    counter: 3900,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.MEDIUM,
          number: 5
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 4700,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 4
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
      }
    ]
  }, {
    counter: 5600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.TWO,
          number: 4
        }],
        pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION
      }
    ]
  }, {
    counter: 6300,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.TWO,
          number: 4
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
      },
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 4
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 7000,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.ONE,
          number: 2
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
      },
      {
        alienTypes: [{
          size: alienTypeConstants.MEDIUM,
          type: alienTypeConstants.TWO,
          number: 3
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }
    ]
  },
    {
      counter: 7800,
      aliens: [
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
          pattern: patternConstants.TOP_RIGHT_TO_POSITION
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
          pattern: patternConstants.BOTTOM_RIGHT_TO_POSITION_TWO
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
          pattern: patternConstants.BOTTOM_LEFT_TO_POSITION
        }
      ]
    },
    {
      counter: 8300,
      aliens: [
        {
          alienTypes: [{
            size: alienTypeConstants.MEDIUM,
            type: alienTypeConstants.TWO,
            number: 4
          }],
          pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
        }
      ]
    }
  ]
};
