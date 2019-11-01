class Score {
  constructor() {
    this.init();
  }

  init(){}

  createScores(buttonsContainer, level, score, hiScore, createElement){
    let levelTextElement = createElement('div', 'level-text', 'Level ' + level);
    buttonsContainer.appendChild(levelTextElement);
    let scoreTextElement = createElement('div', 'score-text', 'Score');
    buttonsContainer.appendChild(scoreTextElement);
    let scoreElement = createElement('div', 'score', score+'');
    buttonsContainer.appendChild(scoreElement);
    let hiScoreTextElement = createElement('div', 'hi-score-text', 'Hi Score');
    buttonsContainer.appendChild(hiScoreTextElement);
    let hiScoreElement = createElement('div', 'hi-score', hiScore+'');
    buttonsContainer.appendChild(hiScoreElement);

    return {scoreElement: scoreElement, hiScoreElement: hiScoreElement};
  }

}

export default Score;
