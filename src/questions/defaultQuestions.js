import { Questions } from './questions.js';

const questions = [new Questions('What is 4 * 2?', ['4', '8', '12'], '8'),
  new Questions('What is 2 * 2?', ['4', '8', '6'], '4'),
  new Questions('How to translate "persimmon" into Russian?', ['персик', 'груша', 'хурма'], 'хурма'),
  new Questions('2 * 2 = 4?', ['yes', 'no'], 'yes'),
  new Questions('What is 7 * 2?', ['14', '8', '6'], '14'),
  new Questions('How do you create a function in JavaScript?', ['function: myFunction()', 'function = myFunction()', 'function myFunction()'], 'function myFunction()'),
];

let availableQuestions = [...questions];

export { questions, availableQuestions };
