class StatusSidebar {
  constructor(createElement) {
    this.createElement = createElement;
    this.init();
  }

  init() {
  }

  createStatusSideBar(gameContainer, gameContainerHeight) {
    this.statusSideBarElement = this.createElement('div', 'status-container');
    this.statusSideBarElement.style.height = gameContainerHeight + 'px';
    gameContainer.appendChild(this.statusSideBarElement);
  }

  createStatusContainer(className, text) {
    let containerElement = this.createElement('div', className + '-container');
    this.statusSideBarElement.appendChild(containerElement);

    let textElement = this.createElement('p', className + '-text', text);
    containerElement.appendChild(textElement);

    this.createStatus(containerElement, className, className + '-health', 'Health');
    this.createStatus(containerElement, className, className + '-shield', 'Shield');
  }

  createInnerContainer(containerElement, className) {
    let innerContainerWidth = 70;
    let innerContainerElement = this.createElement('div', className + '-inner-container');
    innerContainerElement.style.width = innerContainerWidth + 'px';
    containerElement.appendChild(innerContainerElement);

    return innerContainerElement;
  }

  createStatus(containerElement, innerContainerClassName, className, text) {
    let statusHeight = 120;
    let statusWidth = 20;
    let statusText = this.createElement('p', className + '-text', text);
    let innerContainerElement = this.createInnerContainer(containerElement, innerContainerClassName);
    innerContainerElement.appendChild(statusText);

    let statusContainerElement = this.createElement('div', className + '-container');
    statusContainerElement.style.height = statusHeight + 'px';
    statusContainerElement.style.width = statusWidth + 'px';
    innerContainerElement.appendChild(statusContainerElement);

    let statusElement = this.createElement('div', className);
    statusElement.style.height = statusHeight + 'px';
    statusElement.style.width = statusWidth + 'px';
    if (className === 'player-shield') {
      statusElement.style.top = statusHeight + 'px';
    }
    statusContainerElement.appendChild(statusElement);
  }
}

export default StatusSidebar;
