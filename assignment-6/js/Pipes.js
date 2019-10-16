import Background from "./Background";

class Pipes{
  constructor(parentElement, gameWidth, playableBackgroundHeight){
    this.parentElement = parentElement;
    this.gameWidth = gameWidth;
    this.playableBackgroundHeight = playableBackgroundHeight;
    this.positionX = this.gameWidth;
    this.width = 70;
    this.gapBetweenPipes = 140;
    this.isPipeCrossed = false;
    this.isScoreIncreased = false;
    this.createTopPipe();
    this.createBottomPipe();
    this.setPipeHeight();
  }

  createTopPipe() {
    this.topPipeElement = document.createElement('div');
    this.topPipeElement.classList.add('top-pipe');
    this.parentElement.appendChild(this.topPipeElement);
    this.addPipeAttributes(this.topPipeElement)
  }

  createBottomPipe() {
    this.bottomPipeElement = document.createElement('div');
    this.bottomPipeElement.classList.add('bottom-pipe');
    this.parentElement.appendChild(this.bottomPipeElement);
    this.addPipeAttributes(this.bottomPipeElement)
  }

  addPipeAttributes(pipeElement){
    pipeElement.style.backgroundImage = 'url(images/top-pipe.png)';
    pipeElement.style.backgroundSize = 'cover';
    pipeElement.style.position = 'absolute';
    pipeElement.style.width = this.width + 'px';
    pipeElement.style.left = this.positionX + 'px';
  }

  generateRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  setPipeHeight(){
    this.topPipeHeight = this.generateRandomNumber(80, 300);
    this.topPipeElement.style.height = this.topPipeHeight + 'px';
    this.bottomPipeHeight = this.playableBackgroundHeight - this.topPipeHeight - this.gapBetweenPipes;
    this.bottomPipeElement.style.height = this.bottomPipeHeight + 'px';
    this.setBottomPipePositionY();
  }

  setBottomPipePositionY(){
    this.bottomPipePositionY = this.topPipeHeight + this.gapBetweenPipes;
    this.bottomPipeElement.style.top = this.bottomPipePositionY + 'px';
  }

  move() {
    this.positionX -= 2;
    this.draw();
  }

  draw() {
    this.topPipeElement.style.left = this.positionX + 'px';
    this.bottomPipeElement.style.left = this.positionX + 'px';
  }

  isPipeOutOfScreen(){
    if (this.positionX + this.width <= 0){
      this.topPipeElement.remove();
      this.bottomPipeElement.remove();
      return true;
    }
    return false;
  }

  checkCollision(bird){
    return (this.positionX <= bird.positionX + bird.width &&
      this.positionX + this.width >= bird.positionX &&
      (this.bottomPipePositionY <= bird.positionY + bird.height ||
      this.topPipeHeight >= bird.positionY));
  }
}

export default Pipes;
