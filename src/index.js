let temp = 50;

const changeSky = () => {
    const inputSky = document.getElementById("sky_change").value;
    const skyContainer = document.getElementById("sky");
    let sky = "";
    if (inputSky === "Sunny") {
        sky = "☁️☁️☁️ ☀️ ☁️☁️☁️";
    } else if (inputSky === "Cloudy") {
        sky = "☁️☁️  ☁️☁️  ☁️☁️";
    } else if (inputSky === "Rainbow") {
        sky = "☁️☁️🌈☁️☁️🌈☁️☁️";
    } else if (inputSky === "Snowy") {
        sky = "☁️☁️❄️☁️☁️❄️☁️☁️"
    }
    skyContainer.textContent = sky;
};


const newTemp = temp => {
    const tempContainer = document.getElementById("temp");
    tempContainer.textContent = temp;
}
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

const changeLandscape = (currTemp) => {
    const landscapeContainer = document.getElementById("landscape");
    let landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲";
    if (currTemp >= 80) {
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    } else if (currTemp >= 70) {
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (currTemp >= 60) {
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
    }
    landscapeContainer.textContent = landscape;
}
const updateTemp = temp => {
    const tempContainer = document.getElementById("temp");
    tempContainer.textContent = temp;
    changeLandscape(temp);
}

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


const registerEventHandlers = (event) => {
    newTemp(temp);
    console.log("newTemp:", event);
    const increaseTempControl = document.getElementById("incTemp");
    increaseTempControl.addEventListener("click", incTemp);
    
    const decreaseTempControl = document.getElementById("decTemp");
    decreaseTempControl.addEventListener("click", decTemp);

    changeSky();
    const sky_change = document.getElementById("sky_change");
    sky_change.addEventListener("change", changeSky);


    changeCity();
    const cityInput = document.getElementById("cityInput");
    cityInput.addEventListener("change", changeCity);

    const cityResetBtn = document.getElementById("cityReset");
    cityResetBtn.addEventListener("click", resetCity);

};
document.addEventListener("DOMContentLoaded", registerEventHandlers);
