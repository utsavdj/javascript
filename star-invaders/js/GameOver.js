class GameOver {
  constructor() {
    this.init();
  }

  init() {
  }

  createGameOverElement(commonFunctions, gameElement) {
    let gameOverElement = commonFunctions.createElement('div', 'game-over');
    gameOverElement.style.zIndex = '20';
    gameOverElement.style.position = 'absolute';
    gameElement.appendChild(gameOverElement);

    let gameOverTextElement = commonFunctions.createElement('p', 'game-over-text', 'Game Over');
    gameOverElement.appendChild(gameOverTextElement);
  }
}

export default GameOver;
