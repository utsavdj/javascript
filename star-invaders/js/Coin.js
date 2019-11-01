import Common from "../js/Common.js";
import {DEFAULT_ITEM_SPEED} from "../js/constants/gameConstants.js";

class Coin {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.init();
  }

  init() {
    this.coinSpeed = this.getCoinSpeed();
    this.width = 15;
    this.height = 15;
    this.score = 10;
  }

  getCoinSpeed() {
    let common = new Common();
    return common.getConstantYSpeed(DEFAULT_ITEM_SPEED)
  }

  create(positionX, positionY) {
    this.positionY = positionY;
    this.positionX = positionX;
    this.element = document.createElement('div');
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.position = 'absolute';
    this.element.classList.add('coin');
    this.element.style.background = 'url(images/star-wars-sprite.png)';
    this.element.style.backgroundPosition = '0px -146px';
    this.element.style.top = this.positionY + 'px';
    this.element.style.left = this.positionX + 'px';
    this.parentElement.appendChild(this.element);
  }

  move() {
    this.positionY += this.coinSpeed;
    this.update();
  }

  update() {
    this.element.style.top = this.positionY + 'px';
  }

  isOutOfGame() {
    let parentElementHeight = this.parentElement.offsetHeight;
    if (parentElementHeight + this.height < this.positionY) {
      this.element.remove();
      return true;
    }
    return false;
  }

  checkCollision(player) {
    return this.positionX < player.positionX + player.width &&
      this.positionX + this.width > player.positionX &&
      this.positionY < player.positionY + player.height &&
      this.positionY + this.height > player.positionY
  }
}

export default Coin;
