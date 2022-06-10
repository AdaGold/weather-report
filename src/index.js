'use strict';

const state = {
  temp: 80,
  tempColor: 'red',
  tempBackground: 'url(../src/images/sunny.png)',
  cityName: 'Dallas',
  lat: 32.7762719,
  lon: -96.7968559,
  isF: true,
  skyBackground: 'url(../src/images/sunnySky.jpeg)',
};

//Default Values
const temp = document.getElementById('temp');
temp.textContent = state.temp + '°';
temp.style.color = state.tempColor;
temp.style.color = state.cityName;

const backColor = document.getElementsByTagName('main')[0];
backColor.style.backgroundImage = state.tempBackground;

// Change the color of the temp
const changetempColor = () => {
  if ((state.isF && state.temp >= 80) || (!state.isF && state.temp >= 27)) {
    state.tempColor = 'red';
    temp.style.color = state.tempColor;
  } else if (
    (state.isF && state.temp < 80 && state.temp > 69) ||
    (!state.isF && state.temp < 27 && state.temp > 20)
  ) {
    state.tempColor = 'orange';
    temp.style.color = state.tempColor;
  } else if (
    (state.isF && state.temp < 70 && state.temp > 59) ||
    (!state.isF && state.temp < 20 && state.temp > 15)
  ) {
    state.tempColor = 'yellow';
    temp.style.color = state.tempColor;
  } else if (
    (state.isF && state.temp < 60 && state.temp > 49) ||
    (!state.isF && state.temp < 15 && state.temp > 10)
  ) {
    state.tempColor = 'green';
    temp.style.color = state.tempColor;
  } else if (
    (state.isF && state.temp < 50) ||
    (!state.isF && state.temp < 10)
  ) {
    state.tempColor = 'teal';
    temp.style.color = state.tempColor;
  }
};

// Change the background image by temp
const changeBackImg = () => {
  if ((state.isF && state.temp >= 80) || (!state.isF && state.temp >= 27)) {
    state.tempBackground = 'url(../src/images/sunny.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'black';
  } else if (
    (state.isF && state.temp < 80 && state.temp > 69) ||
    (!state.isF && state.temp < 27 && state.temp > 20)
  ) {
    state.tempBackground = 'url(../src/images/spring.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'white';
  } else if (
    (state.isF && state.temp < 70 && state.temp > 59) ||
    (!state.isF && state.temp < 20 && state.temp > 15)
  ) {
    state.tempBackground = 'url(../src/images/cool.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'white';
  } else if (
    (state.isF && state.temp < 60) ||
    (!state.isF && state.temp < 15)
  ) {
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
      getWeather();
    })
    .catch((error) => {
      console.log('error!', error.response.data);
    });
};

// get weather data and update colors and background image
const getWeather = () => {
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

// kelvin to F or C
const kToF = (k) => {
  if (state.isF) {
    const conversion = (k - 273.15) * (9 / 5) + 32;
    return Math.round(conversion);
  } else if (!state.isF) {
    const conversion = k - 273.15;
    return Math.round(conversion);
  }
};

// Toggle between F and C and change the button
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
  getLatLon();
};

//change sky
const changeSky = (e) => {
  const skyImg = document.getElementById('sky-container');
  const skyValue = document.getElementById('sky-select').value;

  if (skyValue === 'sunny') {
    state.skyBackground = 'url(../src/images/sunnySky.jpeg)';
    skyImg.style.backgroundImage = state.skyBackground;
  } else if (skyValue === 'rainy') {
    console.log(skyValue);
    state.skyBackground = 'url(../src/images/rainSky.jpg)';
    skyImg.style.backgroundImage = state.skyBackground;
  } else if (skyValue === 'snowy') {
    state.skyBackground = 'url(../src/images/snowySky.jpeg)';
    skyImg.style.backgroundImage = state.skyBackground;
  } else if (skyValue === 'cloudy') {
    state.skyBackground = 'url(../src/images/cloudySky.jpeg)';
    skyImg.style.backgroundImage = state.skyBackground;
  }
};

// Reset search button
const resetSearchBtn = () => {
  const searchBox = document.getElementById('search-box');
  const cityState = document.getElementById('city-state');
  searchBox.value = '';
  state.cityName = 'Dallas';
  cityState.textContent = state.cityName;
  getLatLon();
};

// Event Handlers
const registerEventHandlers = () => {
  // Increse Decrease Arrows
  const upArrow = document.getElementById('arrow-up');
  upArrow.addEventListener('click', increaseTemp);

  const downArrow = document.getElementById('arrow-down');
  downArrow.addEventListener('click', decreaseTemp);

  //Search for city and reset city button
  const searchCity = document.getElementById('search-box');
  searchCity.addEventListener('input', changeCity);

  const resetBtn = document.getElementById('search-reset-btn');
  resetBtn.addEventListener('click', resetSearchBtn);

  //Get current temp
  const cityTempBtn = document.getElementById('currentTempBtn');
  cityTempBtn.addEventListener('click', getLatLon);

  //Toggle btwn F/C
  const toggleFC = document.getElementById('tempToggle');
  toggleFC.addEventListener('click', setTempToggle);

  //Change sky
  const skySelect = document.getElementById('sky-select');
  skySelect.addEventListener('change', changeSky);

  // Default Values that need DOM content loading
  const skyContainer = document.getElementById('sky-container');
  skyContainer.style.backgroundImage = state.skyBackground;
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
