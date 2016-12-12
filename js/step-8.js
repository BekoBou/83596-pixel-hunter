import {getScreen, questionType} from './game.js';
import nextScreen from './step-9.js';
import template from './templates/question-2.js';

const question = {
  'type': questionType.SINGLE,
  'options': [
    {
      'src': 'http://placehold.it/705x455',
      'alt': 'Option 1',
      'input': 'question1',
      'answer': 'photo'
    }
  ]
};

export default getScreen(question, template, nextScreen);
