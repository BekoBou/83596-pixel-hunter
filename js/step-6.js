import {getScreen, questionType} from './game.js';
import nextScreen from './step-7.js';
import template from './templates/question-3.js';

const question = {
  'type': questionType.TRIPLE,
  'options': [
    {
      'selected': '',
      'src': 'http://placehold.it/304x455',
      'alt': 'Option 1',
      'answer': true
    },
    {
      'selected': '  game__option--selected',
      'src': 'http://placehold.it/304x455',
      'alt': 'Option 2',
      'answer': false
    },
    {
      'selected': '',
      'src': 'http://placehold.it/304x455',
      'alt': 'Option 2',
      'answer': false
    }
  ]
};

export default getScreen(question, template, nextScreen);
