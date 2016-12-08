import {getElementFromTemplate, renderTemplate} from './../templates.js';
import {status} from './../game.js';
import {header, getHeart, renderStats} from './common.js';
import statistics from './stats.js';

const question = {
  'options': [
    {
      'selected': '',
      'src': 'http://placehold.it/304x455',
      'alt': 'Option 1',
      'input': 'question1',
      'answer': true
    },
    {
      'selected': '  game__option--selected',
      'src': 'http://placehold.it/468x458',
      'alt': 'Option 2',
      'answer': false
    },
    {
      'selected': '',
      'src': 'http://placehold.it/468x458',
      'alt': 'Option 2',
      'input': 'question2',
      'answer': false
    }
  ]
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


const getOption = (option) => {
  return `<div class="game__option${ option.selected }">
    <img src="${ option.src }" alt="${ option.alt }" width="304" height="455">
  </div>`;
};

const node = `${ header }
<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    ${ question.options.map(getOption).join('') }
  </form>
  ${ renderStats(stats) }
</div>`;

export default () => {
  let baseElement = getElementFromTemplate(node);

  // .game__option -> #stats
  let elements = baseElement.querySelectorAll('.game__option');
  for (const item of elements) {
    item.addEventListener('click', () => {
      renderTemplate(statistics());
    });
  }

  return baseElement;
};
