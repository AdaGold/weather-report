import 'regenerator-runtime/runtime';
import axios from 'axios';
const temp_max = 105 
const temp_min = -1


const increaseTemp = () => {
    let temp = document.querySelector("#temp")
    let tempValue=  temp.textContent;
    if(tempValue < temp_max ){
        tempValue ++;
    };
    temp.textContent= tempValue
};
const decreaseTemp = () => {
    let temp = document.querySelector('#temp')
    let tempValue = temp.textContent
    if(tempValue > temp_min){
        tempValue -=1
    };
temp.textContent = tempValue
};
const colorTemp = () => {
    let temp = document.querySelector('#temp')
    let tempValue = temp.textContent
    if (tempValue >= 80){
        temp.style.color = "red";
        document.body.style.backgroundImage = "url('styles/so-hot-oh-my.gif')";
    }
    else if(tempValue >= 70){
        temp.style.color = "orange";
        document.body.style.backgroundImage = "url('styles/sunny.gif')";
    
    }
    else if(tempValue >= 60){
        temp.style.color = "yellow";
        document.body.style.backgroundImage = "url('styles/peekaboo-sunshine.gif')";
    }
    else if(tempValue >= 50){
        temp.style.color = "blue";
        document.body.style.backgroundImage = "url('styles/totally-spies-sam.gif')";
    }
    else{
        temp.style.color = "blue";
        document.body.style.backgroundImage = "url('styles/spongebob-patrick-star.gif')";
    }
}

const userInput = () => {
	var inputValue = document.getElementById("search").value;
    document.getElementById("city_name").innerHTML = inputValue;

}
const reseT = () => {
    let searchBar = document.getElementById("search")
    let cityName = document.getElementById("city_name")
    searchBar.value = 'Atlanta'
    cityName.textContent = 'Atlanta'
}

const changeSky = () => {
    let sky = document.getElementById("skySelect").value
    let carD = document.getElementById("card")
    if(sky === "sunny"){
        carD.style.backgroundImage = "url('styles/istockphoto-545096038-612x612.jpg')";
    }
    else if(sky === "cloudy"){
        carD.style.backgroundImage = "url('styles/istockphoto-1023201682-612x612.jpg')";
    }
    else if(sky === "rainy"){
        carD.style.backgroundImage = "url('styles/istockphoto-466693533-612x612.jpg')"
    }
    else if(sky === "snowy"){
        carD.style.backgroundImage = "url('styles/istockphoto-490686800-612x612.jpg')"
    }


}


const registerEventHandler = () => {
    const upArrow = document.querySelector("#arrowUp");
    const downArrow = document.querySelector("#arrowDown");
    var inputValue = document.getElementById("search");
    const update = document.getElementById("upDate")
    const skySelector = document.getElementById("skySelect")
    const resetButton = document.getElementById("reset")
    upArrow.addEventListener("click", increaseTemp);
    downArrow.addEventListener("click",decreaseTemp);
    upArrow.addEventListener("click", colorTemp)
    downArrow.addEventListener("click",colorTemp)
    inputValue.addEventListener("keyup",userInput)
    update.addEventListener("click",Update)
    skySelector.addEventListener("change", changeSky)
    resetButton.addEventListener("click",reseT)
};


// testing calling request using stored city value.
const Update = () => {
let city = document.getElementById("search").value;
let lat;
let lon;
axios.get(`https://weatherapibrooke.herokuapp.com/location?q=${city}`)
.then(function (response) {
    // handle success
    lat = response.data[0]['lat'];
    lon = response.data[0]['lon'];
    callWeather(lat,lon)
})
.catch(function (error) {
    // handle error
    console.log(error)
})
}

// create function call for weather request

const callWeather = (lat,lon) => {

axios.get(`https://weatherapibrooke.herokuapp.com/weather?lat=${lat}&lon=${lon}&units=imperial`)
.then(function(response) {

    let temp = document.querySelector('#temp')
    let feelsLike = document.querySelector('#feeL')
    console.log(response.data)
    temp.textContent = Math.round(response.data['main']['temp'])
    feelsLike.textContent = Math.round(response.data['main']['feels_like'])
    colorTemp()
})
.catch(function (error) {
    // handle error
    console.log(error);
});
}
document.addEventListener("DOMContentLoaded", registerEventHandler);