'use strict';

const state = {
  temp: 80,
  tempColor: 'red',
  tempBackground: 'url(../src/images/sunny.png)',
  cityName: 'Dallas',
  lat: 32.7762719,
  lon: -96.7968559,
  isF: true,
};

// Default Values
const temp = document.getElementById('temp');
temp.textContent = state.temp + '°';
temp.style.color = state.tempColor;
temp.style.color = state.cityName;

const backColor = document.getElementsByTagName('main')[0];
backColor.style.backgroundImage = state.tempBackground;

// Change the color of the temp
const changetempColor = () => {
  if (state.temp >= 80) {
    state.tempColor = 'red';
    temp.style.color = state.tempColor;
  } else if (state.temp > 69 && state.temp < 80) {
    state.tempColor = 'orange';
    temp.style.color = state.tempColor;
  } else if (state.temp < 70 && state.temp > 59) {
    state.tempColor = 'yellow';
    temp.style.color = state.tempColor;
  } else if (state.temp < 60 && state.temp > 49) {
    state.tempColor = 'green';
    temp.style.color = state.tempColor;
  } else if (state.temp < 50) {
    state.tempColor = 'teal';
    temp.style.color = state.tempColor;
  }
};

// Change the background image by temp
const changeBackImg = () => {
  if (state.temp >= 80) {
    state.tempBackground = 'url(../src/images/sunny.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'black';
  } else if (state.temp < 80 && state.temp > 69) {
    state.tempBackground = 'url(../src/images/spring.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'white';
  } else if (state.temp < 70 && state.temp > 59) {
    state.tempBackground = 'url(../src/images/cool.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'white';
  } else if (state.temp < 60) {
    state.tempBackground = 'url(../src/images/snow.png)';
    backColor.style.color = 'white';
    backColor.style.backgroundImage = state.tempBackground;
  }
};

// Increase & Decrease the temp
const increaseTemp = () => {
  state.temp++;
  temp.textContent = `${state.temp}°`;
  changetempColor();
  changeBackImg();
};

const decreaseTemp = () => {
  state.temp--;
  temp.textContent = `${state.temp}°`;
  changetempColor();
  changeBackImg();
};

// Change city name by input box
const changeCity = (e) => {
  // const searchCity = document.getElementById('search-box');
  const cityState = document.getElementById('city-state');
  state.cityName = e.target.value;
  cityState.textContent = state.cityName;
};

// Reset city name by button
const resetCity = () => {};

// Get lat lon of city.
const getLatLon = () => {
  const url = 'http://127.0.0.1:5000/';
  axios
    .get(url + 'location', {
      params: {
        q: state.cityName,
      },
    })
    .then((response) => {
      const data = response.data[0];
      state.lat = data.lat;
      state.lon = data.lon;
    })
    .catch((error) => {
      console.log('error!', error.response.data);
    });
};

// get weather data and update colors and background image
const getWeather = () => {
  getLatLon();

  const url = 'http://127.0.0.1:5000/';
  axios
    .get(url + 'weather', {
      params: {
        lat: state.lat,
        lon: state.lon,
      },
    })
    .then((response) => {
      const ktemp = response.data.current.temp;
      state.temp = kToF(ktemp);
      temp.textContent = `${state.temp}°`;
      changetempColor();
      changeBackImg();
    })
    .catch((error) => {
      console.log('error!', error.response.data);
    });
};

// kelvin to F
const kToF = (k) => {
  if (state.isF) {
    const conversion = (k - 273.15) * (9 / 5) + 32;
    return Math.round(conversion);
  } else if (!state.isF) {
    const conversion = k - 273.15;
    return Math.round(conversion);
  }
};

const setTempToggle = () => {
  state.isF = !state.isF;
  if (state.isF === false) {
    const toggle = document.getElementById('toggle');
    toggle.classList.remove('fa-toggle-off');
    toggle.classList.add('fa-toggle-on');
  } else {
    const toggle = document.getElementById('toggle');
    toggle.classList.remove('fa-toggle-on');
    toggle.classList.add('fa-toggle-off');
  }
  getWeather();
};

// Event Handlers
const registerEventHandlers = () => {
  const upArrow = document.getElementById('arrow-up');
  upArrow.addEventListener('click', increaseTemp);

  const downArrow = document.getElementById('arrow-down');
  downArrow.addEventListener('click', decreaseTemp);

  const searchCity = document.getElementById('search-box');
  searchCity.addEventListener('input', changeCity);

  const searchResetBtn = document.getElementById('search-reset-btn');
  searchResetBtn.addEventListener('click', resetCity);

  const cityResetBtn = document.getElementById('currentTempBtn');
  cityResetBtn.addEventListener('click', getWeather);

  const toggleFC = document.getElementById('tempToggle');
  if (toggleFC) {
    toggleFC.addEventListener('click', setTempToggle);
  }
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
