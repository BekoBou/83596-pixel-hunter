import {getScreen, questionType} from './game.js';
import nextScreen from './step-4.js';
import template from './templates/question-3.js';

const question = {
  'type': questionType.TRIPLE,
  'options': [
    {
      'src': 'http://placehold.it/304x455',
      'alt': 'Option 1',
      'answer': 'photo'
    },
    {
      'src': 'http://placehold.it/304x455',
      'alt': 'Option 2',
      'answer': 'paint'
    },
    {
      'src': 'http://placehold.it/304x455',
      'alt': 'Option 3',
      'answer': 'paint'
    }
  ]
};

export default getScreen(question, template, nextScreen);
