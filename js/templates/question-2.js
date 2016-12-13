import {getElementFromTemplate} from './../templates.js';
import {status} from './../game.js';
import {header, renderStats} from './common.js';

const stats = [status.WRONG,
  status.SLOW,
  status.FAST,
  status.CORRECT,
  status.WRONG,
  status.UNKNOWN,
  status.SLOW,
  status.UNKNOWN,
  status.FAST,
  status.UNKNOWN
];

export default (question) => {
  const option = question.options.shift();

  const node = `${ header }
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="${ option.src }" alt="${ option.alt }" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
    <div class="stats">
      ${ renderStats(stats) }
    </div>
  </div>`;

  return getElementFromTemplate(node);
};
