import {getElementFromTemplate, renderTemplate} from './../templates.js';
import {initialGame} from './../game.js';
import game from './game-2.js';

const header = `<header class="header">
  <div class="header__back">
      <span class="back">
        <img src="img/arrow_left.svg" width="45" height="45" alt="Back">
        <img src="img/logo_small.png" width="101" height="44">
      </span>
  </div>
  <h1 class="game__timer">${ initialGame.timer }</h1>
  <div class="game__lives">
    <img src="img/heart__empty.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
    <img src="img/heart__full.svg" class="game__heart" alt="Life" width="32" height="32">
  </div>
</header>`;

const question = {
  'task': 'Угадайте для каждого изображения фото или рисунок?',
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

// @todo заменить на константы
const stats = ['stats__result--wrong',
  'stats__result--slow',
  'stats__result--fast',
  'stats__result--correct',
  'stats__result--unknown',
  'stats__result--unknown',
  'stats__result--unknown',
  'stats__result--unknown',
  'stats__result--unknown',
  'stats__result--unknown'
];

const node = `${ header }
<div class="game">
  <p class="game__task">${ question.task }</p>
  <form class="game__content">
    ${ question.options.map(getOption) }
  </form>
  <div class="stats">
    <ul class="stats">
      ${ stats.map((statsItem) => {
        return `<li class="stats__result ${ statsItem }"></li>`;
      }) }
    </ul>
  </div>
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
