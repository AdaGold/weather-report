"use strict";
let temp_value = 72

// reset to default city name
const resetCity = () => {
    const cityContainer = document.getElementById("cityNameInput");
    cityContainer.value = "Seattle 🌧";
    // reflect that reset on the header
    updateCity();
};


const registerEventHandlers = function() {
    updateTemp(temp_value);

    const incButton = document.querySelector("#increaseTemp");
    increaseButton.addEventListener("click", function() {
        temp_value += 1;
        updateTemp(temp_value);
    });

    const decButton = document.querySelector("#decreaseTemp");
    decreaseButton.addEventListener("click", function() {
        temp_value -= 1;
        updateTemp(temp_value);
    })
}



// registerEventHandlers()

document.addEventListener("DOMContentLoaded", registerEventHandlers);