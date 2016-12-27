export const getInitialGame = () => {
  return {
    questionNumber: 0,
    lifes: 3,
    answers: [],
    timer: 30,
  };
};

export const setCurrentQuestion = (game, question) => {
  return Object.assign({}, game, {
    questionNumber: question
  });
};

export const hasQuestion = (questions, questionNumber) => {
  return questions.length > questionNumber;
};

export const setLifes = (game, lifes) => {
  if (lifes < 0 || lifes > 3) {
    throw new RangeError('Передано неправильное количество жизней');
  }

  return Object.assign({}, game, {
    lifes: lifes
  });
};

export const setTimer = (game, time) => {
  if (time < 0 || time > 30) {
    throw new RangeError('Передано неправильное значение таймера');
  }

  return Object.assign({}, game, {
    timer: time
  });
};
