const state = {
    temperature: 40
};

const changeSky = (sky) => {
    const skyText = document.querySelector("#sky");
    if (sky === "sunny") {
        skyText.innerHTML = "☁️ ☁️ ☁️ ☀️ ☁️ ☁️"
    } else if (sky === "cloudy") {
        skyText.innerHTML = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    } else if (sky === "rainy") {
        skyText.innerHTML = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    } else if (sky === "snowy") {
        skyText.innerHTML = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
};

const changeSkyValue = () => {
    const skyValue = document.getElementById('skySelect').value;
    changeSky(skyValue);
};

const tempText = document.querySelector("#tempValue");
const landscapeText = document.querySelector("#landscape");

const increaseTemp = () => {
    state.temperature += 1;
    updateTempUi();
};

const updateTempUi = () => {
    tempText.innerHTML = `${state.temperature}`;
    if (state.temperature >= 80) {
        landscapeText.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
        tempText.style.color = "red";
    } else if (state.temperature <= 79 && state.temperature > 69) {
        landscapeText.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
        tempText.style.color = "orange";
    } else if (state.temperature <=69 && state.temperature > 59) {
        landscapeText.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"; 
        tempText.style.color = "yellow";       
    } else if (state.temperature <=59 && state.temperature > 49) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        tempText.style.color = "green"; 
    } else if (state.temperature <=49) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
        tempText.style.color = "teal";
    }  
};

const decreaseTemp = () => {
    state.temperature -= 1;
    updateTempUi();
};

const updateCityHeader = () => {
    const cityText = document.querySelector("#cityNameInput");
    let currentCityInput = cityText.value;
    const cityHeader = document.querySelector("#headerCityName");
    cityHeader.innerHTML = `${currentCityInput}`;
};

const resetCityName = () => {
    const cityText = document.querySelector("#cityNameInput");
    cityText.value = 'Seattle'
    updateCityHeader();
};

const updateCurrentTemp = () => {
    const cityText = document.querySelector("#cityNameInput");
    findLatitudeAndLongitude(cityText.value);
};

const findLatitudeAndLongitude = (cityName) => {
    axios.get('http://localhost:5000/location', {
        params: {
        q: cityName,
        },
    })
    .then((response) => {
        const latitude = response.data[0].lat;
        const longitude = response.data[0].lon;
        findLocationTemp(latitude, longitude)
        console.log('success in finding Latitude And Longitude!', latitude, longitude);
    })
    .catch((error) => {
        console.log('error!', error.response.data);
    });
};

const findLocationTemp = (latitude, longitude) => {
    axios.get('http://localhost:5000/weather', {
        params: {
            lat: latitude,
            lon: longitude
        },
    })
    .then((response) => {
        const tempInKelvin = response.data.main.temp;
        let tempInFahrenheit = (tempInKelvin - 273) * 9/5 + 32;
        tempInFahrenheit = Math.floor(tempInFahrenheit);
        state.temperature = tempInFahrenheit;
        updateTempUi();
        console.log(tempInFahrenheit); 
    });
};


const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTempControl");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTempControl");
    decreaseTempButton.addEventListener("click", decreaseTemp);

    const updateCity = document.querySelector("#cityNameInput");
    updateCity.addEventListener("input", updateCityHeader);

    const cityReset = document.querySelector("#cityNameReset");
    cityReset.addEventListener("click", resetCityName);

    const updateTemp = document.querySelector("#currentTempButton");
    updateTemp.addEventListener("click", updateCurrentTemp);

    const updateSky = document.querySelector("#skySelect");
    updateSky.addEventListener("change", changeSkyValue);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);
