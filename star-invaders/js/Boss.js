import Common from "../js/Common.js";
import * as levelConstants from "../js/constants/levelConstants.js";
import {BOSS} from "../js/data/boss.js";

class Boss {
  constructor(parentElement, level, levelSettings, generateRandomValue) {
    this.parentElement = parentElement;
    this.levelSettings = levelSettings;
    this.generateRandomValue = generateRandomValue;
    this.level = level;
    this.init();
  }

  init() {
    this.common = new Common();
    this.gameWidth = this.parentElement.offsetWidth;
    this.width = 137;
    this.height = 137;
    this.movementCounter = 0;
    this.moveOffset = 1;
    this.directionX = 1;
    this.properties = this.getProperties(this.level);
    this.positionX = (this.gameWidth - this.properties.width) / 2;
    this.positionY = -this.height;
    this.initialHealth = this.properties.health;
    this.health = this.initialHealth;
    this.initialShield = this.properties.shield;
    this.shield = this.initialShield;
    this.weapon = this.properties.weapon;
    this.isShieldOn = true;
    this.isExploded = false;
    this.explosionCounter = 0;
    this.explosionInterval = 25;
    this.isBulletFired = false;
    this.bulletDirectionY = -1;
    this.bulletFiredInterval = 120;
    this.bulletFiredCounter = 0;
    this.moveOffesetPositionX = 15;
    this.pauseInterval = this.levelSettings.pauseInterval;
    this.pauseIntervalCounter = 0;
    this.pause = this.levelSettings.pause;
    this.pauseCounter = 0;
    this.moveDownPause = this.levelSettings.moveDownPause;
    this.moveDownPauseCounter = 0;
    this.moveDownFireRate = this.levelSettings.moveDownFireRate;
    this.moveDownUpto = this.levelSettings.moveDownUpto;
    this.moveDownCounter = 0;
    this.moveUpCounter = 0;
    this.isInPosition = false;
    this.isMovingDown = false;
    this.points = 10;
  }

  createBoss() {
    this.bossElement = this.common.createElement('div', 'boss');
    this.bossElement.style.top = this.positionY + 'px';
    this.bossElement.style.left = this.positionX + 'px';
    this.bossElement.style.zIndex = '20';
    this.bossElement.style.position = 'absolute';
    this.bossElement.style.background = 'url(images/star-wars-sprite.png)';
    this.bossElement.style.backgroundPosition = this.properties.positionX + 'px '
      + this.properties.positionY + 'px';
    this.bossElement.style.width = this.properties.width + 'px';
    this.bossElement.style.height = this.properties.height + 'px';
    this.parentElement.appendChild(this.bossElement);

    this.createLevelTwoBossCollisionBoxes();
  }

  createLevelTwoBossCollisionBoxes() {
    const NO_OF_BOXES = 2;
    let className = null;
    if (this.level === levelConstants.ONE) {
      className = 'one'
    } else if (this.level === levelConstants.TWO) {
      className = 'two'
    } else if (this.level === levelConstants.THREE) {
      className = 'three'
    } else if (this.level === levelConstants.FOUR) {
      className = 'four'
    } else if (this.level === levelConstants.FIVE) {
      className = 'five'
    }
    for (let i = 1; i <= NO_OF_BOXES; i++) {
      let bossBoxElement = this.common.createElement('div', 'level-' + className + '-boss-box-' + i);
      this.bossElement.appendChild(bossBoxElement);
    }
  }

  moveToPosition() {
    let directionY = 1;
    let positionY = 20;
    if (this.positionY >= positionY) {
      this.isInPosition = true;
    }
    this.movePositionY(directionY);
  }

  move() {
    if (!this.isInPosition) {
      this.moveToPosition();
    } else {
      if (this.pauseIntervalCounter >= this.pauseInterval &&
        (this.gameWidth > this.positionX + this.width + this.moveOffesetPositionX &&
          this.moveOffesetPositionX < this.positionX)) {
        this.isMovingDown = true;
        if (this.pauseCounter >= this.pause) {
          let directionY = 1;
          if (this.moveDownCounter <= this.moveDownUpto) {
            this.movePositionY(directionY);
          } else {
            this.toggleShield(this.properties.withoutShield);
            this.isShieldOn = false;
            if (this.moveDownPauseCounter >= this.moveDownPause) {
              if (this.shield !== 0) {
                this.toggleShield(this.properties);
                this.isShieldOn = true;
              }
              if (this.moveUpCounter <= this.moveDownUpto) {
                directionY = -1;
                this.movePositionY(directionY);
              } else {
                this.pauseIntervalCounter = 0;
                this.pauseCounter = 0;
                this.moveDownCounter = 0;
                this.moveDownPauseCounter = 0;
                this.moveUpCounter = 0;
                this.isMovingDown = false;
              }
              this.moveUpCounter++;
            }
            this.moveDownPauseCounter++;
          }
          this.moveDownCounter++
        }
        this.pauseCounter++;
      } else {
        this.movePositionX();
        this.pauseIntervalCounter++;
      }
    }
  }

  toggleShield(properties) {
    this.width = properties.width;
    this.height = properties.height;
    this.bossElement.style.backgroundPosition = properties.positionX + 'px ' +
      properties.positionY + 'px';
    this.bossElement.style.width = properties.width + 'px';
    this.bossElement.style.height = properties.height + 'px';
  }

  movePositionY(directionY) {
    this.positionY += this.moveOffset * directionY;
    this.update();
  }

  movePositionX() {
    this.checkDirection();
    this.positionX += this.moveOffset * this.directionX;
    this.update();
  }

  checkDirection() {
    let endScreenOffsetPositionX = this.width;
    if (this.positionX <= -(this.width + endScreenOffsetPositionX)) {
      this.goToRandomPosition();
    }
    if (this.gameWidth + endScreenOffsetPositionX <= this.positionX) {
      this.goToRandomPosition();
    }
  }

  goToRandomPosition() {
    let directionX = 1;
    let endScreenOffsetPositionX = this.width;
    if (this.generateRandomValue(0, 2)) {
      if (this.directionX === directionX) {
        this.positionX = -endScreenOffsetPositionX;
      } else {
        this.positionX = this.gameWidth;
      }
    } else {
      if (this.directionX === directionX) {
        this.directionX = -directionX;
      } else {
        this.directionX = directionX;
      }
    }
  }

  update() {
    this.bossElement.style.left = this.positionX + 'px';
    this.bossElement.style.top = this.positionY + 'px';
  }


  checkCollision(player) {
    return this.positionX < player.positionX + player.width &&
      this.positionX + this.width > player.positionX &&
      this.positionY < player.positionY + player.height &&
      this.positionY + this.height > player.positionY
  }

  explode() {
    let backgroundPositionX = -49;
    let backgroundPositionY = -330;
    this.width = this.properties.withoutShield.width;
    this.height = this.properties.withoutShield.height;
    this.bossElement.style.backgroundPosition = backgroundPositionX + 'px ' + backgroundPositionY + 'px';
    this.bossElement.style.width = this.width + 'px';
    this.bossElement.style.height = this.height + 'px';

  }

  updateHealth(healthElement, healthElementHeight) {
    let oneHealthTopOffset = healthElementHeight / this.initialHealth;
    let currentHealthTopOffset = healthElementHeight - this.health * oneHealthTopOffset;
    healthElement.style.top = currentHealthTopOffset + 'px';
  }

  updateShield(shieldElement, shieldElementHeight) {
    let oneShieldTopOffset = shieldElementHeight / this.initialShield;
    let currentShieldTopOffset = shieldElementHeight - this.shield * oneShieldTopOffset;
    shieldElement.style.top = currentShieldTopOffset + 'px';
    if (!this.shield) {
      this.toggleShield(this.properties.withoutShield);
      this.isShieldOn = false;
    }
  }

  checkIsPlayerClose(playerPositionX) {
    if (this.positionX < playerPositionX && this.positionX + this.width > playerPositionX) {
      return true;
    }
  }

  getProperties(level) {
    for (let i = 0; i < BOSS.length; i++) {
      if (BOSS[i].level === level) {
        return BOSS[i];
      }
    }
  }
}

export default Boss;
