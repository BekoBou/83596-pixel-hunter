import {initialGame} from './../game.js';

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

export const header = `<header class="header">
  <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
  </div>
  <h1 class="game__timer">${ initialGame.timer }</h1>
  <div class="game__lives">
    ${ getHeart(initialGame.lifes) }
  </div>
</header>`;

export const renderStats = (stats, questionCount = 10) => {
  let result = '<ul class="stats">';

  for (let statsItem of stats) {
    result += `<li class="stats__result  stats__result--${ statsItem }"></li>`;
  }

  for (let i = 0; i < questionCount - stats.length; i++) {
    result += '<li class="stats__result  stats__result--unknown"></li>';
  }

  result += '</ul>';

  return result;
};
