// import axios from 'axios';

const state = {
  temp: 25,
  city: 'Denver',
  lat: 39.7392,
  long: -104.985,
};

const convertKtoC = (temp) => {
  return temp - 273.15;
};

const convertCtoF = (temp) => {
  return temp * (9 / 5) + 32;
};

const increaseTemp = () => {
  state.temp += 1;
  const tempContainer = document.querySelector('#numeric_temperature');
  tempContainer.textContent = `${state.temp}`;
};

const decreaseTemp = () => {
  state.temp -= 1;
  const tempContainer = document.querySelector('#numeric_temperature');
  tempContainer.textContent = `${state.temp}`;
};

const registerEventHandlers = () => {
  const increaseTempButton = document.querySelector('#increase');
  increaseTempButton.addEventListener('click', increaseTemp);

  const decreaseTempButton = document.querySelector('#decrease');
  decreaseTempButton.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
