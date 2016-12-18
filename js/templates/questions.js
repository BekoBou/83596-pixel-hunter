import {questionType} from './../const.js';
import questionTemplateType1 from './question-1.js';
import questionTemplateType2 from './question-2.js';
import questionTemplateType3 from './question-3.js';

const questionTemplate = (question) => {
  switch (question.type) {
    case questionType.SINGLE: {
      return questionTemplateType2(question);
    }
    case questionType.DOUBLE: {
      return questionTemplateType1(question);
    }
    case questionType.TRIPLE: {
      return questionTemplateType3(question);
    }
    default: {
      throw new RangeError('Передан вопрос с неизвестным типом');
    }
  }
};

export default questionTemplate;
