import { Questions } from './questions.js';

const userQuestions = {
  userQuestions: [],

  finder(question) {
    const item = this.userQuestions.find((questionElement) => questionElement.question === question);
    return item;
  },

  read() {
    return this.userQuestions;
  },

  add(question, answers, correctAnswer) {
    this.finder(question) === undefined
      ? this.userQuestions.push(new Questions(question, answers.split(','), correctAnswer))
      : alert('You have this question');
  },
  
};

export { userQuestions };
