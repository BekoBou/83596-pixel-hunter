import gameModel from './model';
import {status} from './const';
import Application from './application';

import HeaderView from './views/header';
import QuestionsView from './views/questions';

class GamePresenter {
  constructor(username) {
    this._username = username;
    this.header = new HeaderView(gameModel.state);
    this.content = new QuestionsView(gameModel.state);

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  startGame() {
    this.changeQuestion();

    this._interval = setInterval(() => {
      gameModel.tick();
      this.updateHeader();
      if (gameModel.timer === 0) {
        this.choiceHandler();
      }
    }, 1000);
  }

  endGame() {
    clearInterval(this._interval);
    Application.showStats(gameModel.state);
  }

  updateHeader() {
    const header = new HeaderView(gameModel.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
  }

  changeQuestion() {
    gameModel.resetTimer();
    this.updateHeader();

    const question = new QuestionsView(gameModel.state);
    question.onAnswer = this.choiceHandler.bind(this);

    this.changeContentView(question);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  choiceHandler(userChoice = false) {
    if (userChoice) {
      // check and save
      if (gameModel.timer >= 20) {
        gameModel.state.answers.push(status.FAST);
      } else if (gameModel.timer < 10) {
        gameModel.state.answers.push(status.SLOW);
      } else {
        gameModel.state.answers.push(status.CORRECT);
      }
    } else {
      gameModel.state.answers.push(status.WRONG);
      gameModel.wrongAnswer();
      if ( !gameModel.lifes) {
        this.endGame();
      }
    }

    if (gameModel.hasNextQuestion()) {
      gameModel.nextQuestion();
      this.changeQuestion();
    } else {
      this.endGame();
    }
  }
}

const game = new GamePresenter();

export default (username) => {
  game.startGame(username);
  return game.root;
};
