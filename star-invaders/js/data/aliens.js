import * as weaponConstants from "../../js/constants/weaponConstants.js";
import {CHILD_LEFT_TO_DOWN, CHILD_RIGHT_TO_DOWN} from "../../js/constants/patternConstants.js";

export const ALIENS = [{
  small: [{
    one: {
      positionX: -50,
      positionY: 0,
      score: 10,
      health: 1,
      weapon: weaponConstants.NORMAL
    },
    two: {
      positionX: -104,
      positionY: 0,
      score: 10,
      health: 2,
      weapon: weaponConstants.NORMAL
    }
  }]
}, {
  medium: [{
    one: {
      positionX: -77,
      positionY: 0,
      score: 20,
      health: 2,
      weapon: weaponConstants.NORMAL,
      special: weaponConstants.REGENERATE,
      children: [
        {
          positionX: -77,
          positionY: -44,
          score: 25,
          health: 1,
          weapon: weaponConstants.SHIELD_BREAKER,
          width: 18,
          height: 30,
          pattern: CHILD_LEFT_TO_DOWN
        },
        {
          positionX: -77,
          positionY: -44,
          score: 25,
          health: 1,
          weapon: weaponConstants.SHIELD_BREAKER,
          width: 18,
          height: 30,
          pattern: CHILD_RIGHT_TO_DOWN
        }
      ]
    },
    two: {
      positionX: -158,
      positionY: 0,
      score: 20,
      health: 1,
      weapon: weaponConstants.NORMAL,
      special: weaponConstants.REGENERATE,
      children: [
        {
          positionX: -95,
          positionY: -44,
          score: 25,
          health: 2,
          weapon: weaponConstants.NORMAL,
          width: 18,
          height: 30,
          pattern: CHILD_LEFT_TO_DOWN
        },
        {
          positionX: -95,
          positionY: -44,
          score: 25,
          health: 2,
          weapon: weaponConstants.NORMAL,
          width: 18,
          height: 30,
          pattern: CHILD_RIGHT_TO_DOWN
        }
      ]
    }
  }]
}, {
  large: [{
    one: {
      positionX: -131,
      positionY: 0,
      score: 30,
      health: 3,
      weapon: weaponConstants.SPREAD
    },
    two: {
      positionX: -185,
      positionY: 0,
      score: 30,
      health: 3,
      weapon: weaponConstants.SHIELD_BREAKER
    }
  }]
}];
