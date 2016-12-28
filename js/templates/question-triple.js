const getOption = (option) => {
  return `<div class="game__option game__option--no-pointer-events">
    <img src="${ option.src }" alt="${ option.alt }" width="304" height="455">
  </div>`;
};

export default (question) => {
  const node = `<p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      ${ question.options.map(getOption).join('') }
    </form>
    <style>
      .game__option--no-pointer-events img {
        pointer-events: none;
      }
    </style>
    `;

  return node;
};
