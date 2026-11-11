'use strict';
const state = {
  temperature: 70,
  sky: 'cloudy',
  defaultCity: 'Seattle',
};
// get temperature color
const getTemperatureColor = (temp) => {
  if (temp >= 80) {
    return 'red';
  } else if (temp >= 70) {
    return 'orange';
  } else if (temp >= 60) {
    return 'yellow';
  } else if (temp >= 50) {
    return 'green';
  } else {
    return 'teal';
  }
};

//Get landscape based on temperature
const getLandscapeForTemperature = (temp) => {
  if (temp >= 80) {
    return '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temp >= 70) {
    return '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temp >= 60) {
    return '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temp >= 50) {
    return '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else {
    return '🌨❄️🌨❄️⛄️❄️🌨❄️⛄️❄️🌨❄️';
  }
};

// Update temperature, color, and landscape on the page
const updateTemperature = () => {
  const tempDisplay = document.getElementById('tempValue');
  const landscape = document.getElementById('landscape');

  //Display temperautre
  tempDisplay.textContent = state.temperature;

  //remove old color classes
  tempDisplay.classList.remove('red', 'orange', 'yellow', 'green', 'teal');
  // Add new temperature color
  const color = getTemperatureColor(state.temperature);
  tempDisplay.classList.add(color);

  // Replace landscape
  landscape.textContent = getLandscapeForTemperature(state.temperature);
};

//Increase temperature Handles
const increaseTemperature = () => {
  state.temperature += 1;
  updateTemperature();
};

// Decrease temperature Handles
const decreaseTemperature = () => {
  state.temperature -= 1;
  updateTemperature();
};

// Register event listeners
const registerEventHandlers = () => {
  const tempUpButton = document.getElementById('increaseTempControl');
  const tempDownButton = document.getElementById('decreaseTempControl');

  tempUpButton.addEventListener('click', increaseTemperature);
  tempDownButton.addEventListener('click', decreaseTemperature);
};

// Initialize the application
const onLoad = () => {
  // Wave 2
  updateTemperature();
  registerEventHandlers();

  // Wave 3
  updateCityName();
  registerCityNameEventHandlers();
  // Wave 5
  const skySelect = document.getElementById('skySelect');
  skySelect.value = state.sky;
  registerSkyEventHandlers();
  updateSky();
};

// wave 3 display and update city name//

const updateCityName = () => {
  const cityInput = document.getElementById('cityNameInput');
  const cityDisplay = document.getElementById('headerCityName');
  cityDisplay.textContent = cityInput.value;
};

const registerCityNameEventHandlers = () => {
  const cityInput = document.getElementById('cityNameInput');
  cityInput.addEventListener('input', updateCityName);
  const currentTempButton = document.getElementById('currentTempButton');
  currentTempButton.addEventListener('click', getRealtimeTemperature);
  //wave 6 reset city button
  const resetCityButton = document.getElementById('cityNameReset');
  resetCityButton.addEventListener('click', resetCity);
};

//wave 4
const getRealtimeTemperature = () => {
  const cityInput = document.getElementById('cityNameInput');
  //const currentTempButton = document.getElementById('currentTempButton');
  const city = cityInput.value.trim();
  if (!city) {
    alert('Enter a city name.');
    return;
  }

  findLatitudeAndLongitude(city)
    .then((coordinates) => {
      const latitude = coordinates.latitude;
      const longitude = coordinates.longitude;

      return getWeather(latitude, longitude);
    })
    .then((response) => {
      const kelvin = response.data.main.temp;
      const fahrenheit = ((kelvin - 273.15) * 9) / 5 + 32;

      state.temperature = Math.round(fahrenheit);
      updateTemperature();
    })
    .catch((error) => {
      console.error(error);
    });
};
const baseURL = 'https://ada-weather-report-proxy-server.onrender.com';
const findLatitudeAndLongitude = (city) => {
  return axios
    .get(`${baseURL}/location`, {
      params: { q: city },
    })
    .then((response) => {
      const latitude = response.data[0].lat;
      const longitude = response.data[0].lon;

      console.log('Latitude:', latitude);
      console.log('Longitude:', longitude);
      console.log(
        'Successfully found latitude and longitude:',
        latitude,
        longitude,
      );
      return { latitude, longitude };
    })
    .catch((error) => {
      console.error('Error finding latitude and longitude:', error);
      throw error;
    });
};

const getWeather = (latitude, longitude) => {
  return axios
    .get(`${baseURL}/weather`, {
      params: { lat: latitude, lon: longitude },
    })
    .then((response) => {
      console.log('Successfully found weather for city:', response.data);
      return response;
    })
    .catch((error) => {
      console.error('Error finding weather for city:', error);
      throw error;
    });
};

// Wave 5

const updateSky = () => {
  const skySelect = document.getElementById('skySelect');
  const skyDisplay = document.getElementById('sky');

  const selectedSky = skySelect.value;

  if (selectedSky === 'sunny') {
    skyDisplay.textContent = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (selectedSky === 'cloudy') {
    skyDisplay.textContent = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (selectedSky === 'rainy') {
    skyDisplay.textContent = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (selectedSky === 'snowy') {
    skyDisplay.textContent = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }

  state.sky = selectedSky;
};

const registerSkyEventHandlers = () => {
  const skySelect = document.getElementById('skySelect');
  skySelect.addEventListener('change', updateSky);
};

// Wave 6: Reset city name
const resetCity = () => {
  const cityInput = document.getElementById('cityNameInput');
  cityInput.value = state.defaultCity;
  updateCityName();
};

onLoad();
