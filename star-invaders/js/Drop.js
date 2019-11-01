import Common from "../js/Common.js";
import {DEFAULT_ITEM_SPEED} from "../js/constants/gameConstants.js";
import {DROPS} from "../js/data/drops.js";

class Drop {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.init();
  }

  init() {
    this.dropSpeed = this.getDropSpeed();
    this.width = 44;
    this.height = 26;
  }

  getDropSpeed() {
    let common = new Common();
    return common.getConstantYSpeed(DEFAULT_ITEM_SPEED)
  }

  createDrop(positionX, generateRandomValue) {
    this.positionX = positionX;
    this.positionY = -this.height;
    let dropType = generateRandomValue(0, DROPS.length);
    this.properties = DROPS[dropType];

    this.element = document.createElement('div');
    this.element.style.width = this.width + 'px';
    this.element.style.height = this.height + 'px';
    this.element.style.position = 'absolute';
    this.element.classList.add('drop');
    this.element.style.background = 'url(images/star-wars-sprite.png)';
    this.element.style.backgroundPosition = this.properties.positionX + 'px ' + this.properties.positionY + 'px';
    this.element.style.top = this.positionY + 'px';
    this.element.style.left = this.positionX + 'px';
    this.parentElement.appendChild(this.element);
  }

  move() {
    this.positionY += this.dropSpeed;
    this.update();
  }

  update() {
    this.element.style.top = this.positionY + 'px';
  }

  isOutOfGame() {
    let parentElementHeight = this.parentElement.offsetHeight;
    if ((this.positionY + this.height) < 0 || parentElementHeight + this.height < this.positionY) {
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

export default Drop;
