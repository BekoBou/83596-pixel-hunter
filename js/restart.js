import Application from './application';

export default (element = document.querySelector('.header__back'), callback) => {
  const backButton = element.querySelector('.back');

  backButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (callback) {
      callback();
    }

    Application.showIntro();
  });
};
