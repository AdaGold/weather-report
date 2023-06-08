const getCurrentTime = () => {
    const currentDate = new Date();
    console.log("getCurrentTime");
    return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}
console.log(`The current time is ${getCurrentTime()}.`);

const registerEventHandlers = () => {
    console.log("registerEventHandlers");
    document.getElementById("currentTempButton").addEventListener("click", currentTemp),
    document.getElementById("increaseTempControl").addEventListener("click", increaseTemp),
    document.getElementById("decreaseTempControl").addEventListener("click", decreaseTemp)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);