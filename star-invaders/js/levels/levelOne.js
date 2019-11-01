import * as patternConstants from "../../js/constants/patternConstants.js";
import * as alienTypeConstants from "../../js/constants/alienTypeConstants.js";

export const LEVEL_ONE = {
  dropInterval: 600,
  coinGenerationInterval: 100,
  noOfCoinsGenerated: 5,
  noOfAliensToShootToGenerateCoins: 12,
  boss: {
    pauseInterval: 200,
    pause: 100,
    moveDownPause: 200,
    moveDownFireRate: 6,
    moveDownUpto: 200,
    score: 1000
  },
  randomAliens: {
    interval: 300,
    minimumNumber: 1,
    maximumNumber: 4,
    minimumPattern: 1,
    maximumPattern: 2,
    aliens: [
      {
        size: alienTypeConstants.SMALL,
        type: alienTypeConstants.ONE
      },
      {
        size: alienTypeConstants.SMALL,
        type: alienTypeConstants.TWO
      }
    ],
    patterns: [patternConstants.TOP_LEFT_TO_BOTTOM_RIGHT, patternConstants.TOP_RIGHT_TO_BOTTOM_LEFT,
      patternConstants.TOP_LEFT_TO_BOTTOM_LEFT, patternConstants.TOP_RIGHT_TO_BOTTOM_RIGHT]
  },
  generateAlien: [{
    counter: 0,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 5
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      },
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 5
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
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
        pattern: patternConstants.TOP_RIGHT_TO_POSITION
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
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }
    ]
  }, {
    counter: 1600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.TWO,
          number: 4
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
      }, {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.TWO,
          number: 4
        }],
        pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 2100,
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
        pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 3000,
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
    counter: 3600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 5
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
      }
    ]
  }, {
    counter: 4400,
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
    counter: 5300,
    aliens: [
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
    counter: 5600,
    aliens: [
      {
        alienTypes: [{
          size: alienTypeConstants.SMALL,
          type: alienTypeConstants.ONE,
          number: 4
        }],
        pattern: patternConstants.TOP_RIGHT_TO_POSITION_TWO
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
        pattern: patternConstants.TOP_LEFT_TO_POSITION
      }
    ]
  },
    {
      counter: 7000,
      aliens: [
        {
          alienTypes: [{
            size: alienTypeConstants.MEDIUM,
            type: alienTypeConstants.ONE,
            number: 2
          }, {
            size: alienTypeConstants.SMALL,
            type: alienTypeConstants.TWO,
            number: 2
          }],
          pattern: patternConstants.TOP_RIGHT_TO_POSITION
        }
      ]
    },
    {
      counter: 7800,
      aliens: [
        {
          alienTypes: [{
            size: alienTypeConstants.MEDIUM,
            type: alienTypeConstants.TWO,
            number: 4
          }, {
            size: alienTypeConstants.SMALL,
            type: alienTypeConstants.TWO,
            number: 2
          }],
          pattern: patternConstants.TOP_LEFT_TO_POSITION_TWO
        }
      ]
    }
  ]
};
