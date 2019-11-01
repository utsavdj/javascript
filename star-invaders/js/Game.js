import Background from '../js/Background.js';
import Player from '../js/Player.js';
import Alien from '../js/Alien.js';
import Pattern from '../js/Pattern.js';
import GameLevel from '../js/GameLevel.js';
import Bullet from '../js/Bullet.js';
import Boss from '../js/Boss.js';
import Coin from "../js/Coin.js";
import Health from "../js/Health.js";
import Drop from "../js/Drop.js";
import Menu from "../js/Menu.js";
import StatusSidebar from "../js/StatusSidebar.js";
import Score from "../js/Score.js";
import Common from "../js/Common.js";
import GameOver from "../js/GameOver.js";
import LevelComplete from "../js/LevelComplete.js";
import * as weaponConstants from "../js/constants/weaponConstants.js";
import * as shooterTypeConstants from "../js/constants/shooterTypeConstants.js";
import * as itemTypeConstants from "../js/constants/itemTypeConstants.js";
import * as gameConstants from "../js/constants/gameConstants.js";
import * as levelConstants from "../js/constants/levelConstants.js";

class Game {
  constructor(gameId) {
    this.gameId = gameId;
    this.level = levelConstants.ONE;
    this.isBossRound = false;
    this.score = 0;
    this.hiScore = localStorage.getItem(this.gameId);
    this.hiScore = this.hiScore ? this.hiScore : 0;
    this.common = new Common();
    this.createParentElement();
    this.menu();
  }

  createParentElement() {
    this.parentElement = document.createElement('div');
    this.parentElement.setAttribute('id', this.gameId);
    document.body.prepend(this.parentElement);
  }

  menu() {
    let menu = new Menu(this.common.createElement);
    menu.createMenu(this.parentElement);
    this.onMenuLevelClick();
    this.onMenuBossRoundClick();
    this.onStartGameClick();
  }

  onStartGameClick() {
    let startButton = this.parentElement.getElementsByClassName('start-btn')[0];
    startButton.onclick = () => {
      this.level = levelConstants.ONE;
      this.isBossRound = false;
      this.startGame();
    }
  }

  startGame() {
    let menuContainer = this.parentElement.getElementsByClassName('menu-container')[0];
    menuContainer.remove();
    this.init();
    this.checkKeyPress();
    this.requestAnimation = window.requestAnimationFrame(this.render.bind(this));
  }

  init() {
    this.createGame();
    this.gameLevel = new GameLevel(this.level);
    this.levelSettings = this.gameLevel.getLevel();
    this.background = new Background(this.gameElement);
    this.playerTotalHealth = 5;
    this.player = new Player(this.gameElement, this.playerTotalHealth);
    this.pattern = new Pattern();
    this.gameOver = new GameOver();
    this.positions = this.pattern.getAlienPositionAndInterval(this.gameElement.offsetWidth,
      this.gameElement.offsetHeight);
    this.playerRecentPositionX = this.player.positionX;
    this.aliens = [];
    this.keyState = {};
    this.isKeyPressed = false;
    this.playerBullets = [];
    this.bossBullets = [];
    this.alienBullets = [];
    this.counter = 0;
    this.alienCreationCounter = 0;
    this.alienCreationInterval = 0;
    this.alienCreationIntervalOffset = 15;
    this.alienMoveDownOffset = 30;
    this.levelProgressCounter = 0;
    this.isGameOver = false;
    this.isAlienBulletFired = false;
    this.alienBulletFireInterval = 100;
    this.alienBulletFireCounter = 0;
    this.alienMovingDownBulletFireInterval = 30;
    this.alienMovingDownBulletFireCounter = 0;
    this.isAlienMovingDownBulletFired = false;
    this.isLevelComplete = false;
    this.coins = [];
    this.dropCounter = 0;
    this.dropInterval = this.levelSettings.dropInterval;
    this.drops = [];
    this.noOfAliensShotForCoinsGeneration = 0;
    this.noOfAliensToShootToGenerateCoins = this.levelSettings.noOfAliensToShootToGenerateCoins;
    this.isPlayerHealthSet = false;
    this.healths = [];
    this.totalAliens = this.common.getTotalNumberOfAliens(this.levelSettings.generateAlien);
    this.noOfAliensShot = 0;
    this.isBossCreated = false;
    this.randomAlienGenerationInterval = this.levelSettings.randomAliens.interval;
    this.randomAlienGenerationCounter = 0;
    this.isPaused = false;
    this.maxAliens = this.pattern.getNumberOfCols(this.gameElement.offsetWidth) * gameConstants.MAX_ROWS;
  }

  checkKeyPress() {
    if (!this.isGameOver) {
      document.onkeydown = event => {
        let control = event.code;
        this.keyState[control] = true;
        this.assignShootKeys();
        this.isKeyPressed = true;
      };

      // check key if key is pressed if pressed prevent unlimited press
      document.onkeyup = event => {
        let control = event.code;
        this.player.playerElement.style.transform = 'rotate(0deg)';
        this.isKeyPressed = false;
        this.keyState[control] = false;
      };
    }
  }

  createGame() {
    this.gameContainerHeight = document.body.offsetHeight;
    this.gameContainerWidth = document.body.offsetWidth;
    let containerBorderWidth = 2;
    let noOfBordersOnContainer = 4;
    let totalContainerBorderWidth = containerBorderWidth * noOfBordersOnContainer;
    this.gameContainer = this.common.createElement('div', 'star-invaders-container');
    this.gameContainer.style.width = this.gameContainerWidth + 'px';
    this.parentElement.append(this.gameContainer);

    let buttonsContainer = this.createButtonsContainer(this.gameContainerHeight);
    let buttonsContainerWidth = buttonsContainer.offsetWidth;
    buttonsContainer.style.borderLeft = containerBorderWidth + 'px solid #ffffff';
    buttonsContainer.style.borderRight = containerBorderWidth + 'px solid #ffffff';

    this.gameElement = this.common.createElement('div', 'star-invaders');
    this.gameElement.style.height = this.gameContainerHeight + 'px';
    this.gameContainer.appendChild(this.gameElement);

    this.statusSideBar = new StatusSidebar(this.common.createElement);
    this.statusSideBar.createStatusSideBar(this.gameContainer, this.gameContainerHeight);
    this.statusSideBar.statusSideBarElement.style.borderLeft = containerBorderWidth + 'px solid #ffffff';
    this.statusSideBar.statusSideBarElement.style.borderRight = containerBorderWidth + 'px solid #ffffff';
    let statusContainerWidth = this.statusSideBar.statusSideBarElement.offsetWidth;

    this.statusSideBar.createStatusContainer(shooterTypeConstants.PLAYER, 'Player');
    let playerStatusContainer = this.gameContainer.getElementsByClassName('player-container')[0];
    playerStatusContainer.style.top = this.statusSideBar.statusSideBarElement.offsetHeight -
      playerStatusContainer.offsetHeight + 'px';

    this.gameElement.style.width = this.gameContainerWidth - buttonsContainerWidth -
      statusContainerWidth - totalContainerBorderWidth + 'px';
  }

  render() {
    this.checkBossRound();
    this.background.move();
    this.assignMovementKeys();

    this.createAndMoveAliens();
    this.checkAlienBulletFireRate();
    this.checkAlienMovingDownBulletFireRate();
    this.moveAlienBullets(this.alienBullets);
    this.createAndMoveBoss();

    this.movePlayerBullets();
    this.checkBulletFireRate(this.player);

    this.createDrops();
    this.generateCoins();
    this.setHealthOnAlien();
    this.moveItems(this.coins, itemTypeConstants.COIN);
    this.moveItems(this.healths, itemTypeConstants.HEALTH);
    this.moveItems(this.drops, itemTypeConstants.DROP);

    this.counter++;
    this.dropCounter++;

    if (!this.isGameOver && !this.isLevelComplete && !this.isPaused) {
      this.requestAnimation = window.requestAnimationFrame(this.render.bind(this));
    }
  }

  checkBossRound() {
    if (this.noOfAliensShot >= this.totalAliens && !this.aliens.length && !this.isBossRound) {
      this.isBossRound = true;
    }
  }

  assignMovementKeys() {
    if (this.keyState['ArrowLeft'] || this.keyState['KeyA']) {
      if (this.player.positionX >= this.player.speed) {
        this.player.move(-this.player.speed, 0);
      }
    } else if (this.keyState['ArrowRight'] || this.keyState['KeyD']) {
      if (this.player.positionX <= this.background.width - this.player.width - this.player.speed) {
        this.player.move(this.player.speed, 0);
      }
    } else if (this.keyState['ArrowUp'] || this.keyState['KeyW']) {
      if (this.player.positionY >= this.gameElement.offsetHeight - gameConstants.MAX_PLAYER_POSITION_Y_OFFSET +
        this.player.speed) {
        this.player.move(0, -this.player.speed);
      }
    } else if (this.keyState['ArrowDown'] || this.keyState['KeyS']) {
      if (this.player.positionY <= this.background.height - this.player.height - this.player.speed) {
        this.player.move(0, this.player.speed);
      }
    }
  }

  createAndMoveAliens() {
    this.setAliensPosition();

    this.generateRandomAliens();

    for (let i = 0; i < this.aliens.length; i++) {
      if (this.aliens[i]) {
        if (!this.checkPlayerAlienCollision(i)) {
          if (!this.aliens[i].isExploded) {
            if (!this.aliens[i].isChild) {
              this.aliens[i].move();
              if (this.aliens[i].isInPosition && !this.aliens[i].isMoveDownPatternComplete) {
                this.moveAlienDown(i);
              }
              if (this.isRandomAlienRemoved(i)) {
                break;
              }
            } else {
              if (!this.moveAlienChild(i)) {
                break;
              }
            }
            if (this.aliens[i].checkIsPlayerClose(this.player.positionX)) {
              if (!this.aliens[i].isMovingDown) {
                if (!this.isAlienBulletFired) {
                  this.isAlienBulletFired = true;
                  this.createAlienBullet(i);
                }
              } else {
                if (!this.isAlienMovingDownBulletFired) {
                  this.isAlienMovingDownBulletFired = true;
                  this.createAlienBullet(i);
                }
              }
            }
            this.alienShot(i);
          } else {
            this.explodeAlien(i);
          }
        }
      }
    }
  }

  createAliens(size, type, pattern) {
    let alien = new Alien(this.gameElement);
    alien.createAlien(size, type, pattern);
    alien.creationInterval = this.alienCreationInterval;
    if (this.isBossRound) {
      alien.isRandom = true;
    }
    this.aliens.push(alien);
    this.alienCreationInterval += this.alienCreationIntervalOffset;
    return alien;
  }

  setAliensPosition() {
    if (this.levelProgressCounter < this.levelSettings.generateAlien.length && !this.isBossRound) {

      this.levelProgress = this.levelSettings.generateAlien[this.levelProgressCounter];
      if (this.counter === this.levelProgress.counter) {
        for (let i = 0; i < this.levelProgress.aliens.length; i++) {
          this.alienCreationInterval = 0;
          for (let j = 0; j < this.levelProgress.aliens[i].alienTypes.length; j++) {
            for (let k = 0; k < this.levelProgress.aliens[i].alienTypes[j].number; k++) {
              if (this.alienCreationCounter < this.maxAliens) {
                let alienProperties = this.levelProgress.aliens[i].alienTypes[j];
                let alien = this.createAliens(alienProperties.size, alienProperties.type,
                  this.levelProgress.aliens[i].pattern);

                alien.moveDownInterval = this.alienMoveDownOffset * this.alienCreationCounter * (k + 1);

                alien.finalPositionY = (this.gameContainerHeight - gameConstants.INITIAL_ALIENS_POSITION_Y_OFFSET) -
                  (alien.height * this.positions[this.alienCreationCounter].y) -
                  (gameConstants.ALIENS_POSITION_Y_OFFSET * this.positions[this.alienCreationCounter].y);


                alien.finalPositionX = (alien.width * (this.positions[this.alienCreationCounter].x) +
                  (this.positions[this.alienCreationCounter].x) * gameConstants.ALIENS_POSITION_X_OFFSET);
                this.alienCreationCounter++;
              }
            }
          }
        }
        this.levelProgressCounter++;
      }
    }
  }

  generateRandomAliens() {
    if (this.isBossRound && this.randomAlienGenerationCounter >= this.randomAlienGenerationInterval) {

      let numberOfAliens = this.common.generateRandomValue(this.levelSettings.randomAliens.minimumNumber,
        this.levelSettings.randomAliens.maximumNumber + 1);
      let minimumPatternIndex = 0;
      let maximumPatternIndex = this.levelSettings.randomAliens.patterns.length;
      let patternIndex = this.common.generateRandomValue(minimumPatternIndex, maximumPatternIndex);
      let pattern = this.levelSettings.randomAliens.patterns[patternIndex];
      this.alienCreationInterval = 0;

      for (let i = 0; i < numberOfAliens; i++) {
        let minimumAlienSizeAndTypeIndex = 0;
        let maximumAlienSizeAndTypeIndex = this.levelSettings.randomAliens.aliens.length;
        let alienSizeAndTypeIndex = this.common.generateRandomValue(minimumAlienSizeAndTypeIndex, maximumAlienSizeAndTypeIndex);
        this.createAliens(this.levelSettings.randomAliens.aliens[alienSizeAndTypeIndex].size,
          this.levelSettings.randomAliens.aliens[alienSizeAndTypeIndex].type, pattern);
      }
      this.randomAlienGenerationCounter = 0;
    }
    this.randomAlienGenerationCounter++;
  }

  checkPlayerAlienCollision(index) {
    if (!this.aliens[index].isExploded && this.aliens[index].checkCollision(this.player)) {
      this.playExplosionSound();
      this.aliens[index].alienElement.remove();
      this.player.health = 1;
      this.player.shield = 1;
      this.reduceHealth(shooterTypeConstants.PLAYER, this.player);
      this.reduceShield(shooterTypeConstants.PLAYER, this.player);
      this.player.isExploded = true;
      this.player.explode();
      this.aliens.splice(index, 1);
      this.isGameOver = true;
      this.gameOver.createGameOverElement(this.common, this.gameElement);
      return true;
    } else {
      return false;
    }
  }

  setPlayerRecentPosition(index) {
    let playerPositionOffset = 100;
    if (this.aliens[index].movementCounter % playerPositionOffset === 0 && !this.aliens[index].isPlayerPositionSet) {
      this.playerRecentPositionX = this.player.positionX;
    }
  }

  moveAlienDown(index) {
    this.setPlayerRecentPosition(index);
    this.aliens[index].moveDown(this.playerRecentPositionX);
  }

  isRandomAlienRemoved(index) {
    if (this.aliens[index].isRandom && this.aliens[index].isAllPatternComplete) {
      this.aliens[index].alienElement.remove();
      this.aliens.splice(index, 1);
      return true;
    }
    return false;
  }

  moveAlienChild(index) {
    this.setPlayerRecentPosition(index);
    if (!this.aliens[index].isChildMoveDownPatternComplete) {
      this.aliens[index].moveAlienChild(this.playerRecentPositionX);
      return true;
    } else {
      this.aliens[index].alienElement.remove();
      this.aliens.splice(index, 1);
      return false;
    }
  }

  createAlienBullet(index) {
    this.playBulletFiredSound();
    if ((this.aliens[index].properties.weapon === weaponConstants.SPREAD
      || this.aliens[index].properties.weapon === weaponConstants.SHIELD_BREAKER)
      && this.aliens[index].health === 1) {
      this.createBullets(shooterTypeConstants.ALIEN, this.aliens[index], this.aliens[index].properties.weapon,
        this.alienBullets);
    } else {
      this.createBullet(shooterTypeConstants.ALIEN, this.aliens[index], this.alienBullets);
    }
  }

  alienShot(index) {
    for (let i = 0; i < this.playerBullets.length; i++) {
      if (this.playerBullets[i].checkCollision(this.aliens[index])) {
        this.playerBullets[i].bulletElement.remove();
        this.playerBullets.splice(i, 1);
        this.aliens[index].health--;
        if (!this.aliens[index].health) {
          this.playExplosionSound();
          let alienPositionX = this.aliens[index].positionX;
          let alienPositionY = this.aliens[index].positionY;
          let alienWidth = this.aliens[index].width;
          this.aliens[index].isExploded = true;
          if (!this.isBossRound && !this.aliens[index].isRandom) {
            if (this.alienWithHealth === index) {
              this.generateItemFromAlien(itemTypeConstants.HEALTH, this.healths, alienPositionX,
                alienPositionY, alienWidth);
            } else {
              this.generateItemFromAlien(itemTypeConstants.COIN, this.coins, alienPositionX,
                alienPositionY, alienWidth);
            }
            this.score += this.aliens[index].properties.score;
            this.scoreElement.innerText = this.score;
            this.updateHighScore();
            this.noOfAliensShotForCoinsGeneration++;
            if (!this.aliens[index].isChild) {
              this.noOfAliensShot++;
            }
          }
        } else {
          this.playBulletHitSound();
        }
        break;
      }
    }
  }

  explodeAlien(index) {
    if (this.aliens[index].explosionCounter === 0) {
      this.aliens[index].explode();
      if (this.aliens[index].properties.special) {
        this.performSpecialProperty(index);
      }
    }
    if (this.aliens[index].explosionCounter >= this.aliens[index].explosionInterval) {
      this.aliens[index].alienElement.remove();
      this.aliens.splice(index, 1);
      return;
    }
    this.aliens[index].explosionCounter++;
  }

  generateCoins() {
    if (this.noOfAliensShotForCoinsGeneration === this.noOfAliensToShootToGenerateCoins) {
      this.noOfAliensShotForCoinsGeneration = 0;
      this.generateCoinsFromOffScreen();
    }
  }

  setHealthOnAlien() {
    if (this.player.health < this.playerTotalHealth && !this.isPlayerHealthSet) {
      let minimumValue = 0;
      let totalAliens = this.aliens.length;
      this.alienWithHealth = this.common.generateRandomValue(minimumValue, totalAliens);
      this.isPlayerHealthSet = true;
    }
  }

  generateItemFromAlien(itemType, items, positionX, positionY, alienWidth) {
    let item = null;
    if (itemType === itemTypeConstants.COIN) {
      item = new Coin(this.gameElement);
    } else {
      item = new Health(this.gameElement);
      this.isPlayerHealthSet = false;
      this.alienWithHealth = null;
    }
    let itemFromAlienOffsetPositionX = (alienWidth - item.width) / 2;
    positionX = positionX + itemFromAlienOffsetPositionX;
    item.create(positionX, positionY);
    items.push(item);
  }

  performSpecialProperty(index) {
    if (this.aliens[index].properties.special === weaponConstants.REGENERATE) {
      let alienChildProperties = this.aliens[index].properties.children;
      this.generateTwo(this.aliens[index].size, this.aliens[index].type, alienChildProperties,
        this.aliens[index].positionX, this.aliens[index].positionY);
    }
  }

  generateTwo(size, type, properties, positionX, positionY) {
    for (let num = 0; num < properties.length; num++) {
      let alien = new Alien(this.gameElement);
      alien.createAlien(size, type, null, true, properties[num], positionX, positionY);
      if (this.isBossRound) {
        alien.isRandom = true;
      }
      this.aliens.push(alien);
    }
  }

  checkAlienBulletFireRate() {
    if (this.alienBulletFireCounter >= this.alienBulletFireInterval) {
      this.isAlienBulletFired = false;
      this.alienBulletFireCounter = 0;
    }
    this.alienBulletFireCounter++;
  }

  checkAlienMovingDownBulletFireRate() {
    if (this.alienMovingDownBulletFireCounter >= this.alienMovingDownBulletFireInterval) {
      this.isAlienMovingDownBulletFired = false;
      this.alienMovingDownBulletFireCounter = 0;
    }
    this.alienMovingDownBulletFireCounter++;
  }

  moveAlienBullets(bullets) {
    for (let i = 0; i < bullets.length; i++) {
      if (bullets[i].isBulletOutOfGame()) {
        bullets.splice(i, 1)
      } else {
        if (bullets[i].checkCollision(this.player)) {
          if (this.player.shield <= 0) {
            this.player.isShieldOn = false;
          }
          if (!this.player.isShieldOn) {
            if (this.player.health) {
              this.playBulletHitSound();
              this.reduceHealth(shooterTypeConstants.PLAYER, this.player);
            } else {
              this.playExplosionSound();
              this.isGameOver = true;
              this.player.isExploded = true;
              this.player.explode();
              this.gameOver.createGameOverElement(this.common, this.gameElement);
            }
          } else {
            this.playBulletHitSound();
            this.reduceShield(shooterTypeConstants.PLAYER, this.player);
          }
          bullets[i].bulletElement.remove();
          bullets.splice(i, 1);
          break;
        } else {
          bullets[i].move();
        }
      }
    }
  }

  reduceHealth(className, bulletReceiver) {
    let healthElement = this.gameContainer.getElementsByClassName(className + '-health')[0];
    let healthHeight = healthElement.offsetHeight;
    bulletReceiver.health--;
    bulletReceiver.updateHealth(healthElement, healthHeight);
  }

  reduceShield(className, bulletReceiver) {
    let shieldElement = this.gameContainer.getElementsByClassName(className + '-shield')[0];
    let shieldHeight = shieldElement.offsetHeight;
    bulletReceiver.shield--;
    bulletReceiver.updateShield(shieldElement, shieldHeight);
  }

  createAndMoveBoss() {
    if (this.isBossRound) {
      if (!this.isBossCreated) {
        this.createBoss();
      }
      this.boss.move();
      this.checkPlayerBossCollision();
      this.moveAlienBullets(this.bossBullets);
      this.checkBulletFireRate(this.boss);
      if (!this.boss.isBulletFired) {
        if (!this.boss.isMovingDown) {
          if (this.boss.checkIsPlayerClose(this.player.positionX)) {
            this.boss.isBulletFired = true;
            this.createBossBullet();
          }
        } else {
          this.boss.isBulletFired = true;
          this.createBossBullet();
        }
      }
    }
  }

  createBoss() {
    this.boss = new Boss(this.gameElement, this.level, this.levelSettings.boss, this.common.generateRandomValue);
    this.boss.createBoss();
    this.isBossCreated = true;
    this.statusSideBar.createStatusContainer(shooterTypeConstants.BOSS, 'Boss');
  }

  checkPlayerBossCollision() {
    if (this.boss.checkCollision(this.player)) {
      this.playExplosionSound();
      this.player.health = 1;
      this.player.shield = 1;
      this.reduceHealth(shooterTypeConstants.PLAYER, this.player);
      this.reduceShield(shooterTypeConstants.PLAYER, this.player);
      this.player.isExploded = true;
      this.player.explode();
      this.isGameOver = true;
      this.gameOver.createGameOverElement(this.common, this.gameElement);
    }
  }

  checkBulletFireRate(shooter) {
    if (shooter.isBulletFired) {
      if (shooter.bulletFiredCounter >= shooter.bulletFiredInterval) {
        shooter.isBulletFired = false;
        shooter.bulletFiredCounter = 0;
      }
      shooter.bulletFiredCounter++;
    }
  }

  createBossBullet() {
    this.playBulletFiredSound();
    if ((this.boss.weapon === weaponConstants.SPREAD
      || this.boss.weapon === weaponConstants.SHIELD_BREAKER) && this.boss.isMovingDown) {
      this.createBullets(shooterTypeConstants.ALIEN, this.boss, this.boss.weapon, this.bossBullets);
    } else {
      this.createBullet(shooterTypeConstants.ALIEN, this.boss, this.bossBullets);
    }
  }

  movePlayerBullets() {
    for (let i = 0; i < this.playerBullets.length; i++) {
      if (this.playerBullets[i]) {
        if (this.playerBullets[i].isBulletOutOfGame()) {
          this.playerBullets[i].bulletElement.remove();
          this.playerBullets.splice(i, 1);
        } else {
          this.playerBullets[i].move();
          if (this.isBossRound) {
            this.updateBossStatus(i);
          }
        }
      }
    }
  }

  updateBossStatus(index) {
    if (this.playerBullets[index].checkCollision(this.boss, this.isBossRound, this.level)) {
      if (this.boss.isShieldOn && this.boss.shield !== 0) {
        this.playBulletHitSound();
        this.reduceShield(shooterTypeConstants.BOSS, this.boss);
      } else {
        this.playBulletHitSound();
        this.reduceHealth(shooterTypeConstants.BOSS, this.boss);
        this.score += this.boss.points;
      }
      if (this.boss.health === 0) {
        this.score += this.boss.levelSettings.score;
        this.scoreElement.innerText = this.score;
        this.playExplosionSound();
        this.updateHighScore();
        this.levelComplete();
      }
      this.playerBullets[index].bulletElement.remove();
      this.playerBullets.splice(index, 1);
    }
  }

  levelComplete() {
    let levelComplete = new LevelComplete();
    if (this.boss.shield) {
      this.boss.shield = 1;
      this.reduceShield(shooterTypeConstants.BOSS, this.boss);
    }
    this.boss.explode();
    this.isLevelComplete = true;
    levelComplete.createLevelCompleteElement(this.gameElement, this.common.createElement, this.level);
    this.onContinueClick();
  }

  onContinueClick() {
    let continueBtn = this.gameElement.getElementsByClassName('continue-btn')[0];
    continueBtn.onclick = () => {
      this.level++;
      this.isBossRound = false;
      this.gameContainer.remove();
      window.cancelAnimationFrame(this.requestAnimation);
      this.requestAnimation = window.requestAnimationFrame(this.render.bind(this));
      this.init();
    }
  }

  createDrops() {
    if (this.dropCounter > this.dropInterval) {
      let drop = new Drop(this.gameElement);
      let dropWidth = drop.width;
      let gameWidth = this.gameElement.offsetWidth;
      let maxDropPositionX = gameWidth - dropWidth;

      let dropPositionX = this.common.generateRandomValue(0, maxDropPositionX + 1);
      drop.createDrop(dropPositionX, this.common.generateRandomValue);
      this.drops.push(drop);
      this.dropCounter = 0;
    }
  }

  generateCoinsFromOffScreen() {
    let coin = new Coin(this.gameElement);
    let gameWidth = this.gameElement.offsetWidth;
    let maxCoinPositionX = gameWidth - coin.width;
    let minCoinPositionX = coin.width;
    let offsetPositionX = 10;
    let offsetPositionY = 15;
    let noOfCoins = this.levelSettings.noOfCoinsGenerated;
    let totalWidthAndOffsetOfAllCoins = (coin.width + offsetPositionX) * noOfCoins;
    let isCoinFallNotStraight = this.common.generateRandomValue(0, 2);
    let positionX = this.common.generateRandomValue(minCoinPositionX, maxCoinPositionX);
    let positionY = -(noOfCoins * coin.height);

    if (positionX + totalWidthAndOffsetOfAllCoins >= gameWidth) {
      positionX -= coin.width;
    }

    coin.create(positionX, positionY);
    this.coins.push(coin);
    for (let i = 0; i < noOfCoins - 1; i++) {
      coin = new Coin(this.gameElement);
      if (positionX + totalWidthAndOffsetOfAllCoins <= gameWidth && isCoinFallNotStraight) {
        positionX += coin.width + offsetPositionX;
      }
      positionY += coin.height + offsetPositionY;
      coin.create(positionX, positionY);
      this.coins.push(coin);
    }
  }

  moveItems(items, itemName) {
    for (let i = 0; i < items.length; i++) {
      if (items[i].isOutOfGame() || items[i].checkCollision(this.player)) {
        if (items[i].checkCollision(this.player)) {
          if (itemName === itemTypeConstants.COIN) {
            this.playCoinHealthSound();
            this.updateCoin(items[i].score)
          } else if (itemName === itemTypeConstants.HEALTH) {
            this.playCoinHealthSound();
            this.updateHealth();
          } else if (itemName === itemTypeConstants.DROP) {
            this.playDropSound();
            this.updateDrop(items[i].properties.weapon, items[i].properties.shield)
          }
        }
        items[i].element.remove();
        items.splice(i, 1);
      } else {
        items[i].move();
      }
    }
  }

  updateCoin(score) {
    this.player.coin += 1;
    this.score += score;
    this.scoreElement.innerText = this.score;
    this.updateHighScore();
  }

  updateHealth() {
    if (this.player.health < this.playerTotalHealth) {
      this.player.health += 1;
      this.player.fillHealth(this.gameContainer);
      this.isPlayerHealthSet = false;
    }
  }

  updateDrop(weapon, shield) {
    if (shield) {
      this.player.fillShield(this.gameContainer);
      this.player.shield = shield;
      this.player.isShieldOn = true;
    } else {
      this.player.weapon = weapon;
    }
  }

  assignShootKeys() {
    if (!this.isGameOver && ((this.keyState['Space'] || this.keyState['Enter']) && !this.isKeyPressed
      && !this.player.isBulletFired)) {
      this.player.isBulletFired = true;
      this.createPlayerBullet();
    }
  }

  createPlayerBullet() {
    this.playBulletFiredSound();
    if (this.player.weapon === weaponConstants.SPREAD || this.player.weapon === weaponConstants.SHIELD_BREAKER) {
      this.createBullets(shooterTypeConstants.PLAYER, this.player, this.player.weapon, this.playerBullets);
    } else {
      this.createBullet(shooterTypeConstants.PLAYER, this.player, this.playerBullets);
    }
  }

  createBullets(shooterType, shooter, weapon, bullets) {
    let numberOfBullets = 3;
    for (let i = 0; i < numberOfBullets; i++) {
      let bullet = new Bullet(this.gameElement, shooter, shooter.bulletDirectionY);
      bullet.createBullet(shooterType, weapon, i);
      bullets.push(bullet);
    }
  }

  createBullet(shooterType, shooter, bullets) {
    let bullet = new Bullet(this.gameElement, shooter, shooter.bulletDirectionY);
    if (shooterType === shooterTypeConstants.PLAYER) {
      bullet.createBullet(shooterType, shooter.weapon);
    } else {
      bullet.createBullet(shooterType);
    }
    bullets.push(bullet);
  }

  updateHighScore() {
    if (this.score > this.hiScore) {
      this.playHighScoreSound();
      this.hiScore = this.score;
      localStorage.setItem(this.gameId, this.hiScore);
      this.hiScoreElement.innerText = this.score;
    }
  }

  createButtonsContainer() {
    let score = new Score();
    let buttonsContainer = this.common.createElement('div', 'buttons-container');
    buttonsContainer.style.height = this.gameContainerHeight + 'px';
    this.gameContainer.appendChild(buttonsContainer);
    let scoreElements = score.createScores(buttonsContainer, this.level, this.score, this.hiScore,
      this.common.createElement);
    this.scoreElement = scoreElements.scoreElement;
    this.hiScoreElement = scoreElements.hiScoreElement;
    this.createButtons(buttonsContainer);
    return buttonsContainer;
  }

  createButtons(parentElement) {
    let pauseButton = this.common.createElement('button', 'pause-btn', 'Pause');
    parentElement.appendChild(pauseButton);
    if (!this.isLevelComplete) {
      this.onPauseClick(pauseButton);
    }

    let newGameButton = this.common.createElement('button', 'new-game-btn', 'New Game');
    parentElement.appendChild(newGameButton);
    this.onNewGameClick(newGameButton);

    let menuButton = this.common.createElement('button', 'menu-btn', 'Menu');
    parentElement.appendChild(menuButton);
    this.onMenuClick(menuButton);
  }

  onPauseClick(pauseButton) {
    pauseButton.onmousedown = () => {
      if (this.isPaused) {
        this.isPaused = false;
        this.requestAnimation = window.requestAnimationFrame(this.render.bind(this));
      } else {
        this.isPaused = true;
      }
    };
  }

  onNewGameClick(newGameButton) {
    newGameButton.onclick = () => {
      this.score = 0;
      this.level = levelConstants.ONE;
      this.isBossRound = false;
      this.gameContainer.remove();
      window.cancelAnimationFrame(this.requestAnimation);
      this.requestAnimation = window.requestAnimationFrame(this.render.bind(this));
      this.init();
    };
  }

  onMenuClick(menuButton) {
    menuButton.onclick = () => {
      this.level = levelConstants.ONE;
      this.score = 0;
      this.gameContainer.remove();
      window.cancelAnimationFrame(this.requestAnimation);
      this.menu();
    };
  }

  onMenuLevelClick() {
    let menuLevelButtons = this.parentElement.getElementsByClassName('menu-level-btn');
    for (let i = 0; i < menuLevelButtons.length; i++) {
      menuLevelButtons[i].onclick = (e) => {
        this.level = +e.currentTarget.dataset.level;
        this.isBossRound = false;
        this.startGame();
      }
    }
  }

  onMenuBossRoundClick() {
    let menuBossRoundButtons = this.parentElement.getElementsByClassName('menu-boss-round-btn');
    for (let i = 0; i < menuBossRoundButtons.length; i++) {
      menuBossRoundButtons[i].onclick = (e) => {
        this.level = +e.currentTarget.dataset.level;
        this.isBossRound = true;
        this.startGame();
      }
    }
  }

  playExplosionSound() {
    this.common.playSound('sounds/explosion.mp3');
  }

  playBulletFiredSound() {
    this.common.playSound('sounds/bullet-fired.mp3');
  }

  playBulletHitSound() {
    this.common.playSound('sounds/hit.mp3');
  }

  playCoinHealthSound() {
    this.common.playSound('sounds/coin-health.wav');
  }

  playDropSound() {
    this.common.playSound('sounds/drop.mp3');
  }

  playHighScoreSound() {
    this.common.playSound('sounds/high-score.mp3');
  }
}

export default Game;
