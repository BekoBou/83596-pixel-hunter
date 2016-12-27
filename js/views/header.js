import AbstractView from './abstract';
import bindRestartHandler from './../restart';

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

  set onBack(callback) {
    this._onBack = callback;
  }

  getTimerAndLivesMarkup() {
    if (this._state) {
      return `<h1 class="game__timer">${ this._state.timer }</h1>
            <div class="game__lives">
              ${ getHeart(this._state.lifes) }
            </div>`;
    } else {
      return '';
    }
  }

  getMarkup() {
    return `<header class="header">
      ${ HeaderView.getBackButtonTemplate() }
      ${ this.getTimerAndLivesMarkup() }
    </header>`;
  }

  bindHandlers() {
    bindRestartHandler(this._element, this._onBack);
  }

  static getBackButtonTemplate() {
    return `<div class="header__back">
         <span class="back">
           <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
           <img src="img/logo_small.png" width="101" height="44">
         </span>
     </div>`;
  }
}
