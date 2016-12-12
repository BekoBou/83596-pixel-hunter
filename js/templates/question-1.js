import {getElementFromTemplate} from './../templates.js';
import {status} from './../game.js';
import {header, renderStats} from './common.js';

const getOption = (option) => {
  return `<div class="game__option">
  <img src="${ option.src }" alt="${ option.alt }" width="468" height="458">
  <label class="game__answer game__answer--photo">
    <input name="${ option.input }" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer game__answer--paint">
    <input name="${ option.input }" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
</div>`;
};

const stats = [status.WRONG,
  status.SLOW,
  status.FAST,
  status.CORRECT
];

export default (question) => {

  const node = `${ header }
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      ${ question.options.map(getOption).join('') }
    </form>
    <div class="stats">
      ${ renderStats(stats) }
    </div>
  </div>`;

  return getElementFromTemplate(node);
};
