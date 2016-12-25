import {questionType} from './const';

const questionTypeFromJson = {
  TWO_OF_TWO: 'two-of-two',
  TINDER_LIKE: 'tinder-like',
  ONE_OF_THREE: 'one-of-three'
};

let migrateType = new Map();
migrateType.set(questionTypeFromJson.TINDER_LIKE, questionType.SINGLE);
migrateType.set(questionTypeFromJson.TWO_OF_TWO, questionType.DOUBLE);
migrateType.set(questionTypeFromJson.ONE_OF_THREE, questionType.TRIPLE);

const migrate = (fromJson) => {
  return fromJson.map((question) => {
    return {
      'type': migrateType.get(question.type),
      'options': question.answers.map((answer, index) => {
        return {
          'answer': (answer.type === 'photo' ? 'photo' : 'paint'),
          'src': answer.image.url,
          'width': answer.image.width,
          'height': answer.image.height,
          'alt': 'Option ' + index.toString(),
        };
      }),
    };
  });
};

export default migrate;
