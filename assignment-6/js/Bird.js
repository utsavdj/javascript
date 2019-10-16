class Bird {
  constructor(parentElement) {
    this.parentElement = parentElement;
    this.birdSpritePositionX = 0;
    this.birdSpriteOffsetPositionX = 58;
    this.width = 58;
    this.height = 39;
    this.positionX = 225;
    this.positionY = 308;
    this.jumpHeight = 60;
    this.gravity = 0.2;
    this.numberOfSpritesToMove = 3;
    this.lastSpritePosition = -(this.width * this.numberOfSpritesToMove);
    this.createBird();
  }

  createBird() {
    this.birdElement = document.createElement('div');
    this.birdElement.classList.add('bird');
    this.birdElement.style.backgroundImage = 'url(images/bird.png)';
    this.birdElement.style.position = 'absolute';
    this.birdElement.style.width = this.width + 'px';
    this.birdElement.style.height = this.height + 'px';
    this.birdElement.style.top = this.positionY + 'px';
    this.birdElement.style.left = this.positionX + 'px';
    this.birdElement.style.backgroundSize = 'cover';
    this.birdElement.style.backgroundRepeat = 'repeat-x';
    this.birdElement.style.transform = 'rotate(45deg)';
    this.parentElement.appendChild(this.birdElement);
    this.birdElement = this.parentElement.getElementsByClassName('bird')[0];
  }

  renderBird() {
    this.birdElement.style.backgroundPosition = this.birdSpritePositionX + 'px 0';
    this.birdElement.style.transition = 'transform 0.4s ease';
    this.birdSpritePositionX -= this.birdSpriteOffsetPositionX;
    if (this.birdSpritePositionX <= this.lastSpritePosition) {
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

  checkCollision(playableBackgroundHeight){
     return this.positionY + this.height >= playableBackgroundHeight || this.positionY <= 0
  }


}

export default Bird;
