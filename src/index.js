'use strict';
const state = {
    temperature: 70,
    sky: 'cloudy',
    defaultCity: 'Seattle',
}
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
landscape.textContent = getLandscapeForTemperature(
    state.temperature
);
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
};
onLoad();

// wave 3 display and update city name//

// 
const updateCityName = () => { const cityInput = document.getElementById('cityNameInput');
    const cityDisplay = document.getElementById('cityNameDisplay')
    const cityNameElement = document.getElementById('cityNameElement) return;
    
    cityDisplay.textContent = cityInput.value;
    
};

const registerCityNameEventHandlers = () => {
    const cityInput = document.getElementById('cityNameInput');
    cityInput.addEventListener('input', updateCityName);
    
};
