import * as weaponConstants from "../../js/constants/weaponConstants.js";

export const BULLETS = [
  {
    weapon: weaponConstants.NORMAL,
    positionX: -214,
    positionY: 0,
    alienBullet: {
      positionX: -214,
      positionY: -20,
    },
    width: 5,
    height: 15
  },
  {
    weapon: weaponConstants.SPREAD,
    positionX: -220,
    positionY: 0,
    alienBullet: {
      positionX: -220,
      positionY: -17,
    },
    width: 11,
    height: 17,
    intervalX: 15,
    intervalY: 15
  },
  {
    weapon: weaponConstants.SHIELD_BREAKER,
    positionX: -232,
    positionY: 0,
    alienBullet: {
      positionX: -232,
      positionY: -7,
    },
    width: 7,
    height: 7,
    intervalY: 13
  }
];
