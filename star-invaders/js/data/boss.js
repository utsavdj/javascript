import * as weaponConstants from "../../js/constants/weaponConstants.js";
import * as levelConstants from "../../js/constants/levelConstants.js";

export const BOSS = [
  {
    level: levelConstants.ONE,
    health: 100,
    shield: 200,
    weapon: weaponConstants.NORMAL,
    width: 137,
    height: 137,
    positionY: -74,
    positionX: -170,
    withoutShield: {
      width: 120,
      height: 120,
      positionY: -88,
      positionX: -49,
    }
  },
  {
    level: levelConstants.TWO,
    health: 100,
    shield: 200,
    weapon: weaponConstants.SHIELD_BREAKER,
    width: 137,
    height: 137,
    positionY: -226,
    positionX: -170,
    withoutShield: {
      width: 120,
      height: 120,
      positionY: -210,
      positionX: -44,
    }
  },
  {
    level: levelConstants.THREE,
    health: 220,
    shield: 220,
    weapon: weaponConstants.SHIELD_BREAKER,
    width: 137,
    height: 137,
    positionY: -4,
    positionX: -431,
    withoutShield: {
      width: 120,
      height: 120,
      positionY: 0,
      positionX: -308,
    }
  },
  {
    level: levelConstants.FOUR,
    health: 250,
    shield: 250,
    weapon: weaponConstants.SPREAD,
    width: 137,
    height: 137,
    positionY: -291,
    positionX: -434,
    withoutShield: {
      width: 120,
      height: 120,
      positionY: -241,
      positionX: -308,
    }
  }, {
    level: levelConstants.FIVE,
    health: 250,
    shield: 250,
    weapon: weaponConstants.SPREAD,
    width: 137,
    height: 137,
    positionY: -147,
    positionX: -431,
    withoutShield: {
      width: 120,
      height: 120,
      positionY: -120,
      positionX: -308,
    }
  }
];
