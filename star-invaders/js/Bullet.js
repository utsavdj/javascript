import Common from "../js/Common.js";
import {DEFAULT_BULLET_SPEED} from "../js/constants/gameConstants.js";
import * as weaponConstants from "../js/constants/weaponConstants.js";
import * as levelConstants from "../js/constants/levelConstants.js";
import * as shooterTypeConstants from "../js/constants/shooterTypeConstants.js";
import {BULLETS} from "../js/data/bullets.js";

class Bullet {
  constructor(parentElement, shooterElement, bulletDirection) {
    this.parentElement = parentElement;
    this.shooterElement = shooterElement;
    this.bulletDirection = bulletDirection;
    this.init();
  }

  init() {
    this.parentElementHeight = this.parentElement.clientHeight;
    this.bulletSpeed = this.getBulletSpeed();
    this.width = 5;
    this.height = 20;
    this.shooterWidth = this.shooterElement.width;
    this.shooterHeight = this.shooterElement.height;
    this.shooterPositionX = this.shooterElement.positionX;
    this.positionX = this.getPositionX();
    this.shooterPositionY = this.shooterElement.positionY;
    this.positionY = this.shooterPositionY + this.shooterHeight - this.height;
    this.shooterType = null;
  }

  getBulletSpeed() {
    let common = new Common();
    return common.getConstantYSpeed(DEFAULT_BULLET_SPEED)
  }

  getPositionX() {
    return this.shooterPositionX + ((this.shooterWidth - this.width) / 2);
  }

  createBullet(shooterType, bulletType = null, bulletIndex = null) {
    this.shooterType = shooterType;
    let bulletTypeIndex = this.findIndexOfArrayObject(BULLETS, 'weapon', bulletType);
    if (bulletType) {
      this.properties = BULLETS[bulletTypeIndex];
    } else {
      this.properties = BULLETS[0];
    }
    this.positionX = this.getPositionX();
    this.bulletIndex = bulletIndex;
    if (bulletType === weaponConstants.SHIELD_BREAKER) {
      if (shooterType === shooterTypeConstants.ALIEN) {
        this.positionY = (this.bulletIndex * this.properties.intervalY) + this.shooterHeight + this.properties.height +
          this.shooterPositionY - this.properties.intervalY;
      } else {
        this.positionY = (this.bulletIndex * this.properties.intervalY) + this.properties.height +
          this.shooterPositionY + this.properties.intervalY;
      }
    }
    this.createBulletElement(shooterType);
  }

  createBulletElement(shooterType) {
    this.bulletElement = document.createElement('div');
    this.bulletElement.style.position = 'absolute';
    this.bulletElement.style.background = 'url(images/star-wars-sprite.png)';
    if (shooterType === 'player') {
      this.bulletElement.classList.add('player-bullet');
      this.bulletElement.style.backgroundPosition = this.properties.positionX + 'px ' +
        this.properties.positionY + 'px';
      this.bulletElement.style.top = this.positionY + 'px';
    } else {
      this.bulletElement.classList.add('alien-bullet');
      this.bulletElement.style.backgroundPosition = this.properties.alienBullet.positionX + 'px ' +
        this.properties.alienBullet.positionY + 'px';
      // this.positionY = this.positionY;
      this.bulletElement.style.top = this.positionY + 'px';
    }
    this.bulletElement.style.width = this.properties.width + 'px';
    this.bulletElement.style.height = this.properties.height + 'px';
    this.bulletElement.style.left = this.positionX + 'px';
    this.parentElement.appendChild(this.bulletElement);
  }

  move() {
    if (this.bulletDirection >= 1) {
      this.positionY -= this.bulletSpeed;
    } else {
      this.positionY += this.bulletSpeed;
    }

    if (this.properties.weapon === weaponConstants.SPREAD) {
      if (this.bulletIndex === 0) {
        this.positionX -= 1
      } else if (this.bulletIndex === 2) {
        this.positionX += 1
      }
    }

    this.draw();
  }

  draw() {
    this.bulletElement.style.top = this.positionY + 'px';
    this.bulletElement.style.left = this.positionX + 'px';
  }

  isBulletOutOfGame() {
    if ((this.positionY + this.height) < 0 || this.parentElementHeight + this.height < this.positionY) {
      this.bulletElement.remove();
      return true;
    }
    return false;
  }

  checkCollision(receiver, isBossRound = false, level = null) {
    if (this.shooterType === shooterTypeConstants.ALIEN) {
      return this.checkTwoBoxesCollision(receiver);
    } else {
      if (isBossRound && level) {
        return this.checkTwoBoxesCollision(receiver, isBossRound, level);
      } else {
        return this.positionX < receiver.positionX + receiver.width &&
          this.positionX + this.width > receiver.positionX &&
          this.positionY < receiver.positionY + receiver.height &&
          this.positionY + this.height > receiver.positionY
      }
    }
  }

  checkTwoBoxesCollision(receiver, isBossRound = false, level = null) {
    let boxOneElement = null;
    let boxTwoElement = null;
    if (isBossRound) {
      if (level === levelConstants.ONE) {
        boxOneElement = this.parentElement.getElementsByClassName('level-one-boss-box-1')[0];
        boxTwoElement = this.parentElement.getElementsByClassName('level-one-boss-box-2')[0];
      } else if (level === levelConstants.TWO) {
        boxOneElement = this.parentElement.getElementsByClassName('level-two-boss-box-1')[0];
        boxTwoElement = this.parentElement.getElementsByClassName('level-two-boss-box-2')[0];
      } else if (level === levelConstants.THREE) {
        boxOneElement = this.parentElement.getElementsByClassName('level-three-boss-box-1')[0];
        boxTwoElement = this.parentElement.getElementsByClassName('level-three-boss-box-2')[0];
      } else if (level === levelConstants.FOUR) {
        boxOneElement = this.parentElement.getElementsByClassName('level-four-boss-box-1')[0];
        boxTwoElement = this.parentElement.getElementsByClassName('level-four-boss-box-2')[0];
      } else if (level === levelConstants.FIVE) {
        boxOneElement = this.parentElement.getElementsByClassName('level-five-boss-box-1')[0];
        boxTwoElement = this.parentElement.getElementsByClassName('level-five-boss-box-2')[0];
      }
    } else {
      boxOneElement = this.parentElement.getElementsByClassName('player-box-1')[0];
      boxTwoElement = this.parentElement.getElementsByClassName('player-box-2')[0];
    }
    return ((this.positionX < (receiver.positionX + boxOneElement.offsetLeft) + boxOneElement.offsetWidth &&
      this.positionX + this.width > (receiver.positionX + boxOneElement.offsetLeft) &&
      this.positionY < (receiver.positionY + boxOneElement.offsetTop) + boxOneElement.offsetHeight &&
      this.positionY + this.height > (receiver.positionY + boxOneElement.offsetTop)) ||
      (this.positionX < (receiver.positionX + boxTwoElement.offsetLeft) + boxTwoElement.offsetWidth &&
        this.positionX + this.width > (receiver.positionX + boxTwoElement.offsetLeft) &&
        this.positionY < (receiver.positionY + boxTwoElement.offsetTop) + boxTwoElement.offsetHeight &&
        this.positionY + this.height > (receiver.positionY + boxTwoElement.offsetTop)))
  }

  findIndexOfArrayObject(array, key, value) {
    let i = 0;
    let length = array.length;
    for (i; i < length; i++) {
      if (array[i][key] === value) {
        return i;
      }
    }
  }
}

export default Bullet;
