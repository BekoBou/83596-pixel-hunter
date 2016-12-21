import AbstractView from './abstract';

const getHeart = (lifes) => {
  let result = '';
  for (let i = 0; i < 3 - lifes; i++) {
    result += '<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">';
  }
  for (let i = 0; i < lifes; i++) {
    result += '<img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">';
  }
  return result;
};

export default class HeaderView extends AbstractView {
  constructor(game) {
    super();
    this._state = game;
  }

  getMarkup() {
    return `<header class="header">
    <div class="header__back">
          <span class="back">
            <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
            <img src="img/logo_small.png" width="101" height="44">
          </span>
      </div>
      <h1 class="game__timer">${ this._state.timer }</h1>
      <div class="game__lives">
        ${ getHeart(this._state.lifes) }
      </div>
    </header>`;
  }
}
