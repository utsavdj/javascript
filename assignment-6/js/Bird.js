class Bird {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.birdSpritePositionX = 0;
    this.birdSpriteOffsetPositionX = 58;
    this.createBird();
    this.fps = 60;
    this.frame_limit = 1000 / this.fps;
    this.width = 58;
    this.height = 39;
    this.positionY = 308;
    this.jumpHeight = 50;
    this.gravity = 0.1;
  }

  createBird() {
    this.birdElement = document.createElement('div');
    this.birdElement.classList.add('bird');
    this.birdElement.style.backgroundImage = 'url(images/bird.png)';
    this.birdElement.style.position = 'absolute';
    this.birdElement.style.width = this.width + 'px';
    this.birdElement.style.height = this.height + 'px';
    this.birdElement.style.top = this.positionY + 'px';
    this.birdElement.style.backgroundSize = 'cover';
    this.birdElement.style.backgroundRepeat = 'repeat-x';
    this.parentElement.appendChild(this.birdElement);
    this.birdElement = this.parentElement.getElementsByClassName('bird')[0];
    setInterval(this.renderBird.bind(this), 100);
  }

  renderBird() {
    this.birdElement.style.backgroundPosition = this.birdSpritePositionX + 'px 0';
    this.birdSpritePositionX -= this.birdSpriteOffsetPositionX;
    if (this.birdSpritePositionX <= -174) {
      this.birdSpritePositionX = 0;
    }
  }

  jump(){
    this.positionY -= this.jumpHeight;
    this.draw();
  }

  fall(gravity){
    this.positionY += gravity;
    this.draw();
  }

  draw(){
    this.birdElement.style.top = this.positionY + 'px';
  }

}

// export default Bird;
