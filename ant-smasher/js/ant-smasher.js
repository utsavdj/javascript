function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomDirection() {
  return Math.round(Math.random()) * 2 - 1
}

class Ant {

  constructor(parentElement, wallWidth, wallHeight, speed, massPerUnit, minSize, maxSize) {
    this.parentElement = parentElement;
    this.speed = speed;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.size = generateRandomNumber(this.minSize, this.maxSize);
    this.height = this.width = this.size;
    this.wallHeight = wallHeight;
    this.wallWidth = wallWidth;
    this.xDirection = generateRandomDirection();
    this.yDirection = generateRandomDirection();
    this.xVelocity = this.xDirection * this.speed;
    this.yVelocity = this.yDirection * this.speed;
    this.mass = this.size * massPerUnit;
    this.isSmashed = false;
    this.createAntElement();
  }

  createAntElement() {
    this.ant = document.createElement('div');
    this.ant.classList.add('ant');
    this.ant.style.width = this.size + 'px';
    this.ant.style.height = this.size + 'px';
    this.ant.style.background = 'url(images/ant.gif) no-repeat';
    this.ant.style.backgroundSize = 'contain';
    this.ant.style.cursor = 'pointer';
    this.parentElement.appendChild(this.ant);
  }

  checkWallCollision() {
    if (this.xPosition + this.width > this.wallWidth || this.xPosition < 0) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.yPosition + this.height > this.wallHeight || this.yPosition < 0) {
      this.yVelocity = -this.yVelocity;
    }
  }

  checkCollision(ant) {
    if (this.checkAntCollision(ant)) {
      this.changeVelocity(ant);
    }
  }

  checkAntCollision(ant) {
    return this.xPosition < ant.xPosition + ant.width &&
      this.xPosition + this.width > ant.xPosition &&
      this.yPosition < ant.yPosition + ant.height &&
      this.yPosition + this.height > ant.yPosition;
  }

  changeVelocity(ant) {
    //  ELASTIC COLLISION

    let u1 = this.xVelocity; // velocity before collision at x axis for ant 1
    let u2 = ant.xVelocity; // velocity before collision at x axis for ant 2

    this.xVelocity = ((this.mass - ant.mass) / (this.mass + ant.mass)) * u1
      + ((2 * ant.mass) / (this.mass + ant.mass)) * u2;
    ant.xVelocity = ((2 * this.mass) / (this.mass + ant.mass)) * u1
      + ((ant.mass - this.mass) / (this.mass + ant.mass)) * u2;

    u1 = this.yVelocity; // velocity before collision at y axis for ant 1
    u2 = ant.yVelocity; // velocity before collision at y axis for ant 2
    this.yVelocity = ((this.mass - ant.mass) / (this.mass + ant.mass)) * u1
      + ((2 * ant.mass) / (this.mass + ant.mass)) * u2;
    ant.yVelocity = ((2 * this.mass) / (this.mass + ant.mass)) * u1
      + ((ant.mass - this.mass) / (this.mass + ant.mass)) * u2;

    ant.move();
    this.move();
  }

  checkOverlap(ant) {
    if (this.checkAntCollision(ant)) {
      const maxX = this.wallWidth - ant.size;
      const maxY = this.wallHeight - ant.size;
      const randomX = generateRandomNumber(0, maxX) + this.xVelocity;
      const randomY = generateRandomNumber(0, maxY) + this.yVelocity;
      ant.setPosition(randomX, randomY);
    }
  }

  setPosition(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  changeImageDirection() {
    if (this.xVelocity > 0 && this.yVelocity < 0) {
      this.ant.style.transform = 'rotate(45deg)';
    } else if (this.xVelocity > 0 && this.yVelocity > 0) {
      this.ant.style.transform = 'rotate(135deg)';
    } else if (this.xVelocity < 0 && this.yVelocity > 0) {
      this.ant.style.transform = 'rotate(225deg)';
    } else if (this.xVelocity < 0 && this.yVelocity < 0) {
      this.ant.style.transform = 'rotate(315deg)';
    }
  }

  move() {
    this.changeImageDirection();

    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;

    this.draw();
    this.checkWallCollision();
  }

  draw() {
    this.ant.style.top = this.yPosition + 'px';
    this.ant.style.left = this.xPosition + 'px'
  }
}

class Game {

  constructor(gameId, antCount, wallWidth, wallHeight, speed, massPerUnit, minSize, maxSize, fps) {
    this.ants = [];
    this.score = 0;
    const FRAME_LIMIT = 1000 / fps;
    this.antCount = antCount;
    this.wallWidth = wallWidth;
    this.wallHeight = wallHeight;
    this.speed = speed;
    this.massPerUnit = massPerUnit;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.parentElement = document.getElementById(gameId);
    this.wall = this.parentElement.getElementsByClassName('ant-smasher')[0];
    this.wall.style.width = wallWidth + 'px';
    this.wall.style.height = wallHeight + 'px';
    this.parentElement.style.width = this.wall.offsetWidth + 'px';
    this.scoreElement = this.parentElement.getElementsByClassName('score')[0];
    this.createAnts();
    setInterval(this.moveAnts.bind(this), FRAME_LIMIT);
  }

  createAnts() {
    for (let i = 0; i < this.antCount; i++) {
      const ant = new Ant(this.wall, this.wallWidth, this.wallHeight, this.massPerUnit,
        this.speed, this.minSize, this.maxSize);
      const maxX = this.wallWidth - ant.size;
      const maxY = this.wallHeight - ant.size;
      const randomX = generateRandomNumber(0, maxX);
      const randomY = generateRandomNumber(0, maxY);
      ant.setPosition(randomX, randomY);
      ant.draw();
      this.ants.push(ant);
    }

    this.preventOverlap();
  }

  preventOverlap() {
    for (let i = 0; i < this.ants.length; i++) {
      for (let j = i + 1; j < this.ants.length; j++) {
        this.ants[i].checkOverlap(this.ants[j]);
      }
    }
  }

  moveAnts() {
    for (let i = 0; i < this.ants.length; i++) {
      this.ants[i].ant.onclick = () => {
        const smashedSound = new Audio();
        smashedSound.src = 'sounds/smash.mp3';
        smashedSound.play();
        this.ants[i].ant.style.background = 'url(images/smashed-ant.png) no-repeat';
        this.ants[i].ant.style.backgroundSize = 'contain';
        this.ants[i].isSmashed = true;
        this.score++;
        this.scoreElement.innerHTML = this.score;
        setTimeout(() => {
          this.ants[i].ant.remove();
          this.ants.splice(i, 1);
          this.checkVictory();
        }, 250);
      };

      if (this.ants[i].isSmashed) {
        continue;
      }

      this.ants[i].move();
      for (let j = i + 1; j < this.ants.length; j++) {
        this.ants[i].checkCollision(this.ants[j]);
      }
    }
  }

  checkVictory() {
    if (this.ants.length === 0) {
      const victorySound = new Audio();
      victorySound.src = 'sounds/victory.mp3';
      victorySound.play();
      this.scoreContainer = this.parentElement.getElementsByClassName('score-container')[0];
      this.scoreContainer.innerHTML = 'Victory! You smashed all the ants.';
      this.retryButton = document.createElement('button');
      this.retryButton.classList.add('play-again');
      this.retryButton.innerText = 'Play Again!';
      this.scoreContainer.appendChild(this.retryButton);
      this.playAgain();
    }
  }

  playAgain() {
    const playAgainButton = this.parentElement.getElementsByClassName('play-again')[0];
    playAgainButton.onclick = () => {
      this.ants = [];
      this.score = 0;
      while (this.wall.hasChildNodes()) {
        this.wall.removeChild(this.wall.firstChild);
      }
      this.createAnts();

      this.scoreContainer.innerHTML = 'Your Score is: ';
      this.scoreElement = document.createElement('span');
      this.scoreElement.classList.add('score');
      this.scoreElement.innerText = this.score;
      this.scoreContainer.appendChild(this.scoreElement);
    }
  }

}
