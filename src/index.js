/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

import { availableQuestions, questions } from './questions/defaultQuestions.js';
import { setRandomQuestion, showProgress, quizDisplay } from './quizDisplay/quizDisplay.js';

const start = document.getElementById('linkToDefQ');
export const nextButton = document.getElementById('next-btn');
const quizArea = document.getElementById('quiz');

export function startQuiz(questionList) {
  document.getElementById('saying').classList.add('hide');
  document.getElementById('form').classList.add('hide');

  quizArea.classList.remove('hide');
  setRandomQuestion(questionList);
}

start.addEventListener('click', (event) => {
  event.preventDefault();
  startQuiz(availableQuestions);
  showProgress(questions);
});

start.addEventListener('keydown', (event) => {
  event.preventDefault();
  startQuiz(availableQuestions);
  showProgress(questions);
});

nextButton.addEventListener('click', () => {
  quizDisplay(availableQuestions, questions);
  showProgress(questions);
});
