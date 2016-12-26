import Application from './application';

export default (element = document.querySelector('.header__back'), timer) => {
  const backButton = element.querySelector('.back');

  backButton.addEventListener('click', (event) => {
    event.preventDefault();

    if (timer) {
      clearInterval(timer);
    }

    Application.showIntro();
  });
};
