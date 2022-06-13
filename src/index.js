// import axios from 'axios';

const state = {
  temp: 25,
  tempUnits: '°C',
  city: 'Denver',
  lat: 39.7392,
  long: -104.985,
};

const landscapes = {
  cold: '\
  I X I  I  I  I  I  I  I  I  I  I\
  ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\
  ********************************',
  cool: '***cool***',
  neutral:
    '\
  ----neutral-----\
  ┼┼┼│                      │  ┼┼│\
  ┼┼┼┼┐                       ┼┼┼│\
  ┼┼┼┼│           *         │┼┼┼┼│\
  ┼┼┼┼┘          *          │ ┼┼┼│\
  ┼  ├────┼          ───────│ ┼┼┼│\
  ┼┼┼┼│┐┐┐┐┐┐┐┐ ├├├├├├├├├──│┼ ┼┼┼│\
  ┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼┼\
  ********************************\
  ********************************\
  ********************************',
  warm: '^^^^^^warm^^^^^^',
  hot: '<<<<<hot>>>>>',
};

const convertFtoC = (temp) => {
  return Math.round((((temp - 32) * 5) / 9) * 10) / 10;
};

const convertKtoC = (temp) => {
  return temp - 273.15;
};

const convertCtoF = (temp) => {
  return Math.round((temp * (9 / 5) + 32) * 10) / 10;
};

const changeLandscapeTemp = () => {
  let color = 'rgba(150, 50, 110, 0.5)';
  let degC = 0.0;
  let landscape = landscapes.neutral;

  if (state.tempUnits === '°F') {
    degC = convertFtoC(state.temp);
  } else {
    degC = state.temp;
  }
  if (degC > 30) {
    landscape = landscapes.hot;
    color = 'rgba(150, 90, 30, 0.5)';
  } else if (degC > 25) {
    landscape = landscapes.warm;
    color = 'rgba(120, 60, 40, 0.5)';
  } else if (degC > 15) {
    landscape = landscapes.neutral;
    color = 'rgba(100, 110, 10, 0.5)';
  } else if (degC > 0) {
    landscape = landscapes.cool;
    color = 'rgba(80, 10, 110, 0.5)';
  } else if (degC <= 0) {
    landscape = landscapes.cold;
    color = 'rgba(5, 5, 110, 0.5)';
  }

  let backgroundColors = `radial-gradient(${color}, rgba(0, 0, 0, 0))`;

  const backgroundColor = document.getElementById('weather_body');
  backgroundColor.style.backgroundImage = backgroundColors;
  const landscapeReturn = document.getElementById('landscape');
  landscapeReturn.textContent = landscape;
  const tempContainer = document.querySelector('#numeric_temperature');
  tempContainer.textContent = `${state.temp}`;
  const unitsContainer = document.querySelector('#temperature_units');
  unitsContainer.textContent = `${state.tempUnits}`;
};

const changeUnits = () => {
  const currentUnits = state.tempUnits;
  // document.getElementById('#temperature_units').textContent;
  // state.tempUnits = currentUnits;
  console.log('current units: ' + currentUnits);
  if (currentUnits === '°C') {
    state.temp = convertCtoF(state.temp);
    state.tempUnits = '°F';
  } else if (currentUnits === '°F') {
    state.temp = convertFtoC(state.temp);
    state.tempUnits = '°C';
  }
  changeLandscapeTemp();
};

const increaseTemp = () => {
  state.temp += 1;
  changeLandscapeTemp();
};

const reset = () => {
  state.temp = 25;
  changeLandscapeTemp();
  resetLocation();
};

const decreaseTemp = () => {
  state.temp -= 1;
  changeLandscapeTemp();
};

const changeCity = () => {
  const newCity = document.getElementById('location_text').value;
  const cityDisplay = document.getElementById('location_text');
  state.city = newCity;
  cityDisplay.textContent = state.city;
};

const resetLocation = () => {
  const locationInput = document.getElementById('location_text');
  locationInput.value = 'Denver';
  changeCity();
};

const registerEventHandlers = () => {
  const changeUnitsButton = document.querySelector('#temperature_units');
  changeUnitsButton.addEventListener('click', changeUnits);

  const increaseTempButton = document.querySelector('#increase');
  increaseTempButton.addEventListener('click', increaseTemp);

  const resetButton = document.querySelector('#reset');
  resetButton.addEventListener('click', reset);

  const decreaseTempButton = document.querySelector('#decrease');
  decreaseTempButton.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
