function Questions(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

const userQuestions = [];

function getQuestions() {
  const form = document.forms.questionForm;
  const question = form.elements.question.value;
  const answers = form.elements.answers.value;
  const correctAnswer = form.elements.correctAnswer.value;

  question && answers && correctAnswer !== null ? userQuestions.push(new Questions(question, answers.split(','), correctAnswer)) : alert("Properties shouldn't be empty!");
  return userQuestions;
}

const addUserQuestions = document.getElementById('submit');
addUserQuestions.addEventListener('click', (event) => {
  // append form to create user quiz
  event.preventDefault();
  console.log(getQuestions());
});

const createUserQuiz = document.getElementById('createUserQuiz');
