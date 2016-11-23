import intro from './templates/intro.js';
import greeting from './templates/greeting.js';
import rules from './templates/rules.js';
import game1 from './templates/game-1.js';
import game2 from './templates/game-2.js';
import game3 from './templates/game-3.js';
import stats from './templates/stats.js';

(() => {
  // Rules
  let rulesElement = rules;
  let rulesSubmit = rulesElement.querySelector('.rules__button');
  let rulesInput = rulesElement.querySelector('.rules__input');

  rulesInput.oninput = () => {
    if (rulesInput.value) {
      rulesSubmit.removeAttribute('disabled');
    } else {
      rulesSubmit.setAttribute('disabled', '');
    }
  };

  // Slides changer
  let mainElement = document.getElementById('main');

  let switcher = document.createElement('div');
  switcher.innerHTML = `
    <span class="prev"><img src="img/arrow_left.svg" alt="Left" width="50" height="50"></span>
    <span class="next"><img src="img/arrow_right.svg" alt="Right" width="50" height="50"></span>`;
  switcher.style.cssText = 'text-align: center';
  mainElement.after(switcher);

  let slides = [
    intro,
    greeting,
    rulesElement,
    game1,
    game2,
    game3,
    stats
  ];
  let current = -1;

  let select = (index) => {
    current = index;
    mainElement.innerHTML = '';
    mainElement.appendChild(slides[index]);
  };

  document.querySelector('.next').onclick = (e) => {
    e.preventDefault();

    select(current + 1);
  };

  document.querySelector('.prev').onclick = (e) => {
    e.preventDefault();

    select(current - 1);
  };

  select(0);
})();
