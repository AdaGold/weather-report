const state = {
    temperature: 40
};


const tempText = document.querySelector("#tempValue")
const landscapeText = document.querySelector("#landscape")

const increaseTemp = () => {
    state.temperature += 1;
    tempText.innerHTML = `${state.temperature}`;
    if (state.temperature >= 80) {
        landscapeText.innerHTML = '🌵🌵🌵🌵🌵';
    }else if (state.temperature <= 80 && state.temperature > 40) {
        landscapeText.innerHTML = '🌳🌳🌳🌳🌳';
    } else if (state.temperature <=40) {
        landscapeText.innerHTML = '☃️🌲☃️🌲🌲';        
    }
};

const decreaseTemp = () => {
    state.temperature -= 1;
    tempText.innerHTML = `${state.temperature}`;
    if (state.temperature >= 80) {
        landscapeText.innerHTML = '🌵🌵🌵🌵🌵';
    }else if (state.temperature <= 80 && state.temperature > 40) {
        landscapeText.innerHTML = '🌳🌳🌳🌳🌳';
    } else if (state.temperature <=40) {
        landscapeText.innerHTML = '☃️🌲☃️🌲🌲';        
    }
};

const registerEventHandlers = () => {
    const increaseTempButton = document.querySelector("#increaseTempControl");
    increaseTempButton.addEventListener("click", increaseTemp);

    const decreaseTempButton = document.querySelector("#decreaseTempControl");
    decreaseTempButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);