import {renderTemplate} from './templates.js';

export const initialGame = {
  lifes: 2,
  questions: [],
  timer: 0
};

// prefix status modificator stats__result--
export const status = {
  WRONG: 'wrong',
  SLOW: 'slow',
  CORRECT: 'correct',
  FAST: 'fast',
  UNKNOWN: 'unknown',
};

export const questionType = {
  SINGLE: 1,
  DOUBLE: 2,
  TRIPLE: 3
};

export const getScreen = (data, template, nextScreen) => {
  let baseElement = template(data);

  let elements = null; // let scope; I don't want use var and ternary operator.
  if (data.type === questionType.TRIPLE) {
    elements = baseElement.querySelectorAll('.game__option');
  } else {
    elements = baseElement.querySelectorAll('.game__answer');
  }

  for (const item of elements) {
    item.addEventListener('click', () => {
      renderTemplate(nextScreen);
    });
  }
  return baseElement;
};
