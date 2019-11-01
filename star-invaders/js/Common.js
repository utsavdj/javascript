import {DEFAULT_SCREEN_HEIGHT} from "../js/constants/gameConstants.js";

class Common {
  constructor() {
    this.init();
  }

  init() {
  }

  createElement(tag, className = null, text = null) {
    let element = document.createElement(tag);
    if (className) {
      element.classList.add(className);
    }
    if (text) {
      element.innerText = text;
    }
    return element;
  }

  generateRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  playSound(src) {
    let sound = new Audio();
    sound.src = src;
    sound.play();
  }

  getTotalNumberOfAliens(settings) {
    let noOfAliens = 0;
    for (let i = 0; i < settings.length; i++) {
      for (let j = 0; j < settings[i].aliens.length; j++) {
        for (let k = 0; k < settings[i].aliens[j].alienTypes.length; k++) {
          noOfAliens += settings[i].aliens[j].alienTypes[k].number;
        }
      }
    }
    return noOfAliens;
  }

  getConstantYSpeed(defaultSpeed) {
    let currentScreenHeight = document.body.offsetHeight;
    let percentageChangeInScreenHeight = (currentScreenHeight / DEFAULT_SCREEN_HEIGHT) * 100;
    return (defaultSpeed * percentageChangeInScreenHeight) / 100;
  }

  getOffsetPositionY(gameHeight, percentage) {
    return ((gameHeight * percentage) / 100)
  }

  getOffsetPositionX(gameWidth, percentage) {
    return ((gameWidth * percentage) / 100)
  }

}

export default Common;
