import AbstractView from './../views/abstract';

class ErrorView extends AbstractView {

  constructor(error) {
    super();
    this.error = error;
  }

  getMarkup() {
    return `<div class="error">
      <p>Произошла нeдопустимая ошибка: ${this.error.message}</p>
    </div>`;
  }
}

export default (error) => new ErrorView(error).element;
