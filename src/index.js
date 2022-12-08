'use strict';

const increaseTemp = () => {
  const currentTemp = document.getElementById('temp');
  currentTemp.textContent = parseInt(currentTemp.textContent) + 1;
  colorTempChange(currentTemp);

  const landscapeContainer = document.getElementById('landscape');
  const landscape = landscapeChange(currentTemp);
  landscapeContainer.textContent = landscape;
};

const decreaseTemp = () => {
  const currentTemp = document.getElementById('temp');
  currentTemp.textContent = parseInt(currentTemp.textContent) - 1;
  colorTempChange(currentTemp);

  const landscapeContainer = document.getElementById('landscape');
  const landscape = landscapeChange(currentTemp);
  landscapeContainer.textContent = landscape;
};

const colorTempChange = (temp) => {
  if (parseInt(temp.textContent) >= 80) {
    temp.style.color = '#FF0000';
  } else if (parseInt(temp.textContent) >= 70) {
    temp.style.color = '#FFA500';
  } else if (parseInt(temp.textContent) >= 60) {
    temp.style.color = '#D1D100';
  } else if (parseInt(temp.textContent) >= 50) {
    temp.style.color = '#00FF00';
  } else if (parseInt(temp.textContent) <= 49) {
    temp.style.color = '#00AEAE';
  }
};

const landscapeChange = (temp) => {
  let landscape = '';
  if (parseInt(temp.textContent) >= 80) {
    landscape = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (parseInt(temp.textContent) >= 70) {
    landscape = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (parseInt(temp.textContent) >= 60) {
    landscape = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (parseInt(temp.textContent) >= 50) {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (parseInt(temp.textContent) <= 49) {
    landscape = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
  return landscape;
};

const registerEventHandlers = () => {
  const increaseButton = document.getElementById('increase-temp');
  const decreaseButton = document.getElementById('decrease-temp');

  increaseButton.addEventListener('click', increaseTemp);
  decreaseButton.addEventListener('click', decreaseTemp);
};

// const registerEventHandlers = () => {
//   const increaseButton = document.getElementById('-temp');
//   increaseButton.addEventListener('click', increaseTemp);
// };

document.addEventListener('DOMContentLoaded', registerEventHandlers);
