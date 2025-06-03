"use strict";

// wave 2

let temp = 72;
const tempValue = document.getElementById('tempValue');
const increaseBtn = document.getElementById('increaseTemp');
const decreaseBtn = document.getElementById('decreaseTemp');
const weatherApp = document.getElementById('weather-app');
const landscape = document.querySelector('.landscape');
const body = document.body;
const skySelect = document.getElementById('skySelector');
const skyImage = document.querySelector('#skySmiley img');

const skyImages = {
    sunny: 'assets/images/sky/Sunny.png',
    cloudy: 'assets/images/sky/Partly-cloudy.png',
    rainy: 'assets/images/sky/Raining.png',
    snowy: 'assets/images/sky/Snowing.png',
};

// create dynamic gradients for landscape
const createLandscapeGradient = (id, color1, color2) => {
    const svg = landscape.closest('svg');
    let defs = svg.querySelector('defs');
    if (!defs) {
        defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        svg.appendChild(defs);
    }
    
    // remove existing gradient if it exists
    const existing = defs.querySelector(`#${id}`);
    if (existing) existing.remove();
    
    const gradient = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
    gradient.setAttribute('id', id);
    gradient.setAttribute('x1', '0%');
    gradient.setAttribute('y1', '0%');
    gradient.setAttribute('x2', '0%');
    gradient.setAttribute('y2', '100%');
    
    const stop1 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop1.setAttribute('offset', '0%');
    stop1.setAttribute('style', `stop-color:${color1};stop-opacity:1`);
    
    const stop2 = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop2.setAttribute('offset', '100%');
    stop2.setAttribute('style', `stop-color:${color2};stop-opacity:1`);
    
    gradient.appendChild(stop1);
    gradient.appendChild(stop2);
    defs.appendChild(gradient);
};

// update background color, landscape & sky image
const updateDisplay = () => {
    tempValue.textContent = `${temp} °F`;

    if (temp >= 80) {
        weatherApp.style.background = 'linear-gradient(to right, #ff512f, #dd2476)';
        createLandscapeGradient('hotGradient', '#8B4513', '#D2691E');
        landscape.style.fill = 'url(#hotGradient)';
        if (skyImage) {
            skyImage.src = skyImages.sunny;
            skyImage.alt = 'sunny';
        }
        if (skySelect) skySelect.value = 'sunny';
    } else if (temp >= 70) {
        weatherApp.style.background = 'linear-gradient(to right, #f7971e, #ffd200)';
        createLandscapeGradient('warmGradient', '#228B22', '#9ACD32');
        landscape.style.fill = 'url(#warmGradient)';
        if (skyImage) {
            skyImage.src = skyImages.sunny;
            skyImage.alt = 'sunny';
        }
        if (skySelect) skySelect.value = 'sunny';
    } else if (temp >= 60) {
        weatherApp.style.background = 'linear-gradient(to right,rgb(243, 181, 37),rgb(207, 228, 48))';
        createLandscapeGradient('coolGradient', '#556B2F', '#8FBC8F');
        landscape.style.fill = 'url(#coolGradient)';
        if (skyImage) {
            skyImage.src = skyImages.cloudy;
            skyImage.alt = 'cloudy';
        }
        if (skySelect) skySelect.value = 'cloudy';
    } else if (temp >= 50) {
        weatherApp.style.background = 'linear-gradient(to right, #a8e063, #56ab2f)';
        createLandscapeGradient('coldGradient', '#2F4F4F', '#708090');
        landscape.style.fill = 'url(#coldGradient)';
        if (skyImage) {
            skyImage.src = skyImages.cloudy;
            skyImage.alt = 'cloudy';
        }
        if (skySelect) skySelect.value = 'cloudy';
    } else {
        weatherApp.style.background = 'linear-gradient(to right, #43cea2, #185a9d)';
        createLandscapeGradient('freezingGradient', '#4682B4', '#E6E6FA');
        landscape.style.fill = 'url(#freezingGradient)';
        if (skyImage) {
            skyImage.src = skyImages.snowy;
            skyImage.alt = 'snowy';
        }
        if (skySelect) skySelect.value = 'snowy';
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

// wave 4 // API calls for realtime temperature

const fetchBtn = document.getElementById('fetchBtn');
const clearBtn = document.getElementById('clearBtn');

const fetchRealTimeTemperature = async () => {
    const currentCity = cityInput.value.trim() || 'Seattle';
    
    try {
        const locationResponse = await axios.get(`http://127.0.0.1:5000/location?q=${currentCity}`);
        const lat = locationResponse.data[0].lat;
        const lon = locationResponse.data[0].lon;
        
        const weatherResponse = await axios.get(`http://127.0.0.1:5000/weather?lat=${lat}&lon=${lon}`);
        const tempKelvin = weatherResponse.data.main.temp;
        const tempFahrenheit = Math.round((tempKelvin - 273.15) * 9/5 + 32);
        
        temp = tempFahrenheit;
        updateDisplay();
        cityName.textContent = currentCity;
        
    } catch (error) {
        console.error('Error fetching weather data:', error);
        alert('Unable to fetch weather data. Please check if the proxy server is running.');
    }
};

fetchBtn.onclick = fetchRealTimeTemperature;

// wave 5 // update sky from dropdown

skySelect.addEventListener('change', () => {
    const selected = skySelect.value;
    skyImage.src = skyImages[selected];
    skyImage.alt = selected;
});

// wave 6 // reset city functionality
