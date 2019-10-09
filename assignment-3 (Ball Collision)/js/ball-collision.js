const BALL_COLORS = ['#FF4C4E', '#89034B', '#077A80', '#0ED6C0', '#67E370', '#FFAE00'];

function generateRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min)) + min;
}

function generateRandomDirection() {
  return Math.round(Math.random()) * 2 - 1
}

class Ball {
  xDirection = generateRandomDirection();
  yDirection = generateRandomDirection();
  ballColor = BALL_COLORS[generateRandomNumber(0, BALL_COLORS.length)];

  constructor(parentElement, wallWidth, wallHeight, speed, massPerUnit, minSize, maxSize) {
    this.parentElement = parentElement;
    this.speed = speed;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.size = generateRandomNumber(this.minSize, this.maxSize);
    this.wallHeight = wallHeight;
    this.wallWidth = wallWidth;
    this.radius = this.size / 2;
    this.xVelocity = this.xDirection * this.speed;
    this.yVelocity = this.yDirection * this.speed;
    this.mass = this.size * massPerUnit;
    this.createBallElement();
  }

  createBallElement() {
    this.ball = document.createElement('div');
    this.ball.classList.add('ball');
    this.ball.style.width = this.size + 'px';
    this.ball.style.height = this.size + 'px';
    this.ball.style.backgroundColor = this.ballColor;
    this.parentElement.appendChild(this.ball);
  }

  checkWallCollision() {
    if (this.xPosition + this.radius + this.xVelocity > this.wallWidth - this.radius
      || this.xPosition + this.radius + this.xVelocity < this.radius) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.yPosition + this.radius + this.yVelocity > this.wallHeight - this.radius
      || this.yPosition + this.radius + this.yVelocity < this.radius) {
      this.yVelocity = -this.yVelocity;
    }
  }

  checkCollision(ball) {
    if (this.checkBallCollision(ball)) {
      this.changeVelocity(ball);
    }
  }

  checkBallCollision(ball) {
    this.xCenterPosition = this.xPosition + this.radius;
    this.yCenterPosition = this.yPosition + this.radius;
    ball.xcenterPosition = ball.xPosition + ball.radius;
    ball.ycenterPosition = ball.yPosition + ball.radius;
    let dx = this.xCenterPosition - ball.xcenterPosition;
    let dy = this.yCenterPosition - ball.ycenterPosition;
    let distance = Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2));

    return distance < this.radius + ball.radius;

  }

  changeVelocity(ball) {
    //  ELASTIC COLLISION

    let u1 = this.xVelocity; // velocity before collision at x axis for ball 1
    let u2 = ball.xVelocity; // velocity before collision at x axis for ball 2

    this.xVelocity = ((this.mass - ball.mass) / (this.mass + ball.mass)) * u1
      + ((2 * ball.mass) / (this.mass + ball.mass)) * u2;
    ball.xVelocity = ((2 * this.mass) / (this.mass + ball.mass)) * u1
      + ((ball.mass - this.mass) / (this.mass + ball.mass)) * u2;

    u1 = this.yVelocity; // velocity before collision at y axis for ball 1
    u2 = ball.yVelocity; // velocity before collision at y axis for ball 2
    this.yVelocity = ((this.mass - ball.mass) / (this.mass + ball.mass)) * u1
      + ((2 * ball.mass) / (this.mass + ball.mass)) * u2;
    ball.yVelocity = ((2 * this.mass) / (this.mass + ball.mass)) * u1
      + ((ball.mass - this.mass) / (this.mass + ball.mass)) * u2;

    ball.move();
    this.move();
  }

  checkOverlap(ball) {
    if (this.checkBallCollision(ball)) {
      const maxX = this.wallWidth - ball.size;
      const maxY = this.wallHeight - ball.size;
      const randomX = generateRandomNumber(0, maxX) + this.xVelocity;
      const randomY = generateRandomNumber(0, maxY) + this.yVelocity;
      ball.setPosition(randomX, randomY);
    }
  }

  setPosition(xPosition, yPosition) {
    this.xPosition = xPosition;
    this.yPosition = yPosition;
  }

  move() {
    this.xPosition += this.xVelocity;
    this.yPosition += this.yVelocity;

    this.draw();
    this.checkWallCollision();
  }

  draw() {
    this.ball.style.top = this.yPosition + 'px';
    this.ball.style.left = this.xPosition + 'px'
  }
}

class Game {
  balls = [];

  constructor(gameId, ballCount, wallWidth, wallHeight, speed, massPerUnit, minSize, maxSize, fps) {
    const FRAME_LIMIT = 1000 / fps;
    this.ballCount = ballCount;
    this.wallWidth = wallWidth;
    this.wallHeight = wallHeight;
    this.speed = speed;
    this.massPerUnit = massPerUnit;
    this.minSize = minSize;
    this.maxSize = maxSize;
    this.parentElement = document.getElementById(gameId);
    this.parentElement.style.width = wallWidth + 'px';
    this.parentElement.style.height = wallHeight + 'px';
    this.createBalls();
    setInterval(this.moveBalls.bind(this), FRAME_LIMIT);
  }

  createBalls() {
    for (let i = 0; i < this.ballCount; i++) {
      const ball = new Ball(this.parentElement, this.wallWidth, this.wallHeight, this.massPerUnit,
        this.speed, this.minSize, this.maxSize);
      const maxX = this.wallWidth - ball.size;
      const maxY = this.wallHeight - ball.size;
      const randomX = generateRandomNumber(0, maxX);
      const randomY = generateRandomNumber(0, maxY);
      ball.setPosition(randomX, randomY);
      ball.draw();
      this.balls.push(ball);
    }

    this.preventOverlap();
  }

  preventOverlap() {
    for (let i = 0; i < this.ballCount; i++) {
      for (let j = i + 1; j < this.ballCount; j++) {
        this.balls[i].checkOverlap(this.balls[j]);
      }
    }
  }

  moveBalls() {
    for (let i = 0; i < this.ballCount; i++) {
      this.balls[i].move();
      for (let j = i + 1; j < this.ballCount; j++) {
        this.balls[i].checkCollision(this.balls[j]);
      }
    }
  }
  
}
