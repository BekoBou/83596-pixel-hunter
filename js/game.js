import {renderTemplate, getElementFromTemplate} from './templates.js';
import {status, questionType} from './const.js';
import questionTemplate from './templates/questions.js';
import questions from './data/questions.js';
import {getHeader, renderStats} from './templates/common.js';
import stats from './templates/stats.js';

import {initialGame, setCurrentQuestion, getQuestion, setLifes, setTimer, hasQuestion} from './data/game-data.js';

let currentGame = Object.assign({}, initialGame);
let timer = null;

const renewTimer = (game) => {
  timer = setInterval(() => {
    game = setTimer(game, game.timer - 1);
    if (game.timer === 0) {
      clearInterval(timer);
      // save answers -> just test (need pure function)
      game.answers.push(status.WRONG);

      if (game.lifes > 0) {
        game = setLifes(game, game.lifes - 1);
        tryNext(game);
      } else {
        stats(game);
      }
    }
    let timerElement = document.querySelector('.game__timer');
    timerElement.innerHTML = game.timer;
  }, 1000);
};

const tryNext = (game) => {
  // render next question
  if (hasQuestion(questions, game.questionNumber + 1)) {
    game = setCurrentQuestion(game, game.questionNumber + 1);
    game = setTimer(game, 30);
    const questionData = getQuestion(questions, game.questionNumber);
    renderTemplate(buildTemplate(game, questionData));
  } else {
    stats(game);
  }
};

const buildTemplate = (game, question) => {
  const node = `${ getHeader(game) }
  <div class="game">
    ${ questionTemplate(question) }
    <div class="stats">
      ${ renderStats(game.answers) }
    </div>
  </div>
  `;

  let baseElement = getElementFromTemplate(node);
  let elements = null; // let scope; I don't want use var and ternary operator.

  if (question.type === questionType.TRIPLE) {
    elements = baseElement.querySelectorAll('.game__option');
  } else {
    elements = baseElement.querySelectorAll('.game__answer');
  }

  for (const item of elements) {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      clearInterval(timer);

      // save answers -> just test (need pure function)
      game.answers.push(status.CORRECT);

      tryNext(game);
    });
  }
  renewTimer(game);
  return baseElement;
};

export const startGame = () => {
  const questionData = getQuestion(questions, currentGame.questionNumber);
  return buildTemplate(currentGame, questionData);
};
