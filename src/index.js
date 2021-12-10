let temp = 50;

const changeSky = () => {
    const inputSky = document.getElementById("sky_change").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    if (inputSky === "Sunny") {
        sky = "☁️☁️☁️☁️ ☀️ ☁️☁️☁️☁️";
    } else if (inputSky === "Cloudy") {
        sky = "☁️☁️☁️☁️☁️☁️☁️☁️☁️☁️";
    } else if (inputSky === "Rainy") {
        sky = "🌧️🌧️☁️🌈🌧️🌈☁️🌧️🌧️";
    } else if (inputSky === "Snowy") {
        sky = "☁️☁️☁️❄️☁️☁️☁️❄️☁️☁️☁️"
    }
    skyContainer.textContent = sky;
};



const newTemp = temp => {
    const tempContainer = document.getElementById("temp");
    tempContainer.textContent = temp;
    updateTempStyles(temp);
    changeLandscape(temp);
};

const updateTempStyles = (currentTemp) => {
    const tempContainer = document.getElementById("temp");
    let color = "green";
    if ( currentTemp >= 80) {
        color = "red";
    } else if (currentTemp >= 70) {
        color = "orange";
    } else if (currentTemp >= 60) {
        color = "yellow";
    } else if (currentTemp >= 50) {
        color = "green";
    }
    tempContainer.classList = color;
};
const changeLandscape = (currentTemp) => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "🌲⛄️🌲⛄️🌲🌲🌲⛄️🌲";
    if (currentTemp >= 80) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍__🦂";
    } else if (currentTemp >= 70) {
        landscape = "🌸🌿🌼__🌻🌿_🌱_🌻🌷";
    } else if (currentTemp >= 60) {
        landscape = "🌾_🍃_🪨__🌱_🌾_🍃";
    }
    landscapeContainer.textContent = landscape;
};

const incTemp = (event) => {
    console.log("incTemp:", event);
    temp += 1;
    newTemp(temp);
};

const decTemp = (event) => {
    console.log("decTemp:", event);
    temp -= 1;
    newTemp(temp);
};
const changeCity = () => {
    const inputName = document.getElementById("cityInput").value;
    const headerCityName = document.getElementById("headerCityName");
    headerCityName.textContent = inputName;
};

const resetCity = () => {
    const cityInput = document.getElementById("cityInput");
    cityInput.value = "Atlanta";
    changeCity();
};

const dt = new Date();
document.getElementById('date-time').innerHTML=dt;

const registerEventHandlers = (event) => {
    newTemp(temp);
    console.log("newTemp:", event);
    const increaseTempControl = document.getElementById("incTemp");
    increaseTempControl.addEventListener("click", incTemp);
    
    const decreaseTempControl = document.getElementById("decTemp");
    decreaseTempControl.addEventListener("click", decTemp);

    changeCity();
    const cityInput = document.getElementById("cityInput");
    cityInput.addEventListener("change", changeCity);

    const cityResetBtn = document.getElementById("cityReset");
    cityResetBtn.addEventListener("click", resetCity);

    changeSky();
    const sky_change = document.getElementById("sky_change");
    sky_change.addEventListener("change", changeSky);

};
document.addEventListener("DOMContentLoaded", registerEventHandlers);
