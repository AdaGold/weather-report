'use strict';

const increaseTemp = () => {
  const currentTemp = document.getElementById('temp');
  currentTemp.textContent = parseInt(currentTemp.textContent) + 1;
};

const decreaseTemp = () => {
  const currentTemp = document.getElementById('temp');
  currentTemp.textContent = parseInt(currentTemp.textContent) - 1;
};

const changeColor = () => {
  const currentTemp = document.getElementById('temp');
  if (parseInt(currentTemp.textContent) >= 80) {
    currentTemp.style.color = '#FF0000';
  }
};

const registerEventHandlers = () => {
  const increaseButton = document.getElementById('increase-temp');
  const decreaseButton = document.getElementById('decrease-temp');
  const onColorChange = document.getElementById('temp');
  onColorChange.addEventListener('onchange', changeColor);
  increaseButton.addEventListener('click', increaseTemp);
  decreaseButton.addEventListener('click', decreaseTemp);
};

// const registerEventHandlers = () => {
//   const increaseButton = document.getElementById('-temp');
//   increaseButton.addEventListener('click', increaseTemp);
// };

document.addEventListener('DOMContentLoaded', registerEventHandlers);
