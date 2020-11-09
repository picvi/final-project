import { Questions } from './questions.js';

const questions = [new Questions('What is 4 * 2?', ['4', '8', '12'], '8'),
  new Questions('What is 2 * 2?', ['4', '8', '6'], '4'),
  new Questions('What is 6 * 2?', ['6', '12'], '12'),
  new Questions('2 * 2 = 4?', ['yes', 'no'], 'yes'),
  new Questions('What is 7 * 2?', ['14', '8', '6'], '14')];

const availableQuestions = [...questions];

export { questions, availableQuestions };
