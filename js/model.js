import {initialGame, hasQuestion, setCurrentQuestion, setLifes, setTimer} from './data/game-data';
import {status} from './const';

export default class Model {
  constructor(data, state = initialGame) {
    this._state = state;
    this._state.questions = data;
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

  set timer(value) {
    this._state = setTimer(this._state, value);
  }

  get timer() {
    return this._state.timer;
  }

  takeLife() {
    this._state = setLifes(this._state, this._state.lifes - 1);
  }

  tick() {
    this._state = setTimer(this._state, this._state.timer - 1);
  }

  resetTimer() {
    this._state = setTimer(this._state, 30);
  }

  isDead() {
    return this._state.lifes <= 0;
  }

  hasNextQuestion() {
    return hasQuestion(this._state.questions, this._state.questionNumber + 1);
  }

  nextQuestion() {
    this._state = setCurrentQuestion(this._state, this._state.questionNumber + 1);
  }

  addCorrectAnswer(timer) {
    if (timer >= 20) {
      this._state.answers.push(status.FAST);
    } else if (timer < 10) {
      this._state.answers.push(status.SLOW);
    } else {
      this._state.answers.push(status.CORRECT);
    }
  }

  addWrongAnswer() {
    this._state.answers.push(status.WRONG);
  }
}
