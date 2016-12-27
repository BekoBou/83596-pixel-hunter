import polyfillPromise from 'core-js/es6/promise';
import polyfillObject from 'core-js/es6/object';
import polyfillSymbol from 'core-js/es6/symbol';

if (!window.Promise) {
  window.Promise = polyfillPromise;
}
if (!Object.assign) {
  window.Object = polyfillObject;
}
if (!window.Symbol) {
  window.Symbol = polyfillSymbol;
}

import 'whatwg-fetch';
import './array-from';

import introView from './screens/intro';
import errorView from './screens/error';
import greetingView from './screens/greeting';
import rulesView from './screens/rules';
import gameStart from './game';
import statsView from './screens/stats';
import migrate from './adapter';

const statusHTTP = (response) => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    throw new Error(`${response.status} ${response.statusText}`);
  }
};

const questionsUrl = 'https://intensive-ecmascript-server-nnpnvhhedl.now.sh/pixel-hunter/questions';

const prefixStatsUrl = 'https://intensive-ecmascript-server-dxttmcdylw.now.sh/pixel-hunter/stats/';

const mainContainer = document.getElementById('main');
const renderTemplate = (element, container = mainContainer) => {
  container.innerHTML = '';
  container.appendChild(element);
};

let gameData;

export default class Application {
  static showIntro() {
    renderTemplate(introView());

    window.fetch(questionsUrl)
        .then(statusHTTP)
        .then((response) => response.json())
        .then((data) => {
          Application.data = migrate(data);
        })
        .then(Application.showGreeting)
        .catch(Application.showError);
  }

  static showError(error) {
    renderTemplate(errorView(error));
  }

  static showGreeting() {
    renderTemplate(greetingView());
  }

  static showRules() {
    renderTemplate(rulesView());
  }

  static showGame(username) {
    renderTemplate(gameStart(gameData, username));
  }

  static saveGame(model, username) {
    const url = prefixStatsUrl + username;

    window.fetch(url, {
      'method': 'POST',
      'body': JSON.stringify({
        'stats': model.state.answers,
        'lives': model.state.lifes
      }),
      'headers': {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }})
        .then(statusHTTP)
        .then(() => {
          Application.loadStats(username);
        })
        .catch(Application.showError);
  }

  static loadStats(username) {
    const url = prefixStatsUrl + username;

    window.fetch(url)
        .then(statusHTTP)
        .then((response) => response.json())
        .then((data) => {
          Application.showStats(data);
        })
        .catch(Application.showError);
  }

  static showStats(stats) {
    renderTemplate(statsView(stats));
  }

  static set data(value) {
    gameData = value;
  }

}
