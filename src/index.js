"use strict";





let temp_value = 72
let sky = ""

const updateCity = () => {
    const getCityName = document.getElementById("cityNameInput").value;
    const headerCityContainer = document.getElementById("headerCityName");
    headerCityContainer.textContent = getCityName;
};
// reset to default city name
const resetCity = () => {
    const cityContainer = document.getElementById("cityNameInput");
    cityContainer.value = "Seattle 🌧";
    // reflect that reset on the header
    updateCity();
};
const updateTemp = function(tempValue) {
    const tempValueContainer = document.getElementById("temp_value");
    const landscapeContainer = document.getElementById("landscape");
    temp_value = tempValue
        // console.log(tempValueContainer)
    tempValueContainer.textContent = tempValue;
    if (tempValue >= 80) {
        tempValueContainer.style.color = "red";
        landscapeContainer.textContent = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (tempValue >= 70) {
        tempValueContainer.style.color = "orange";
        landscapeContainer.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (tempValue >= 60) {
        tempValueContainer.style.color = "gold";
        landscapeContainer.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    } else if (tempValue >= 50) {
        tempValueContainer.style.color = "green";
        landscapeContainer.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    } else {
        tempValueContainer.style.color = "teal";
        landscapeContainer.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    }
};

const skyChanger = () => {
    const skyContainer = document.getElementById("sky");

    if (document.getElementById('skySelect').value === 'sun') {
        document.querySelector('.skyArea').style.background = "#FCE762";
        skyContainer.textContent = "☁️☁️☁️☁️☁️☀️☁️☁️☁️☁️";
    }
    if (document.getElementById('skySelect').value === 'overcast') {
        document.querySelector('.skyArea').style.background = "#607B7D";
        skyContainer.textContent = "☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️"
    }
    if (document.getElementById('skySelect').value === 'rain') {
        document.querySelector('.skyArea').style.background = "#5100B3";
        skyContainer.textContent = "🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧"
    }
    if (document.getElementById('skySelect').value === 'snow') {
        document.querySelector('.skyArea').style.background = "#76E5FC";
        skyContainer.textContent = "🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨"
    }
}

const getRealTimeTemp = () => {
    const cityName = document.getElementById("cityNameInput").value;
    axios.get("http://127.0.0.1:5000/location", { params: { q: cityName } }).then(
        (response) => {
            const lat1 = response.data[0].lat
            const lon1 = response.data[0].lon
            axios.get("http://127.0.0.1:5000/weather", { params: { lat: lat1, lon: lon1 } }).then(
                (response) => {
                    const realTemp = response.data.current.temp
                    const farTemp = Math.round((realTemp - 273.15) * 1.8000 + 32.00)
                    updateTemp(farTemp);

                }

            )
        }

    )
};

const registerEventHandlers = function() {
    const skyHelper = document.getElementById('skySelect');
    skyHelper.addEventListener('change', skyChanger);
    updateTemp(temp_value);

    const incButton = document.querySelector("#increase_temp");
    incButton.addEventListener("click", function() {
        temp_value += 1;
        updateTemp(temp_value);

    });
    const realTimeButton = document.querySelector("#realTime")
    realTimeButton.addEventListener("click", getRealTimeTemp)

    const decButton = document.querySelector("#decrease_temp");
    decButton.addEventListener("click", function() {
        temp_value -= 1;
        updateTemp(temp_value);
    })
    const cityContainer = document.querySelector("#cityNameReset");
    cityContainer.addEventListener("click", resetCity)

    const cityNameInput = document.querySelector("#cityNameInput")
    cityNameInput.addEventListener("input", updateCity)
}



// registerEventHandlers()
document.addEventListener("DOMContentLoaded", registerEventHandlers);