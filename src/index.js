'use strict';

//eevent happens (clicking on the get realtime temp)
//take in city from city-input
//request location api to return lat and lon, using city name
//using the returned lat and lon, request weather api to return temperature
//convert temp from kelvin to farhenheit
//set that value as temp display
const getTempFromCoordinates = () => {
  const cityInput = document.getElementById('city-display').textContent;
  console.log(cityInput);
  axios
    .get('http://127.0.0.1:5000/location', {
      params: {
        q: cityInput,
      },
    })
    .then((response) => {
      console.log('success', response);
      const return_obj = {
        lat: response.data[0].lat,
        lon: response.data[0].lon,
      };
      axios
        .get('http://127.0.0.1:5000/weather', {
          params: {
            lat: return_obj['lat'],
            lon: return_obj['lon'],
          },
        })
        .then((weatherResponse) => {
          console.log(weatherResponse);
          const cityTemp = weatherResponse.data['main']['temp'];
          let tempDisplay = document.getElementById('temp');
          console.log(cityTemp);
          const tempFahrenheit =
            (parseInt(cityTemp) - parseInt(273.15)) * 1.8 + 32;
          console.log(tempFahrenheit);
          tempDisplay.textContent = tempFahrenheit;

          // const landscapeContainer = document.getElementById('landscape');
          // const landscape = landscapeChange(tempFahrenheit);
          // landscapeContainer.textContent = landscape;
          // console.log(landscapeChange(tempFahrenheit));
        });
    })
    .catch((error) => {
      console.log('error!');
      console.log(error);
    });
};

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

const resetCityName = () => {
  const inputCity = document.getElementById('city-name-input');
  const cityNameDisplay = document.getElementById('city-display');
  inputCity.value = 'Seattle';
  cityNameDisplay.textContent = 'Seattle';
  console.log(inputCity);
  console.log(inputCity.value);
};

// const response = get_location();
// const long = response[0]['lat'];

const registerEventHandlers = () => {
  const increaseButton = document.getElementById('increase-temp');
  const decreaseButton = document.getElementById('decrease-temp');
  const cityInputForm = document.getElementById('city-name-input');
  const selectedSky = document.getElementById('sky-select');
  const realtimeTempButton = document.getElementById('realtime-temp');
  const resetButton = document.getElementById('reset-city-name-2');
  // const cityNameDisplay = document.getElementById('city-display');

  increaseButton.addEventListener('click', increaseTemp);
  decreaseButton.addEventListener('click', decreaseTemp);
  cityInputForm.addEventListener('input', displayCityName);
  selectedSky.addEventListener('change', skyChangeOnSelect);
  realtimeTempButton.addEventListener('click', getTempFromCoordinates);
  resetButton.addEventListener('click', resetCityName);
  // cityNameDisplay.addEventListener('change', resetCityName);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
