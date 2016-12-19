import {questionType} from './../const.js';
import questionSingleQuestionTemplate from './question-single.js';
import questionDoubleQuestionTemplate from './question-double.js';
import questionTripleQuestionTemplate from './question-triple.js';

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

export default questionTemplate;
