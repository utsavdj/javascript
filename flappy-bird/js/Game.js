import Background from '../js/Background.js';
import Pipes from '../js/Pipes.js';
import Bird from "../js/Bird.js";


class Game {
  constructor(gameId) {
    this.fps = 60;
    this.frameLimit = 1000 / this.fps;

    this.gameId = gameId;
    this.parentElement = document.getElementById(this.gameId);
    this.width = 600;
    this.height = 655;
    this.parentElement.style.width = this.width + 'px';
    this.parentElement.style.height = this.height + 'px';
    this.menu();
  }

  menu() {
    this.gameOverElement = document.createElement('div');
    this.gameOverElement.classList.add('logo');
    this.parentElement.appendChild(this.gameOverElement);

    this.getReadyElement = document.createElement('div');
    this.getReadyElement.classList.add('get-ready');
    this.parentElement.appendChild(this.getReadyElement);

    this.getInstructionElement = document.createElement('div');
    this.getInstructionElement.classList.add('instruction');
    this.getInstructionElement.innerText = 'Press SPACE to jump';

    this.startGameElement = document.createElement('button');
    this.startGameElement.classList.add('start');
    this.startGameElement.innerText = 'Start';
    this.parentElement.appendChild(this.startGameElement);

    this.parentElement.appendChild(this.getInstructionElement);
    this.startGame('menu');

    this.startGameElement.onclick = () => {
      clearInterval(this.movementInterval);
      this.parentElement.innerHTML = '';
      this.startGame();
    }
  }

  startGame(menu = null) {

    this.background = new Background(this.parentElement);

    if (!menu) {
      this.playableBackgroundHeight = this.height - this.background.groundHeight;

      this.bird = new Bird(this.parentElement, this.background);
      this.gravity = this.bird.gravity;

      this.pipesArray = [];
      this.pipeIntervalCounter = 0;

      this.flapIntervalCounter = 0;

      this.hiScore = localStorage.getItem('flappy-bird-hi-score-' + this.gameId);
      this.hiScore = this.hiScore ? this.hiScore : 0;
      this.score = 0;

      this.createScoreBox();

      this.createPipes();

      this.checkKeyPress();
    }

    this.movementInterval = setInterval(
      function () {
        this.background.moveBackground();

        if (!menu) {
          this.flapIntervalCounter++;
          if (this.flapIntervalCounter === 5) {
            this.bird.renderBird();
            this.flapIntervalCounter = 0;
          }

          this.bird.fall(this.gravity);
          this.gravity += this.bird.gravity;

          const that = this;
          if (this.bird.checkCollision(this.playableBackgroundHeight)) {
            that.gameOver();
          }

          this.pipeIntervalCounter++;
          if (this.pipeIntervalCounter === 110) {
            that.createPipes();
            this.pipeIntervalCounter = 0;
          }

          that.movePipes();
        }
      }.bind(this),
      this.frameLimit
    );
  }

  createScoreBox() {
    this.scoreBoxElement = document.createElement('div');
    this.scoreBoxElement.classList.add('score-box');
    this.scoreBoxElement.innerText = this.score;
    this.parentElement.appendChild(this.scoreBoxElement);
  }

  checkKeyPress() {
    let isKeyPressed = false;
    document.onkeydown = event => {
      if (isKeyPressed) {
        return;
      }

      isKeyPressed = true;
      const control = event.code;
      if (control === 'Space') {
        this.gravity = this.bird.gravity;
        this.bird.jump();
        this.bird.birdElement.style.transform = 'rotate(-45deg)';
        this.playSound('sounds/wing.wav');
      }
    };

    // check key if key is pressed if pressed prevent unlimited press
    document.onkeyup = event => {
      isKeyPressed = false;
      const control = event.code;
      if (control === 'Space') {
        this.bird.birdElement.style.transform = 'rotate(45deg)';
      }
    };
  }

  createPipes() {
    this.pipes = new Pipes(this.parentElement, this.width, this.playableBackgroundHeight);
    this.pipesArray.push(this.pipes);
  }

  movePipes() {
    for (let i = 0; i < this.pipesArray.length; i++) {
      if (this.pipesArray[i].isPipeOutOfScreen()) {
        this.pipesArray.splice(i, 1);
      } else {
        if (this.pipesArray[i].checkCollision(this.bird)) {
          this.gameOver();
        }
        this.checkPipeCrossed(this.pipesArray[i]);
        this.updateScore(this.pipesArray[i]);
        this.pipesArray[i].move();
      }
    }
  }

  checkPipeCrossed(pipe) {
    if (!pipe.isPipeCrossed) {
      if ((pipe.positionX + pipe.width <= this.bird.positionX)) {
        pipe.isPipeCrossed = true
      }
    }
  }

  updateScore(pipe) {
    if (!pipe.isScored && pipe.isPipeCrossed) {
      this.score++;
      this.scoreBoxElement.innerText = this.score;
      pipe.isScored = true;
      this.playSound('sounds/point.wav')
    }
  }

  gameOver() {
    this.playSound('sounds/hit.wav');

    clearInterval(this.movementInterval);
    document.onkeydown = null;
    this.scoreBoxElement.remove();

    this.makeBirdFallOnPipeCollision();

    // check high score is to be increased
    if (this.score > this.hiScore) {
      this.playSound('sounds/point.wav');
      this.hiScore = this.score;
      localStorage.setItem('flappy-bird-hi-score-' + this.gameId, this.hiScore);
    }

    this.gameOverElement = document.createElement('div');
    this.gameOverElement.classList.add('game-over');
    this.parentElement.appendChild(this.gameOverElement);

    this.scoreElement = document.createElement('div');
    this.scoreElement.classList.add('score');
    this.scoreElement.innerText = this.score;
    this.gameOverElement.appendChild(this.scoreElement);

    this.hiScoreElement = document.createElement('div');
    this.hiScoreElement.classList.add('hi-score');
    this.hiScoreElement.innerText = this.hiScore;
    this.gameOverElement.appendChild(this.hiScoreElement);

    this.retryElement = document.createElement('button');
    this.retryElement.classList.add('retry');
    this.retryElement.innerText = 'Retry';
    this.parentElement.appendChild(this.retryElement);

    this.retryElement.onclick = function () {
      this.parentElement.innerHTML = '';
      const that = this;
      that.startGame();
    }.bind(this)
  }

  makeBirdFallOnPipeCollision() {
    this.birdFallOnCollisionGravityIncrement = 0.5;
    this.birdFallOnCollisionInterval = setInterval(
      function () {
        this.bird.fallBirdOnCollision(this.gravity);
        this.gravity += this.birdFallOnCollisionGravityIncrement;
        if (this.playableBackgroundHeight < this.bird.positionY + this.bird.height) {
          clearInterval(this.birdFallOnCollisionInterval);
        }
      }.bind(this),
      this.frameLimit
    );
  }

  playSound(src) {
    const sound = new Audio();
    sound.src = src;
    sound.play();
  }
}

export default Game;
