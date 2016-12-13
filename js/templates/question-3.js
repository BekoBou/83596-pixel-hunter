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

const getOption = (option) => {
  return `<div class="game__option">
    <img src="${ option.src }" alt="${ option.alt }" width="304" height="455">
  </div>`;
};

export default (question) => {
  const node = `${ header }
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      ${ question.options.map(getOption).join('') }
    </form>
    <div class="stats">
      ${ renderStats(stats) }
    </div>
  </div>`;

  return getElementFromTemplate(node);
};
