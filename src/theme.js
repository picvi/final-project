const sunMoonCont = document.querySelector('.sunMoonContainer');

document.querySelector('.toggler').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const currentRotation = parseInt(getComputedStyle(sunMoonCont).getPropertyValue('--rotation'));
  sunMoonCont.style.setProperty('--rotation', currentRotation + 180);
});
