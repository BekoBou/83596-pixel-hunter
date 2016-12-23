import introView from './screens/intro';
import greetingView from './screens/greeting';
import rulesView from './screens/rules';
import gameStart from './game';
import statsView from './screens/stats';

const mainContainer = document.getElementById('main');
const renderTemplate = (element, container = mainContainer) => {
  container.innerHTML = '';
  container.appendChild(element);
};

let gameData;

export default class Application {
  static showIntro() {
    renderTemplate(introView());
  }

  static showError() {

  }

  static showGreating() {
    renderTemplate(greetingView());
  }

  static showRules() {
    renderTemplate(rulesView());
  }

  static showGame(username) {
    renderTemplate(gameStart(gameData, username));
  }

  static showStats(state) {
    renderTemplate(statsView(state));
  }

  static set data(value) {
    gameData = value;
  }

}
