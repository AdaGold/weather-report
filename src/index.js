function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World";
    console.log("myFunctionCalled");
  };
  function currentTemp() {
    document.getElementById("demo").innerHTML = "12";
    console.log("myFunctionCalled");
  };

const getCurrentTime = () => {
    const currentDate = new Date();
    console.log("getCurrentTime");
    return currentDate.getHours() + ":" + currentDate.getMinutes() + ":" + currentDate.getSeconds();
}
console.log(`The current time is ${getCurrentTime()}.`);

// const increaseTempControl = () => {
//     const increaseTemp = document.createElement("span");
//     const tempContainer = document.querySelector("#tempContainer");

// }

const registerEventHandlers = () => {
    console.log("registerEventHandlers");
    document.getElementById("currentTempButton").addEventListener("click", currentTemp),
    document.getElementById("increaseTempControl").addEventListener("click", increaseTemp),
    document.getElementById("decreaseTempControl").addEventListener("click", decreaseTemp)
};

document.addEventListener("DOMContentLoaded", registerEventHandlers);