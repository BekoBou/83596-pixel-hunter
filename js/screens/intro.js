import AbstractView from './../views/abstract';
import Application from './../application';

class IntroView extends AbstractView {

  getMarkup() {
    return `<div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf
        Sparnaay.</p>
    </div>`;
  }

  bindHandlers() {
    this.element.querySelector('.intro__asterisk').addEventListener('click', (event) => {
      event.preventDefault();

      Application.showGreating();
    });
  }
}

export default () => new IntroView().element;
