const saveScore = document.getElementById('saveScore');
const userName = document.getElementById('userName');
const mostRecentScore = localStorage.getItem('mostRecentScore');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

userName.addEventListener('keyup', () => {
  saveScore.disabled = !userName.value;
});

saveScore.addEventListener('click', (e) => {
  e.preventDefault();

  const scoreInfo = {
    score: mostRecentScore,
    name: userName.value,
  };

  highScores.push(scoreInfo);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(3);

  localStorage.setItem('highScores', JSON.stringify(highScores));

  document.getElementById('scoreForm').style.display = 'none';

  highScores.map((score) => {
    const scoreDisplay = document.createElement('h4');
    scoreDisplay.innerHTML = `${score.name}: ${score.score}`;
    document.getElementById('topThreeScores').append(scoreDisplay);
  });
});
