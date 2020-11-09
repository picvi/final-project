/* eslint-disable no-nested-ternary */
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
    const reg = /\s*,\s*/;
    const answersArray = answers.split(reg);
    const correctAns = answersArray.find((answer) => answer === correctAnswer);

    if (answersArray.length < 2) {
      alert('should be more than 1 answer');
    } else if (correctAns === undefined) {
      alert('There is no correct answer');
    } else if (this.finder(question) !== undefined) {
      alert('You have this question');
    } else {
      this.userQuestions.push(new Questions(question, answersArray, correctAnswer));
    }
  },
};

export { userQuestions };
