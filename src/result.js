const saveScore = document.getElementById('saveScore');
const userName = document.getElementById('userName');

const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

saveScore.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('scoreForm').style.display = 'none';
  const mostRecentScore = localStorage.getItem('mostRecentScore');
  const scoreInfo = {
    score: mostRecentScore,
    name: userName.value,
  };

  console.log(scoreInfo);

  highScores.push(scoreInfo);
  highScores.sort((a, b) => a.score > b.score ? 1 : -1)

  highScores.splice(3);

  localStorage.setItem('highScores', JSON.stringify(highScores));

  highScores.map((userScore) => {
    const scoreDisplay = document.createElement('h4');
    scoreDisplay.innerHTML = `${userScore.name}: ${userScore.score}`;
    document.getElementById('topThreeScores').append(scoreDisplay);
  });
});
