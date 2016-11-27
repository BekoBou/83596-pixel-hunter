import {getElementFromTemplate, renderTemplate} from './../templates.js';
import greeting from './greeting.js';

const node = `<div id="intro" class="intro">
  <h1 class="intro__asterisk">*</h1>
  <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
    Sparnaay.</p>
</div>`;

export default () => {
  let baseElement = getElementFromTemplate(node);

  // .intro__asterisk -> #greeting
  let element = baseElement.querySelector('.intro__asterisk');
  element.addEventListener('click', () => {
    renderTemplate(greeting());
  });

  return baseElement;
};
