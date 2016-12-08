import {getElementFromTemplate, renderTemplate} from './../templates.js';
import {status} from './../game.js';
import {header, getHeart, renderStats} from './common.js';
import game from './game-2.js';

const question = {
  'options': [
    {
      'src': 'http://placehold.it/468x458',
      'alt': 'Option 1',
      'input': 'question1',
      'answer': 'photo'
    },
    {
      'src': 'http://placehold.it/468x458',
      'alt': 'Option 2',
      'input': 'question2',
      'answer': 'paint'
    }
  ]
};

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

const node = `${ header }
<div class="game">
  <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
  <form class="game__content">
    ${ question.options.map(getOption).join('') }
  </form>
  ${ renderStats(stats) }
</div>`;

export default () => {
  let baseElement = getElementFromTemplate(node);

  // .game__answer -> #game-2
  let elements = baseElement.querySelectorAll('.game__answer');
  for (const item of elements) {
    item.addEventListener('click', () => {
      renderTemplate(game());
    });
  }

  return baseElement;
};
