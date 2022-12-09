'use strict';

//eevent happens (clicking on the get realtime temp)
const realtimeTempButton = document.getElementById('realtime-temp');
//take in city from city-input
const cityInput = document.getElementById('city-name-input').value;
//request location api to return lat and lon, using city name
//using the returned lat and lon, request weather api to return temperature
//convert temp from kelvin to farhenheit
//set that value as temp display

const get_location = () => {
  axios
    .get('http://127.0.0.1:5000/location', {
      params: {
        q: cityInput,
      },
    })
    .then((response) => {
      console.log('success!', response.data);
      return response.data;
    })
    .catch((error) => {
      console.log('error!', error.response.data);
    });
};

// const get_temperature = () => {
//   axios.get('http://127.0.0.1:5000/location', {
//     params: {},
//   });
// };

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

const skyChangeOnSelect = () => {
  const selectedSky = document.getElementById('sky-select').value;
  const skyContainer = document.getElementById('sky-container');
  const skyEmojiDisplay = skyChange(selectedSky);
  skyContainer.textContent = skyEmojiDisplay;
  console.log(document.getElementById('sky-select'));
  console.log(skyEmojiDisplay);
  console.log(selectedSky);
};

const skyChange = (skySelect) => {
  let skyEmoji = '';
  if (skySelect === 'sunny') {
    skyEmoji = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (skySelect === 'cloudy') {
    skyEmoji = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (skySelect === 'rainy') {
    skyEmoji = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (skySelect === 'snowy') {
    skyEmoji = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
  return skyEmoji;
};

const displayCityName = () => {
  const inputCity = document.getElementById('city-name-input').value;
  const displayCityContainer = document.getElementById('city-display');

  displayCityContainer.textContent = '✨ ' + inputCity + ' ✨';
};

// const response = get_location();
// const long = response[0]['lat'];

const registerEventHandlers = () => {
  const increaseButton = document.getElementById('increase-temp');
  const decreaseButton = document.getElementById('decrease-temp');
  const cityInputForm = document.getElementById('city-name-input');
  const selectedSky = document.getElementById('sky-select');
  get_location();

  increaseButton.addEventListener('click', increaseTemp);
  decreaseButton.addEventListener('click', decreaseTemp);
  cityInputForm.addEventListener('input', displayCityName);
  selectedSky.addEventListener('change', skyChangeOnSelect);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
