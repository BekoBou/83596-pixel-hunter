import {status} from './../const';

export default (answers, questionsCount = 10) => {
  let result = '<ul class="stats">';

  let defaultStatus = new Map();
  defaultStatus.set(status.WRONG, 'wrong');
  defaultStatus.set(status.CORRECT, 'correct');
  defaultStatus.set(status.FAST, 'fast');
  defaultStatus.set(status.SLOW, 'slow');
  defaultStatus.set(status.UNKNOWN, 'unknown');

  for (let statsItem of answers) {
    result += `<li class="stats__result  stats__result--${ defaultStatus.get(statsItem) }"></li>`;
  }

  for (let i = 0; i < questionsCount - answers.length; i++) {
    result += '<li class="stats__result  stats__result--unknown"></li>';
  }

  result += '</ul>';
  return result;
};
