/* eslint-disable no-unused-expressions */
/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const answersElements = document.getElementById('answers');
const questionArea = document.getElementById('question');
const scoreText = document.getElementById('hud-item');

let score = 0;
let currentQuestionIndex = 0;
let acceptingClicks = false;

function setRandomQuestion(questionsList) {
  const questionIndex = Math.floor(Math.random() * questionsList.length);
  const currentQuestion = questionsList[questionIndex];
  currentQuestionIndex++;

  showQuestion(currentQuestion);
  showAnswers(currentQuestion);

  // delete chosen question
  questionsList.splice(questionIndex, 1);
  acceptingClicks = true;
}

function showProgress(constantQuestionList) {
  document.getElementById('progress').innerHTML = `Question ${currentQuestionIndex} of ${constantQuestionList.length}`;
}

function showQuestion(currentQuestion) {
  questionArea.innerText = currentQuestion.question;
}

function showAnswers(currentQuestion) {
  currentQuestion.answers.forEach((element) => {
    const ans = document.createElement('div');
    ans.innerHTML = element;
    ans.className = 'btn';
    answersElements.appendChild(ans);

    // check if the answer is correct
    ans.addEventListener('click', (e) => {
      // disable repeated clicks
      if (!acceptingClicks) return;

      acceptingClicks = false;
      const selectedChoice = e.target;
      const selectedAnswer = selectedChoice.innerText;

      if (selectedAnswer === currentQuestion.correctAnswer) {
        ans.classList.add('btn-correct');
        score += 10;
      } else {
        ans.classList.add('btn-wrong');
        score;
      }
      scoreText.innerHTML = `Score ${score}`;
      localStorage.setItem('mostRecentScore', score);
    });
  });
}

function quizDisplay(listOfQuestions, constantQuestions) {
  if (currentQuestionIndex === constantQuestions.length) {
    // show results
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('scoreForm').classList.remove('hide');
    document.getElementById('score').innerText = score;
  } else {
    while (answersElements.firstChild) {
      answersElements.removeChild(answersElements.firstChild);
    }
    setRandomQuestion(listOfQuestions);
  }
}

export {
  setRandomQuestion, quizDisplay, showProgress, score,
};
