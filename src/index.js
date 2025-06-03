"use strict";

// wave 2

let temp = 72;
const tempValue = document.getElementById('tempValue');
const increaseBtn = document.getElementById('increaseTemp');
const decreaseBtn = document.getElementById('decreaseTemp');
const weatherApp = document.getElementById('weather-app');
const landscape = document.querySelector('.landscape');
const body = document.body;

// update background color & landscape
const updateDisplay = () => {
    tempValue.textContent = `${temp} °F`;

    if (temp >= 80) {
        weatherApp.style.background = 'linear-gradient(to right, #ff512f, #dd2476)';
        landscape.style.fill = '#ff512f';
        body.style.backgroundImage = "url('/assets/images/sky/landscapes/Desert2.jpg')";
    } else if (temp >= 70) {
        weatherApp.style.background = 'linear-gradient(to right, #f7971e, #ffd200)';
        landscape.style.fill = '#f8b500';
        body.style.backgroundImage = "url('/assets/images/sky/landscapes/Spring.jpg')";
    } else if (temp >= 60) {
        weatherApp.style.background = 'linear-gradient(to right,rgb(243, 181, 37),rgb(207, 228, 48))';
        landscape.style.fill = 'rgb(207, 228, 48)';
        body.style.backgroundImage = "url('/assets/images/sky/landscapes/Cooler Spring.jpg')";
    } else if (temp >= 50) {
        weatherApp.style.background = 'linear-gradient(to right, #a8e063, #56ab2f)';
        landscape.style.fill = '#81c784';
        body.style.backgroundImage = "url('/assets/images/sky/landscapes/Fall.jpg')";
    } else {
        weatherApp.style.background = 'linear-gradient(to right, #43cea2, #185a9d)';
        landscape.style.fill = '#90caf9';
        body.style.backgroundImage = "url('assets/images/sky/landscapes/Winter.jpg')";
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

// wave 3 // update city name from text input

const cityName = document.getElementById('cityName');
const cityInput = document.getElementById('cityInput');

cityInput.addEventListener('input', () => {
    cityName.textContent = cityInput.value;
});

// wave 5 // update sky from dropdown

const skySelect = document.getElementById('skySelect');
const skyImage = document.querySelector('#skyDisplay img');

const skyImages = {
    sunny: 'assets/images/sky/Sunny.png',
    cloudy: 'assets/images/sky/Partly-cloudy.png',
    rainy: 'assets/images/sky/Raining.png',
    snowy: 'assets/images/sky/Snowing.png',
};

skySelect.addEventListener('change', () => {
    const selected = skySelect.value;
    skyImage.src = skyImages[selected];
    skyImage.alt = selected;
});
