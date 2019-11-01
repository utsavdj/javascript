class LevelComplete {
  constructor() {
    this.init();
  }

  init() {
  }

  createLevelCompleteElement(gameElement, createElement, level) {
    let levelCompleteElement = createElement('div', 'level-complete');
    levelCompleteElement.style.zIndex = '20';
    levelCompleteElement.style.position = 'absolute';
    gameElement.appendChild(levelCompleteElement);

    let levelCompleteTextElement = createElement('p', 'level-complete-text',
      'Level ' + level + ' Complete');
    levelCompleteElement.appendChild(levelCompleteTextElement);

    let continueButton = createElement('button', 'continue-btn', 'Continue');
    levelCompleteElement.appendChild(continueButton);
  }
}

export default LevelComplete;
