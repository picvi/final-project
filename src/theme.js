const sunMoonCont = document.querySelector('.sunMoonContainer');

document.querySelector('.toggler').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.getElementsByClassName('sunMoonContainer')[0].classList.toggle('dark');
  const currentRotation = parseInt(getComputedStyle(sunMoonCont).getPropertyValue('--rotation'));
  sunMoonCont.style.setProperty('--rotation', currentRotation + 180);
});
