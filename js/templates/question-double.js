const getOption = (option, index) => {
  return `<div class="game__option">
  <img src="${ option.src }" alt="${ option.alt }" width="468" height="458">
  <label class="game__answer game__answer--photo">
    <input name="question${ index + 1 }" type="radio" value="photo">
    <span>Фото</span>
  </label>
  <label class="game__answer game__answer--paint">
    <input name="question${ index + 1 }" type="radio" value="paint">
    <span>Рисунок</span>
  </label>
</div>`;
};

export default (question) => {
  const node = `
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      ${ question.options.map(getOption).join('') }
    </form>
    `;

  return node;
};
