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

const increaseTemp = () => {
    const tempElement = document.querySelector("#temperature")
    state.temperature += 1
    tempElement.textContent = state.temperature 
};

const decreaseTemp = () => {
    const tempElement = document.querySelector("#temperature")
    state.temperature -= 1
    tempElement.textContent = state.temperature 
};

const registerEventHandlers = (event) => {
    const upButton = document.querySelector("#increaseTempButton");
    upButton.addEventListener("click", increaseTemp);

    const downButton = document.querySelector("#decreaseTempButton");
    downButton.addEventListener("click", decreaseTemp);
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);