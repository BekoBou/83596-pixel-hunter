import {getScreen, questionType} from './game.js';
import nextScreen from './templates/stats.js';
import template from './templates/question-1.js';

const question = {
  'type': questionType.DOUBLE,
  'options': [
    {
      'src': 'http://placehold.it/468x458',
      'alt': 'Option 1',
      'input': 'question1',
      'answer': 'photo'
    },
    {
      'src': 'http://placehold.it/468x458',
      'alt': 'Option 2',
      'input': 'question2',
      'answer': 'paint'
    }
  ]
};

export default getScreen(question, template, nextScreen);
