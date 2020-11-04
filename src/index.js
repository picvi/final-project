/* eslint-disable no-unused-expressions */
/* eslint-disable import/prefer-default-export */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const start = document.getElementById('linkToDefQ');
const nextButton = document.getElementById('next-btn');

const quizArea = document.getElementById('quiz');
const questionArea = document.getElementById('question');

const answersElements = document.getElementById('answers');
let score = 0;
let currentQuestionIndex = 0;

function Questions(question, answers, correctAnswer) {
  this.question = question;
  this.answers = answers;
  this.correctAnswer = correctAnswer;
}

const questions = [new Questions('What is 4 * 2?', ['4', '8', '12'], '8'),
  new Questions('What is 2 * 2?', ['4', '8', '6'], '4'),
  new Questions('What is 6 * 2?', ['6', '12'], '12'),
  new Questions('2 * 2 = 4?', ['yes', 'no'], 'yes'),
  new Questions('What is 7 * 2?', ['14', '8', '6'], '14')];

const availableQuestions = [...questions];

function startGame() {
  document.getElementById('saying').classList.add('hide');
  document.getElementById('form').classList.add('hide');

  quizArea.classList.remove('hide');
  setRandomQuestion();
}

start.addEventListener('click', startGame);

nextButton.addEventListener('click', () => {
  if (currentQuestionIndex === questions.length) {
    // show results
    document.getElementById('quiz').style.display = 'none';
    const resultDisplay = document.createElement('blockquote');
    resultDisplay.innerText = `Your result is ${score}`;
    resultDisplay.id = 'saying';
    document.body.append(resultDisplay);
  } else {
    while (answersElements.firstChild) {
      answersElements.removeChild(answersElements.firstChild);
    }
    setRandomQuestion();
  }
});

function setRandomQuestion() {
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  const currentQuestion = availableQuestions[questionIndex];
  currentQuestionIndex++;

  showQuestion(currentQuestion);
  showAnswers(currentQuestion);
  showProgress();

  // delete chosen question
  availableQuestions.splice(questionIndex, 1);
}

function showProgress() {
  document.getElementById('progress').innerHTML = `Question ${currentQuestionIndex} of ${questions.length}`;
}

function showQuestion(index) {
  questionArea.innerText = index.question;
}

function showAnswers(index) {
  index.answers.forEach((element) => {
    const ans = document.createElement('div');
    ans.innerHTML = element;
    ans.className = 'btn';
    answersElements.appendChild(ans);

    // check if the answer is correct
    ans.addEventListener('click', (e) => {
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.innerText;

      if (selectedAnswer === index.correctAnswer) {
        ans.classList.add('btn-correct');
        score += 1;
      } else {
        ans.classList.add('btn-wrong');
        score;
      }
      ans.style.pointerEvents = 'none';
    });
  });
}
