import {status} from './../const.js';

export const getHeart = (lifes) => {
  let result = '';
  for (let i = 0; i < 3 - lifes; i++) {
    result += '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
  }
  for (let i = 0; i < lifes; i++) {
    result += '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
  }
  return result;
};

const header = document.createElement('header');
header.classList.add('header');

export const getHeader = (game) => {
  header.innerHTML = `<div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
    </div>
    <h1 class="game__timer">${ game.timer }</h1>
    <div class="game__lives">
      ${ getHeart(game.lifes) }
    </div>`;

  return header;
};

export const renderHeader = (game) => {
  return getHeader(game);
};

export const renderStats = (stats, questionCount = 10) => {
  let result = '<ul class="stats">';

  let defaultStatus = new Map();
  defaultStatus.set(status.WRONG, 'wrong');
  defaultStatus.set(status.CORRECT, 'correct');
  defaultStatus.set(status.FAST, 'fast');
  defaultStatus.set(status.SLOW, 'slow');
  defaultStatus.set(status.UNKNOWN, 'unknown');

  for (let statsItem of stats) {
    result += `<li class="stats__result  stats__result--${ defaultStatus.get(statsItem) }"></li>`;
  }

  for (let i = 0; i < questionCount - stats.length; i++) {
    result += '<li class="stats__result  stats__result--unknown"></li>';
  }

  result += '</ul>';

  return result;
};
