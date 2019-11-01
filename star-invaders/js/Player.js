import {NORMAL} from "../js/constants/weaponConstants.js";
import {
  PLAYER_INITIAL_POSITION_Y_OFFSET, DEFAULT_SCREEN_WIDTH,
  DEFAULT_PLAYER_SPEED
} from "../js/constants/gameConstants.js";
import Common from "../js/Common.js";

class Player {
  constructor(parentElement, totalHealth) {
    this.parentElement = parentElement;
    this.initialHealth = totalHealth;
    this.init();
  }

  init() {
    this.common = new Common();
    this.width = 49;
    this.height = 73;
    this.positionX = (this.parentElement.offsetWidth - this.width) / 2;
    this.positionY = this.parentElement.offsetHeight - this.height - PLAYER_INITIAL_POSITION_Y_OFFSET;
    this.isExploded = false;
    this.isBulletFired = false;
    this.bulletFiredInterval = 20;
    this.bulletFiredCounter = 0;
    this.bulletDirectionY = 1;
    this.weapon = NORMAL;
    this.maxShield = 3;
    this.shield = 0;
    this.health = this.initialHealth;
    this.isShieldOn = false;
    this.speed = this.getPlayerSpeed();
    this.coin = 0;
    this.createPlayer();
  }

  // get player speed according to screen width to maintain consistent speed
  getPlayerSpeed() {
    let currentScreenWidth = document.body.offsetWidth;
    let percentageChangeInScreenWidth = (currentScreenWidth / DEFAULT_SCREEN_WIDTH) * 100;
    return (DEFAULT_PLAYER_SPEED * percentageChangeInScreenWidth) / 100;
  }

  createPlayer() {
    const BACKGROUND_POSITION_X = 0;
    const BACKGROUND_POSITION_Y = 0;
    this.playerElement = this.common.createElement('div', 'player');
    this.playerElement.style.width = this.width + 'px';
    this.playerElement.style.height = this.height + 'px';
    this.playerElement.style.background = 'url(images/star-wars-sprite.png)';
    this.playerElement.style.backgroundPosition = BACKGROUND_POSITION_X + 'px ' + BACKGROUND_POSITION_Y + 'px';
    this.playerElement.style.position = 'absolute';
    this.playerElement.style.top = this.positionY + 'px';
    this.playerElement.style.left = this.positionX + 'px';
    this.playerElement.style.zIndex = '10';
    this.parentElement.appendChild(this.playerElement);
    this.createPlayerCollisionBoxes();
  }

  createPlayerCollisionBoxes() {
    const NO_OF_BOXES = 2;
    for (let i = 1; i <= NO_OF_BOXES; i++) {
      let playerBoxElement = this.common.createElement('div', 'player-box-' + i);
      this.playerElement.appendChild(playerBoxElement);
    }
  }

  move(directionX, directionY) {
    if (directionX >= 1 && directionX) {
      this.playerElement.style.transform = 'rotate(15deg)';
    } else if (directionX <= 1 && directionX) {
      this.playerElement.style.transform = 'rotate(-15deg)';
    }
    this.positionX += directionX;
    this.positionY += directionY;

    this.draw();
  }

  draw() {
    this.playerElement.style.top = this.positionY + 'px';
    this.playerElement.style.left = this.positionX + 'px';
  }

  explode() {
    let positionX = 0;
    let positionY = -73;
    this.playerElement.style.backgroundPosition = positionX + 'px ' + positionY + 'px';
  }

  updateHealth(healthElement, healthElementHeight) {
    let oneHealthTopOffset = healthElementHeight / this.initialHealth;
    let currentHealthTopOffset = healthElementHeight - this.health * oneHealthTopOffset;
    healthElement.style.top = currentHealthTopOffset + 'px';
  }

  updateShield(shieldElement, shieldElementHeight) {
    let oneShieldTopOffset = shieldElementHeight / this.maxShield;
    let currentShieldTopOffset = shieldElementHeight - this.shield * oneShieldTopOffset;
    shieldElement.style.top = currentShieldTopOffset + 'px';
  }

  fillShield(gameContainer) {
    let shieldElement = gameContainer.getElementsByClassName('player-shield')[0];
    shieldElement.style.top = '0px';
  }

  fillHealth(gameContainer) {
    let healthContainerElement = gameContainer.getElementsByClassName('player-health-container')[0];
    let healthContainerElementHeight = healthContainerElement.clientHeight;
    let oneHealthPositionY = healthContainerElementHeight / this.initialHealth;
    let healthElement = gameContainer.getElementsByClassName('player-health')[0];
    let healthElementPositionY = healthElement.offsetTop;
    let currentHealthPositionY = healthElementPositionY - oneHealthPositionY;
    healthElement.style.top = currentHealthPositionY + 'px';
  }

}

export default Player;
