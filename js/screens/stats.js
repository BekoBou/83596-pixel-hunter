import AbstractView from './../views/abstract';
import getStars from './../templates/stars';
import {status} from './../const';
import bindRestartHandler from './../restart';

const renderResultTable = (stats, lifes, tableNumber) => {
  const wrongAnswer = stats.filter((item) => item === status.WRONG).length;

  if (wrongAnswer >= 3) {
    let table = `<h1>Поражение!</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">${ tableNumber }.</td>
        <td>
          ${ getStars(stats) }
        </td>
        <td class="result__total"></td>
        <td class="result__total  result__total--final">fail</td>
      </tr>
    </table>`;

    return table;
  }

  const rightAnswer = stats.filter((item) => (item !== status.WRONG && item !== status.UNKNOWN)).length;
  const fastAnswer = stats.filter((item) => (item === status.FAST)).length;
  const slowAnswer = stats.filter((item) => (item === status.SLOW)).length;
  const totalResult = rightAnswer * 100 + fastAnswer * 50 + lifes * 50 - slowAnswer * 50;

  let table = `<h1>Победа!</h1>
  <table class="result__table">
    <tr>
      <td class="result__number">${ tableNumber }.</td>
      <td colspan="2">
        ${ getStars(stats) }
      </td>
      <td class="result__points">×&nbsp;100</td>
      <td class="result__total">${ rightAnswer * 100 }</td>
    </tr>`;

  if (fastAnswer > 0) {
    table += `<tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">${ fastAnswer }&nbsp;<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${ fastAnswer * 50 }</td>
    </tr>`;
  }

  if (lifes > 0) {
    table += `<tr>
      <td></td>
      <td class="result__extra">Бонус за жизни:</td>
      <td class="result__extra">${ lifes }&nbsp;<span class="stats__result stats__result--heart"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${ lifes * 50 }</td>
    </tr>`;
  }

  if (slowAnswer > 0) {
    table += `<tr>
      <td></td>
      <td class="result__extra">Штраф за медлительность:</td>
      <td class="result__extra">${ slowAnswer }&nbsp;<span class="stats__result stats__result--slow"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">-${ slowAnswer * 50 }</td>
    </tr>`;
  }

  table += `
    <tr>
      <td colspan="5" class="result__total  result__total--final">${ totalResult }</td>
    </tr>
  </table>`;

  return table;
};

class StatsView extends AbstractView {
  constructor(stats) {
    super();
    this._stats = stats;
  }

  getMarkup() {
    return `<header class="header">
      <div class="header__back">
        <span class="back">
          <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
          <img src="img/logo_small.png" width="101" height="44">
        </span>
      </div>
    </header>
    <div class="result">
      ${ this._stats.map((item, index) => {
        return renderResultTable(item.stats, item.lives, index + 1);
      }).join('') }
    </div>`;
  }

  bindHandlers() {
    bindRestartHandler(this._element);
  }
}

export default (game = null) => new StatsView(game).element;
