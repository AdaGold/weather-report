const state = {
    temperature: parseFloat(document.querySelector("#temperature").textContent)
};

//   const addCrab = (event) => {
//     const newCrab = document.createElement("span");
//     const crabContainer = document.querySelector("#crabContainer");
//     newCrab.textContent = "🦀";
//     crabContainer.appendChild(newCrab);

//     // Crab Count Behavior
//     state.crabCount += 1;
//     const crabCountContainer = document.querySelector("#crabCount")
//     crabCountContainer.textContent = `Crab Count: ${state.crabCount}`;
//   };

/////////// TEMP FUNCTIONS /////////////
const increaseTemp = () => {
    const tempElement = document.querySelector("#temperature")
    state.temperature += 1
    tempElement.textContent = state.temperature 
    pickSeason(state.temperature)
};

const decreaseTemp = () => {
    const tempElement = document.querySelector("#temperature")
    state.temperature -= 1
    tempElement.textContent = state.temperature
    pickSeason(state.temperature) 
};

const pickSeason = (temp) => {
    if (temp <= 45) {    
        populateGardenTemp("❄️⛸️☃️☃️❄️⛸️⛸️☃️☃️❄️⛸️⛸️☃️☃️⛸️❄️")
    }
    else if (temp > 45 && temp < 70) {    
        populateGardenTemp("🌱🌻🐝🍁🍃🍃🌻🌱🌻🐝🍁🍃🍃🌻")
    } 
    else if (temp >= 70 && temp < 85) {    
        populateGardenTemp("☀️🏖️🍦🍉☀️🏖️🍦🍉☀️🏖️🍦🍉☀️🏖️🍦🍉")
    } 
    else if (temp >= 85) {    
        populateGardenTemp("🥵🌵🌵🌵🌵🥵🥵🌵🌵🌵🌵🥵🥵🌵🌵🌵")
    };
};

const populateGardenTemp = (temp) => {
    const gardenTemp = document.createElement("span");
    const gardenTempContainer = document.querySelector("#gardenTempContainer");
    gardenTempContainer.replaceChildren()
    gardenTemp.textContent = temp;
    gardenTempContainer.appendChild(gardenTemp);
}

///////////// SKY FUNCTIONS ////////////
const populateSkyTemp = () => {
    const gardenSky = document.createElement("span");
    const gardenSkyContainer = document.querySelector("#gardenSkyContainer");
    gardenSkyContainer.replaceChildren()
    const selection = document.querySelector("#skyType").value;
    // const selection = document.querySelector(".skyType select option:checked");
    // const selection = document.querySelector(".skyType select").selectIndex;
    
    if (selection === "Sunny") {    
        gardenSky.textContent = "☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️🌞🌞🌞🌞☀️☀️☀️☀️☀️☀️☀️☀️☀️☀️"
    }
    else if (selection === "Cloudy") {    
        gardenSky.textContent = "☁️☁️☁️☁️☁️⛅⛅☁️☁️☁️☁️☁️☁️⛅⛅☁️☁️☁️☁️☁️☁️☁️⛅⛅☁️☁️☁️☁️☁️☁️"
    }
    else if (selection === "Rainy") {    
        gardenSky.textContent = "🌧️🌧️🌧️🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧️🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧️🌧️🌧️🌧️🌧️☔☔🌧️🌧️🌧️🌧️🌧️🌧️🌧️🌧️"
    }
    else if (selection === "Snowy") {    
        gardenSky.textContent = "❄️❄️❄️❄️❄️❄️❄️☃️☃️❄️❄️❄️❄️❄️❄️❄️☃️☃️❄️❄️❄️❄️❄️❄️❄️❄️☃️☃️❄️❄️❄️❄️❄️❄️❄️❄️❄❄️"
    };
    // gardenSky.textContent = "WEATHER!";
    gardenSkyContainer.appendChild(gardenSky);
};


///////////// CITY FUNCTIONS ////////////
const displayCity = (event) => {
    event.preventDefault();
    console.log("Inside DisplayCity")
    const cityDisplay = document.createElement("div");
    const cityContainer = document.querySelector("#cityContainer");
    cityContainer.replaceChildren()
    const enteredCity = document.querySelector("#city").value;
    cityDisplay.textContent = enteredCity;
    cityContainer.appendChild(cityDisplay);
    
}


const registerEventHandlers = (event) => {
    const upButton = document.querySelector("#increaseTempButton");
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.querySelector("#decreaseTempButton");
    downButton.addEventListener("click", decreaseTemp);

    const skySelect = document.querySelector("#skyType");
    skySelect.addEventListener("change", populateSkyTemp);

    const showCity = document.querySelector("#cityInput");
    showCity.addEventListener("submit", displayCity); 
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);