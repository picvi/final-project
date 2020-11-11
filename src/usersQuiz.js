import { userQuestions } from './questions/usersQuestions.js';
import { startQuiz, nextButton } from './index.js';
import { quizDisplay, showProgress } from './quizDisplay/quizDisplay.js';

const userNextBtn = document.getElementById('nextUser-btn');
let availableUsersQuestions;

const addUserQuestions = document.getElementById('addQuestion');
addUserQuestions.addEventListener('click', (e) => {
  e.preventDefault();
  const form = document.forms.questionForm;
  const question = form.elements.question.value;
  const answers = form.elements.answers.value.toLowerCase();
  const correctAnswer = form.elements.correctAnswer.value.toLowerCase();

  userQuestions.add(question, answers, correctAnswer);
  availableUsersQuestions = [...userQuestions.read()];
});

const createUserQuiz = document.getElementById('createQuiz');
createUserQuiz.addEventListener('click', (e) => {
  e.preventDefault();
  nextButton.classList.add('hide');
  userNextBtn.classList.remove('hide');
  startQuiz(availableUsersQuestions);
  showProgress(userQuestions.read());
});

userNextBtn.addEventListener('click', () => {
  quizDisplay(availableUsersQuestions, userQuestions.read());
  showProgress(userQuestions.read());
});
