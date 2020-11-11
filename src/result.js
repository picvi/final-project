const saveScore = document.getElementById('saveScore');
const userName = document.getElementById('userName');
const goHome = document.getElementById('goHome');
const scoreForm = document.getElementById('scoreForm');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

saveScore.addEventListener('click', (e) => {
  e.preventDefault();
  scoreForm.style.display = 'none';
  const mostRecentScore = localStorage.getItem('mostRecentScore');
  const scoreInfo = {
    score: mostRecentScore,
    name: userName.value,
  };

  highScores.push(scoreInfo);
  highScores.sort((a, b) => (a.score > b.score ? 1 : -1));
  highScores.splice(5);

  localStorage.setItem('highScores', JSON.stringify(highScores));

  highScores.map((userScore) => {
    const scoreDisplay = document.createElement('h4');
    scoreDisplay.innerHTML = `${userScore.name}: ${userScore.score}`;
    document.getElementById('topThreeScores').append(scoreDisplay);
  });
});

goHome.addEventListener('click', (e) => {
  e.preventDefault();
  scoreForm.style.display = 'none';
  document.getElementById('saying').classList.toggle('hide');
  document.getElementById('form').classList.toggle('hide');
});
