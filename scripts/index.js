const state = { 
    tempCount: 50} 

const addDegree = (event) => {
    state.tempCount += 1;
    const tempCountContainer = document.querySelector("#tempCount")
    tempCountContainer.textContent = `Temperature: ${state.tempCount}`;
};

const subtractDegree = (event) => {
    state.tempCount -= 1; 
    const tempCountContainer = document.querySelector("#tempCount")
    tempCountContainer.textContent = `Temperature: ${state.tempCount}`;
};

const changeColor = (val) => {
    const tempText = document.querySelector('tempCount'); 
    let color = "grey"; 

    if (val >= 80) {
        color = "red";
    } else if (val > 70) {
        color = "orange";
    } else if (val > 60) {
        color = "yellow";
    } else if (val > 50) {
        color = "green";
    } else {
        color = "blue"
    }

    tempText.style.color = color;
}

const registerEventHandlers = (event) => {
    const raiseTempButton = document.querySelector("#raiseTempButton");
    raiseTempButton.addEventListener("click", addDegree);

    const lowerTempButton = document.querySelector("#lowerTempButton");
    lowerTempButton.addEventListener("click", subtractDegree);

    const changeTextColor = document.querySelector("#tempCount");
    changeTextColor.addEventListener("click", changeColor);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);