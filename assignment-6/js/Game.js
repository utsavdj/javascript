// import Bird from "../js/Bird";

class Game {
  constructor (gameId, speed) {
    this.parentElement = document.getElementById(gameId);
    this.width = 600;
    this.height = 655;
    this.parentElement.style.width = this.width + 'px';
    this.parentElement.style.height = this.height + 'px';
    this.background = new Background(this.parentElement);
    this.bird = new Bird(this.parentElement, this.background);
    this.gravity = this.bird.gravity;
    this.checkKeyPress();
    const that = this;
    setInterval(function () {
      that.gravity += that.gravity;
      that.bird.fall(that.gravity);
    }, 100)
  }

  checkKeyPress() {
    document.onkeydown = event => {
      const control = event.code;
      if (control === 'Space') {
        this.gravity = this.bird.gravity;
        this.bird.jump();
      }
    }
  }
}

// export default Game;
