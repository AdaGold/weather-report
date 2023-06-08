const state = {
    temperature: 40
};


const tempText = document.querySelector("#tempValue")
const landscapeText = document.querySelector("#landscape")

const increaseTemp = () => {
    state.temperature += 1;
    tempText.innerHTML = `${state.temperature}`;
    if (state.temperature >= 80) {
        landscapeText.innerHTML = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
    } else if (state.temperature <= 79 && state.temperature > 69) {
        landscapeText.innerHTML = '"🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"';
    } else if (state.temperature <=69 && state.temperature > 59) {
        landscapeText.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";        
    } else if (state.temperature <=59) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"; 
    }    
};

const decreaseTemp = () => {
    state.temperature -= 1;
    tempText.innerHTML = `${state.temperature}`;
    if (state.temperature >= 80) {
        landscapeText.innerHTML = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    }else if (state.temperature <= 79 && state.temperature > 69) {
        landscapeText.innerHTML = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷";
    } else if (state.temperature <=69 && state.temperature > 59) {
        landscapeText.innerHTML = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";        
    } else if (state.temperature <=59) {
        landscapeText.innerHTML = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"; 
    }    
};

const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTempControl");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTempControl");
    decreaseTempButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);

const getCurrentTime = () => {
    const currentDate = new Date();
    console.log("getCurrentTime");
    return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}
console.log(`The current time is ${getCurrentTime()}.`);