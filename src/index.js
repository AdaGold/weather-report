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

const switchImage = ()=> {
    let selectedImage = document.myForm.switch.options[document.myForm.switch.selectedIndex].value;
    document.display.src = "assets/" + selectedImage + ".png";
}


// const chooseSkySelect = document.getElementById("#sky-dropdown");

// chooseSkySelect.addEventListener("change", function (e) {
//     let sky = e.target.options[e.target.selectedIndex].getAttribute("rel");
//     const skyImg = document.getElementById("display");

//     skyImg.src = skyImg;
// });


const registerEventHandlers = () => {
    updateTemp(temp);

    const increaseTempControl = document.getElementById("up");
    increaseTempControl.addEventListener("click", increaseTemp);
    
    const decreaseTempControl = document.getElementById("down");
    decreaseTempControl.addEventListener("click", decreaseTemp);

    updateCityName();
    const cityNameInput = document.getElementById("city-input");
    cityNameInput.addEventListener("input", updateCityName);

};

document.addEventListener("DOMContentLoaded", registerEventHandlers);


