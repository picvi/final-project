/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-alert */
import { Questions } from './questions.js';
import { startQuiz, nextButton } from './index.js';
import { quizDisplay, showProgress } from './quizDisplay.js';

const userQuestions = [];
const userNextBtn = document.getElementById('nextUser-btn');

function getQuestions() {
  const form = document.forms.questionForm;
  const question = form.elements.question.value;
  const answers = form.elements.answers.value;
  const correctAnswer = form.elements.correctAnswer.value;

  question && answers && correctAnswer !== null ? userQuestions.push(new Questions(question, answers.split(','), correctAnswer)) : alert("Properties shouldn't be empty!");
}

const addUserQuestions = document.getElementById('addQuestion');
addUserQuestions.addEventListener('click', (e) => {
  // append form to create user quiz
  e.preventDefault();
  getQuestions();
});

const availableUsersQuestions = [];
availableUsersQuestions.push(...userQuestions);

const createUserQuiz = document.getElementById('createQuiz');
createUserQuiz.addEventListener('click', (e) => {
  e.preventDefault();
  nextButton.classList.add('hide');
  userNextBtn.classList.remove('hide');
  console.log(userQuestions);
  console.log(availableUsersQuestions);
  startQuiz(userQuestions);
  showProgress(userQuestions);
});

userNextBtn.addEventListener('click', () => {
  quizDisplay(availableUsersQuestions, userQuestions);
  showProgress(userQuestions);
});
