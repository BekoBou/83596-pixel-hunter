import {questionType} from './../const.js';
import AbstractView from './abstract';
import getStars from './../templates/stars';
import imageLoader from './../image-loader/image-loader';

import questionSingleQuestionTemplate from './../templates/question-single';
import questionDoubleQuestionTemplate from './../templates/question-double';
import questionTripleQuestionTemplate from './../templates/question-triple';

const questionTemplate = (question) => {
  switch (question.type) {
    case questionType.SINGLE: {
      return questionSingleQuestionTemplate(question);
    }
    case questionType.DOUBLE: {
      return questionDoubleQuestionTemplate(question);
    }
    case questionType.TRIPLE: {
      return questionTripleQuestionTemplate(question);
    }
    default: {
      throw new RangeError('Передан вопрос с неизвестным типом');
    }
  }
};

export default class QuestionsView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
    this._question = this._state.questions[this._state.questionNumber];
  }

  set onAnswer(handler) {
    this._onAnswer = handler;
  }

  getMarkup() {
    return `<div class="game">
      ${ questionTemplate(this._question) }
      <div class="stats">
        ${ getStars(this._state.answers) }
      </div>
    </div>`;
  }

  bindHandlers() {
    let elements = null; // let scope; I don't want use var and ternary operator.
    if (this._question.type === questionType.TRIPLE) {
      elements = this.element.querySelectorAll('.game__option');
    } else {
      elements = this.element.querySelectorAll('.game__answer');
    }

    const userChoice = (event) => {
      switch (this._question.type) {
        case questionType.SINGLE: {
          const answerElement = document.querySelector('input[name^=question]:checked');
          if (answerElement) {
            this._onAnswer(this._question.options[0].answer === answerElement.value);
          }
        } break;
        case questionType.DOUBLE: {
          const answerElements = document.querySelectorAll('input[name^=question]:checked');
          if (answerElements.length === 2) {
            const isRight = Array.from(answerElements).reduce((result, element, index) => {
              if ( !result) {
                return (element.value === this._question.options[index].answer);
              }

              return result && (element.value === this._question.options[index].answer);
            });
            this._onAnswer(isRight);
          }
        } break;
        case questionType.TRIPLE: {
          const target = event.target;
          const answerElements = document.querySelectorAll('.game__option');

          // hack because polifill findIndex in IE11 doesn't work
          let answerIndex = -1;
          for (let i = 0; i < answerElements.length; i++) {
            if (answerElements[i] === target) {
              answerIndex = i;
              break;
            }
          }

          this._onAnswer(this._question.options[answerIndex].answer === 'paint');
        } break;
      }
    };

    for (const item of elements) {
      item.addEventListener('click', userChoice);
    }

    const images = this.element.querySelectorAll('.game__content img');
    Array.prototype.slice.call(images).map((elementToReplace, index) => {
      imageLoader(elementToReplace).load({
        url: this._question.options[index].src,
        width: this._question.options[index].width,
        height: this._question.options[index].height,
      });
    });
  }
}
