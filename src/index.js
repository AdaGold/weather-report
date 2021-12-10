let temp = 55;

const updateTemp = temp => {
    const tempContainer = document.getElementById("temp");
    tempContainer.textContent = temp;
}
const increaseTemp = () => {
    temp += 1;
    updateTemp(temp);
}
const decreaseTemp = () => {
    temp -= 1;
    updateTemp(temp);
}

const updateCityName = () => {
    const inputName = document.getElementById("city-input").value;
    const cityName = document.getElementById("city-name");
    cityName.textContent = inputName;
};

const registerEventHandlers = () => {
    updateTemp(temp);

    const increaseTempControl = document.getElementById("up");
    increaseTempControl.addEventListener("click", increaseTemp);
    
    const decreaseTempControl = document.getElementById("down");
    decreaseTempControl.addEventListener("click", decreaseTemp);

    updateCityName();
    const cityNameInput = document.getElementById("city-input");
    cityNameInput.addEventListener("input", updateCityName)

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


