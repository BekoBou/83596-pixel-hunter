import GameModel from './model';
import Application from './application';

import HeaderView from './views/header';
import QuestionsView from './views/questions';

class GamePresenter {
  constructor(model) {
    this.model = model;
    this.header = new HeaderView(this.model.state);
    this.content = new QuestionsView(this.model.state);

    this.root = document.createElement('div');
    this.root.appendChild(this.header.element);
    this.root.appendChild(this.content.element);

    this._interval = null;
  }

  startGame(username) {
    this._username = username;
    this.changeQuestion();

    this._interval = setInterval(() => {
      this.model.tick();
      this.updateHeader();
      if (this.model.timer === 0) {
        this.choiceHandler();
      }
    }, 1000);
  }

  endGame() {
    clearInterval(this._interval);
    Application.saveGame(this.model, this._username);
  }

  updateHeader() {
    const header = new HeaderView(this.model.state);
    this.root.replaceChild(header.element, this.header.element);
    this.header = header;
    this.header.onBack = () => {
      clearInterval(this._interval);
    };
  }

  changeQuestion() {
    this.model.resetTimer();
    this.updateHeader();

    const question = new QuestionsView(this.model.state);
    question.onAnswer = this.choiceHandler.bind(this);

    this.changeContentView(question);
  }

  changeContentView(view) {
    this.root.replaceChild(view.element, this.content.element);
    this.content = view;
  }

  choiceHandler(userChoice = false) {
    if (userChoice) {
      this.model.addCorrectAnswer(this.model.timer);
    } else {
      this.model.addWrongAnswer();
      this.model.takeLife();
    }

    if (this.model.hasNextQuestion() && !this.model.isDead()) {
      this.model.nextQuestion();
      this.changeQuestion();
    } else {
      this.endGame();
    }
  }
}

export default (gameData, username) => {
  const game = new GamePresenter(new GameModel(gameData));
  game.startGame(username);
  return game.root;
};
