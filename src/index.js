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
          let tempDisplay = document.getElementById('temperatureDisplay');
          console.log(cityTemp);
          const tempFahrenheit =
            (parseInt(cityTemp) - parseInt(273.15)) * 1.8 + 32;
          console.log(tempFahrenheit);
          tempDisplay.textContent = tempFahrenheit;

          changeTempColor(tempDisplay);
          const garden = gardenChange(tempDisplay);

          const gardenContainer = document.getElementById('garden_section');
          gardenContainer.textContent = garden;
        });
    })
    .catch((error) => {
      console.log(error);
    });
};

const increaseTemp = () => {
  const currentTemp = document.getElementById('temperatureDisplay');
  currentTemp.textContent = parseInt(currentTemp.textContent) + 1;
  changeTempColor(currentTemp);
  const gardenContainer = document.getElementById('garden_section');

  const garden = gardenChange(currentTemp);
  gardenContainer.textContent = garden;
};
const decreaseTemp = () => {
  const currentTemp = document.getElementById('temperatureDisplay');
  currentTemp.textContent = parseInt(currentTemp.textContent) - 1;
  changeTempColor(currentTemp);
  const gardenContainer = document.getElementById('garden_section');

  const garden = gardenChange(currentTemp);
  gardenContainer.textContent = garden;
};

const changeTempColor = (temperatureDisplay) => {
  if (parseInt(temperatureDisplay.textContent) >= 80) {
    temperatureDisplay.style.color = 'red';
  } else if (parseInt(temperatureDisplay.textContent) >= 70) {
    temperatureDisplay.style.color = 'orange';
  } else if (parseInt(temperatureDisplay.textContent) >= 60) {
    temperatureDisplay.style.color = 'yellow';
  } else if (parseInt(temperatureDisplay.textContent) >= 50) {
    temperatureDisplay.style.color = 'darkgreen';
  } else if (parseInt(temperatureDisplay.textContent) <= 49) {
    temperatureDisplay.style.color = 'mediumblue';
  }
};

const gardenChange = (temperatureDisplay) => {
  let garden = '';
  if (parseInt(temperatureDisplay.textContent) >= 80) {
    garden = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (parseInt(temperatureDisplay.textContent) >= 70) {
    garden = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (parseInt(temperatureDisplay.textContent) >= 60) {
    garden = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (parseInt(temperatureDisplay.textContent) >= 50) {
    garden = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else if (parseInt(temperatureDisplay.textContent) <= 49) {
    garden = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
  return garden;
};

const updateSky = () => {
  const inputSky = document.getElementById('selectSky').value;
  const skyContainer = document.getElementById('sky');
  let sky = '';

  if (inputSky === 'Cloudy') {
    sky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (inputSky === 'Sunny') {
    sky = '☁️     ☁️   ☁️ ☀️ ☁️  ☁️';
  } else if (inputSky === 'Rainy') {
    sky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (inputSky === 'Snowy') {
    sky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
  skyContainer.textContent = sky;
};

const displayCityName = () => {
  const inputCity = document.getElementById('city-name-input').value;
  const displayCityContainer = document.getElementById('city-display');

  displayCityContainer.textContent = '✨ ' + inputCity + ' ✨';
};

const resetCityName = () => {
  const inputCity = document.getElementById('city-name-input');
  const cityNameDisplay = document.getElementById('city-display');
  inputCity.value = 'Atlanta';
  cityNameDisplay.textContent = '✨Atlanta✨';
  console.log(inputCity);
  console.log(inputCity.value);
};

const registerEventHandlers = () => {
  const increaseTempButton = document.getElementById('increase_temperature');
  increaseTempButton.addEventListener('click', increaseTemp);

  const decreaseTempButton = document.getElementById('decrease_temperature');
  decreaseTempButton.addEventListener('click', decreaseTemp);

  const cityInputForm = document.getElementById('city-name-input');
  cityInputForm.addEventListener('input', displayCityName);

  updateSky();
  const skySelect = document.getElementById('selectSky');
  skySelect.addEventListener('change', updateSky);

  const resetButton = document.getElementById('reset-city-name-2');
  resetButton.addEventListener('click', resetCityName);

  const realtimeTempButton = document.getElementById('realtime-temp');
  realtimeTempButton.addEventListener('click', getTempFromCoordinates);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
