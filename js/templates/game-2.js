import {getElementFromTemplate, renderTemplate} from './../templates.js';
import {status} from './../game.js';
import {header, renderStats} from './common.js';
import game from './game-3.js';

const option = {
  'src': 'http://placehold.it/705x455',
  'alt': 'Option 1',
  'input': 'question1',
  'answer': 'photo'
};

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

const node = `${ header }
<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${ option.src }" alt="${ option.alt }" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="${ option.input }" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="${ option.input }" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  ${ renderStats(stats) }
</div>`;

export default () => {
  let baseElement = getElementFromTemplate(node);

  // .game__answer -> #game-3
  let elements = baseElement.querySelectorAll('.game__answer');
  for (const item of elements) {
    item.addEventListener('click', () => {
      renderTemplate(game());
    });
  }

  return baseElement;
};
