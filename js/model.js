import {initialGame, hasQuestion, getQuestion, setCurrentQuestion, setLifes, setTimer} from './data/game-data';

class Model {
  constructor(state = initialGame) {
    this._state = state;
  }

  get state() {
    return this._state;
  }

  set lifes(value) {
    this._state = setLifes(this._state, value);
  }

  get lifes() {
    return this._state.lifes;
  }

  set answer(value) {
    this._state.answers.push(value);
  }

  get answers() {
    return this._state.answers;
  }

  wrongAnswer() {
    this._state = setLifes(this._state, this._state.lifes - 1);
  }

  tick() {
    this._state = setTimer(this._state, this._state.timer - 1);
  }

  resetTimer() {
    this._state = setTimer(this._state, 30);
  }

  set timer(value) {
    this._state = setTimer(this._state, value);
  }

  get timer() {
    return this._state.timer;
  }

  isDead() {
    return this._state.lifes <= 0;
  }

  hasNextQuestion() {
    return hasQuestion(this._state.questionNumber + 1);
  }

  nextQuestion() {
    this._state = setCurrentQuestion(this._state, this._state.questionNumber + 1);
  }

  getCurrentQuestion() {
    return getQuestion(this._state.questionNumber);
  }
}

export default new Model();
