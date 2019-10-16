class Background {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.width = 600;
    this.height = 225;
    this.positionY = 305;
    this.groundWidth = 600;
    this.groundHeight = 125;
    this.groundPositionY = 530;
    this.createBackground();
    this.createGround();
    this.backgroundCounter = 0;
    this.groundCounter = 0;
    this.groundIncrement = 2;
  }

  createBackground() {
    this.backgroundElement = document.createElement('div');
    this.backgroundElement.classList.add('background');
    this.backgroundElement.style.backgroundImage = 'url(images/background.png)';
    this.backgroundElement.style.position = 'absolute';
    this.backgroundElement.style.width = this.width + 'px';
    this.backgroundElement.style.height = this.height + 'px';
    this.backgroundElement.style.top = this.positionY + 'px';
    this.backgroundElement.style.backgroundSize = 'cover';
    this.backgroundElement.style.backgroundRepeat = 'repeat-x';
    this.parentElement.appendChild(this.backgroundElement);
    this.backgroundElement = this.parentElement.getElementsByClassName('background')[0];
  }

  createGround() {
    this.groundElement = document.createElement('div');
    this.groundElement.classList.add('ground');
    this.groundElement.style.backgroundImage = 'url(images/ground.png)';
    this.groundElement.style.position = 'absolute';
    this.groundElement.style.width = this.groundWidth + 'px';
    this.groundElement.style.height = this.groundHeight + 'px';
    this.groundElement.style.top = this.groundPositionY + 'px';
    this.groundElement.style.backgroundSize = 'cover';
    this.groundElement.style.backgroundRepeat = 'repeat-x';
    this.parentElement.appendChild(this.groundElement);
    this.groundElement = this.parentElement.getElementsByClassName('ground')[0];
  }

  moveBackground() {
    this.groundElement.style.backgroundPosition = (this.groundCounter -= this.groundIncrement) + 'px 0px';
    this.backgroundElement.style.backgroundPosition = (this.backgroundCounter--) + 'px 0px';
  }
}

export default Background;
