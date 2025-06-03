"use strict";

// wave 2

let temp = 72;
const tempValue = document.getElementById('tempValue');
const increaseBtn = document.getElementById('increaseTemp');
const decreaseBtn = document.getElementById('decreaseTemp');
const weatherApp = document.getElementById('weather-app');
const skyDisplay = document.getElementById('skyDisplay');

// update background & landscape
const updateDisplay = () => {
    tempValue.textContent = `${temp} °F`;

    if (temp >= 80) {
        weatherApp.style.background = 'linear-gradient(to right, #ff512f, #dd2476)';
        skyDisplay.innerHTML = `<img src="assets/images/sky/sunny.png" alt="sunny">`;
    } else if (temp >= 70) {
        weatherApp.style.background = 'linear-gradient(to right, #f7971e, #ffd200)';
        skyDisplay.innerHTML = `<img src="assets/images/sky/sunny.png" alt="sunny">`;
    } else if (temp >= 60) {
        weatherApp.style.background = 'linear-gradient(to right, #fceabb, #f8b500)';
        skyDisplay.innerHTML = `<img src="assets/images/sky/partly-cloudy.png" alt="partly cloudy">`;
    } else if (temp >= 50) {
        weatherApp.style.background = 'linear-gradient(to right, #a8e063, #56ab2f)';
        skyDisplay.innerHTML = `<img src="assets/images/sky/raining.png" alt="raining">`;
    } else {
        weatherApp.style.background = 'linear-gradient(to right, #43cea2, #185a9d)';
        skyDisplay.innerHTML = `<img src="assets/images/sky/snowing.png" alt="snowing">`;
    }
};

// update temp with buttons
increaseBtn.onclick = () => {
    temp += 1;
    updateDisplay();
};

decreaseBtn.onclick = () => {
    temp -= 1;
    updateDisplay();
};

updateDisplay();

// wave 3

// update city name based on text input
const cityName = document.getElementById('cityName');
const cityInput = document.getElementById('cityInput');

cityInput.addEventListener('input', () => {
    cityName.textContent = cityInput.value;
})