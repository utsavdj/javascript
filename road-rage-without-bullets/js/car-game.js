const MIN_OPPONENT = 0;
const MAX_OPPONENT = 2;
const FPS = 120;
const FRAME_LIMIT = 1000 / FPS;
const MAX_SPEED = 100;
const SPEED_INCREMENT = 2;
const SPEED_INCREMENT_INTERVAL = 10;


function generateRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

class Car {
  constructor(parentElement, carType) {
    this.parentElement = parentElement;
    this.laneWidth = 120;
    this.leftEndPositionX = 194;
    this.initalPosition = this.leftEndPositionX + this.laneWidth;
    this.xPosition = this.initalPosition;
    this.yPosition = 0;
    this.carType = carType;
    this.width = 84;
    this.height = 176;
    this.createCarElement();
  }

  playSound(src) {
    const sound = new Audio();
    sound.src = src;
    sound.play();
  }

  createCarElement() {
    this.carElement = document.createElement('div');
    this.carElement.style.width = this.width + 'px';
    this.carElement.style.height = this.height + 'px';
    if (this.carType === 'player') {
      this.createPlayerCar();
    } else {
      this.createOpponentCar();
    }
  }

  createPlayerCar() {
    this.carElement.classList.add('player-car');
    this.carElement.style.left = this.xPosition + 'px';
    this.yPosition = 464;
    this.carElement.style.top = this.yPosition + 'px';
    this.carElement.style.background = 'url(images/black-viper.png) no-repeat';
    this.carElement.style.backgroundSize = 'contain';
    this.parentElement.appendChild(this.carElement);
  }

  movePlayer(direction) {
    const endOfRoadOnLeft = this.initalPosition - this.laneWidth;
    const endOfRoadOnRight = this.initalPosition + this.laneWidth;

    this.carElement.style.transition = 'all 0.5s';

    this.playSound('sounds/car-move.mp3');

    if (direction === 1 && this.xPosition < endOfRoadOnRight) {
      this.xPosition += (this.laneWidth * direction);
      this.carElement.style.transform = 'rotate(45deg)';
    } else if (direction === -1 && this.xPosition > endOfRoadOnLeft) {
      this.xPosition += (this.laneWidth * direction);
      this.carElement.style.transform = 'rotate(-45deg)';
    }

    setTimeout(() => {
      this.carElement.style.transform = 'rotate(0deg)';
    }, 200);

    this.drawPlayer();
  }

  drawPlayer() {
    this.carElement.style.left = this.xPosition + 'px'
  }

  createOpponentCar() {
    this.carElement.classList.add('opponent-car');
    this.carElement.style.left = this.xPosition + 'px';
    this.yPosition = -(this.carElement.offsetHeight + 10);
    this.carElement.style.top = this.yPosition + 'px';
    this.carElement.style.background = 'url(images/police-car.png) no-repeat';
    this.carElement.style.backgroundSize = 'contain';
    this.carElement.style.transform = 'rotate(180deg)';
    this.parentElement.appendChild(this.carElement);
    this.yPosition = -this.carElement.clientHeight + 5;
    this.drawOpponent();
  }

  moveOpponent() {
    this.yPosition += 4;
    this.drawOpponent();
  }

  drawOpponent() {
    this.carElement.style.top = this.yPosition + 'px'
  }

  checkCollision(opponent) {
    return this.xPosition < opponent.xPosition + opponent.width &&
      this.xPosition + this.width > opponent.xPosition &&
      this.yPosition < opponent.yPosition + opponent.height &&
      this.yPosition + this.height > opponent.yPosition;
  }
}

class Game {

  constructor(gameId, speed) {
    this.parentElement = document.getElementById(gameId);
    this.initialSpeed = speed;
    this.speed = this.initialSpeed;
    this.roadTop = -640;
    this.opponents = [];
    this.score = 0;
    this.speedIncrementScore = SPEED_INCREMENT_INTERVAL;
    this.hiScore = localStorage.getItem("road-rage-hi-score");
    this.menu();
  }

  menu() {
    const menu = document.createElement('div');
    menu.classList.add('menu');
    menu.style.width = '100%';
    menu.style.height = '100%';
    menu.style.backgroundColor = 'black';
    menu.style.display = 'block';
    this.parentElement.appendChild(menu);

    this.menuElement = this.parentElement.getElementsByClassName('menu')[0];

    this.createMenuHeader();
    this.createInstructions();
    this.createStartButton();

    this.onStartGame();
  }

  createMenuHeader() {
    const menuHeader = document.createElement('h1');
    menuHeader.innerText = 'Road Rage';
    menuHeader.style.textTransform = 'uppercase';
    menuHeader.style.color = 'red';
    menuHeader.style.fontFamily = 'Arial, Helvetica, sans-serif';
    menuHeader.style.fontSize = '70px';
    menuHeader.style.fontWeight = '900';
    menuHeader.style.textAlign = 'center';
    menuHeader.style.paddingTop = '50px';
    menuHeader.style.marginBottom = '50px';
    this.menuElement.appendChild(menuHeader);
  }

  createInstructions() {
    const instructionList = document.createElement('ul');
    instructionList.style.color = 'white';
    instructionList.style.textAlign = 'center';
    instructionList.style.listStyle = 'none';
    instructionList.style.fontSize = '20px';
    instructionList.style.marginBottom = '20px';
    this.menuElement.appendChild(instructionList);

    const instructionListElement = this.menuElement.getElementsByTagName('ul')[0];
    const instructions = ['Press Left Arrow Key or A to Move Left', 'Press Right Arrow Key or D to Move Right',
      'Press ENTER or Click the Button Below to Start Game'];
    for (let i = 0; i < instructions.length; i++) {
      const instruction = document.createElement('li');
      instruction.innerText = instructions[i];
      instruction.style.marginBottom = '20px';
      instructionListElement.appendChild(instruction);
    }
  }

  createStartButton() {
    const startButton = document.createElement('button');
    startButton.innerText = 'Start Game';
    startButton.style.margin = '30px auto';
    startButton.style.padding = '10px 15px';
    startButton.style.border = 'none';
    startButton.style.cursor = 'pointer';
    startButton.style.display = 'block';
    startButton.style.fontSize = '20px';
    startButton.style.fontWeight = 'bold';
    startButton.style.textTransform = 'uppercase';
    startButton.style.color = 'white';
    startButton.style.backgroundColor = 'red';
    startButton.style.fontFamily = 'Arial, Helvetica, sans-serif';
    this.menuElement.appendChild(startButton);
  }

  onStartGame() {
    const startButtonElement = this.parentElement.getElementsByTagName('button')[0];
    startButtonElement.onclick = () => {
      this.startGame();
    };

    document.onkeyup = event => {
      const code = event.code;
      if (code === 'Enter') {
        this.startGame();
      }
    };
  }

  startGame() {
    document.onkeyup = null;
    this.createScoreBox();
    this.createButtons('new-game', 'New Game');
    this.createButtons('menu-button', 'Menu');

    this.playSound('sounds/car-start.mp3');

    this.menuElement.remove();

    this.createRoad();
    this.createCar();
    this.playBackgroundSound('sounds/car-sound.mp3', 'true');
    this.checkKeyPress();

    const that = this;
    this.moveInterval = setInterval(function () {
      that.moveRoad();
      that.moveOpponentCars();
    }, FRAME_LIMIT);

    this.newGameButtonElement = this.parentElement.getElementsByClassName('new-game')[0];
    this.newGameButtonElement.onclick = () => {
      this.onButtonClick('new-game');
    };

    this.menuButtonElement = this.parentElement.getElementsByClassName('menu-button')[0];
    this.menuButtonElement.onclick = () => {
      this.onButtonClick('menu');
    };
  }

  createScoreBox() {
    this.score = 0;
    this.hiScore = localStorage.getItem("road-rage-hi-score");
    this.parentScoreContainerElement = document.createElement('div');
    this.parentScoreContainerElement.classList.add('score-container');
    this.parentElement.appendChild(this.parentScoreContainerElement);

    const classNames = ['score', 'hi-score'];

    for (let i = 0; i < classNames.length; i++) {
      this.scoreContainerElement = document.createElement('div');
      this.scoreContainerElement.classList.add(classNames[i]);
      this.parentScoreContainerElement.appendChild(this.scoreContainerElement);

      this.scoreContainerElement = this.parentElement.getElementsByClassName(classNames[i])[0];
      this.scoreSpanElement = document.createElement('span');
      if (classNames[i] === 'score') {
        this.scoreContainerElement.innerText = 'Your Score: ';
      } else {
        this.scoreContainerElement.innerText = 'Your Hi-Score: ';
      }
      this.scoreContainerElement.appendChild(this.scoreSpanElement);

      if (classNames[i] === 'score') {
        this.scoreElement = this.scoreContainerElement.getElementsByTagName('span')[0];
        this.scoreElement.innerText = '0';
      } else {
        this.hiScoreElement = this.scoreContainerElement.getElementsByTagName('span')[0];
        this.hiScoreElement.innerText = this.hiScore ? this.hiScore : '0';
      }
    }
  }

  createButtons(className, innerText) {
    this.newGameButtonElement = document.createElement('button');
    this.newGameButtonElement.classList.add(className);
    this.newGameButtonElement.innerText = innerText;
    this.parentElement.appendChild(this.newGameButtonElement);
  }

  onButtonClick(buttonType) {
    this.opponents = [];
    this.speed = this.initialSpeed;
    this.speedIncrementScore = SPEED_INCREMENT_INTERVAL;
    if (!this.hiScore || this.score > this.hiScore) {
      localStorage.setItem('road-rage2-hi-score', this.score);
    }
    this.score = 0;
    clearInterval(this.moveInterval);
    clearInterval(this.createOpponentCarsInterval);
    this.parentElement.innerHTML = '';
    if (buttonType === 'menu') {
      this.menu();
    } else {
      this.startGame();
    }
  }

  createRoad() {
    const road = document.createElement('div');
    road.classList.add('road');
    road.style.width = '704px';
    road.style.height = '1300px';
    road.style.background = 'url(images/road.png) no-repeat';
    road.style.position = 'absolute';
    road.style.top = '-640px';
    this.parentElement.appendChild(road);
  }

  moveRoad() {
    this.road = document.getElementsByClassName('road')[0];
    this.roadTop += this.speed;
    this.road.style.top = this.roadTop + 'px';
    if (this.roadTop >= 0) {
      this.roadTop = -640;
    }
  }

  createCar() {
    this.car = new Car(this.parentElement, 'player');
    this.createOpponentCarsInterval = setInterval(this.createOpponentCars.bind(this), 1100);
  }

  createOpponentCars() {
    const numberOfOpponents = generateRandomValue(MIN_OPPONENT, MAX_OPPONENT);
    const lanes = [];
    for (let i = 0; i <= numberOfOpponents; i++) {
      let lane = generateRandomValue(1, 4);
      while (this.isLaneOccupied(lanes, lane)) {
        lane = generateRandomValue(1, 4);
      }
      lanes.push(lane);

      this.opponent = new Car(this.parentElement, 'opponent');
      if (lane === 1) {
        this.firstLane = this.opponent.initalPosition - this.opponent.laneWidth;
        this.opponent.xPosition = this.firstLane;
        this.opponent.carElement.style.left = this.firstLane + 'px';
      } else if (lane === 3) {
        this.lastLane = this.opponent.initalPosition + this.opponent.laneWidth;
        this.opponent.xPosition = this.lastLane;
        this.opponent.carElement.style.left = this.lastLane + 'px';
      }
      this.opponents.push(this.opponent);
    }
  }

  isLaneOccupied(lanes, lane) {
    for (let i = 0; i < lanes.length; i++) {
      if (lanes[i] === lane) {
        return true;
      }
    }
    return false;
  }

  moveOpponentCars() {
    for (let i = 0; i < this.opponents.length; i++) {
      if (this.opponents[i].carElement.offsetTop > this.parentElement.offsetHeight) {
        this.opponents[i].carElement.remove();
        this.opponents.splice(i, 1);
        this.score++;
        this.scoreElement.innerText = this.score;

        if (this.score <= MAX_SPEED) {
          if (this.speedIncrementScore === this.score) {
            this.speed += SPEED_INCREMENT;
            this.speedIncrementScore += SPEED_INCREMENT_INTERVAL;
          }
        }
      } else {
        if (!this.car.checkCollision(this.opponents[i])) {
          this.opponents[i].moveOpponent();
        } else {
          this.updateHiScore();

          clearInterval(this.moveInterval);
          clearInterval(this.createOpponentCarsInterval);
          this.score = 0;
          document.onkeydown = null;
          this.car.carElement.style.background = 'url(images/explosion.png)';
          this.explodeOpponent(i);
          this.carSoundElement = this.parentElement.getElementsByTagName('audio')[0];
          this.carSoundElement.remove();

          this.createGameOverElement();
        }
      }
    }
  }

  explodeOpponent(index) {
    this.opponents[index].carElement.remove();
    this.opponents.splice(index, 1);

    this.playSound('sounds/explosion.mp3');
  }

  createGameOverElement() {
    const gameOverElement = document.createElement('div');
    gameOverElement.classList.add('game-over');
    gameOverElement.innerText = 'Game Over';
    this.parentElement.appendChild(gameOverElement);
  }

  updateHiScore() {
    if (!this.hiScore || this.score > this.hiScore) {
      localStorage.setItem('road-rage-hi-score', this.score);
      this.hiScoreElement.innerText = this.score;
      this.playSound('sounds/hi-score.mp3')
    }
  }

  checkKeyPress() {
    document.onkeydown = event => {
      const control = event.code;
      const direction = 1;
      if (control === 'ArrowLeft' || control === 'KeyA') {
        this.car.movePlayer(-direction);
      } else if (control === 'ArrowRight' || control === 'KeyD') {
        this.car.movePlayer(direction);
      }
    };
  };

  playSound(src) {
    const sound = new Audio();
    sound.src = src;
    sound.play();
  }

  playBackgroundSound(src, loop) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("loop", loop);
    this.sound.style.display = "none";
    this.parentElement.appendChild(this.sound);
    this.sound.play();
  }
}
