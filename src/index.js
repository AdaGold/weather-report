"use strict";

const state = {
    temp: 80
}

const currentTemp = document.getElementById('currentTemp');

// buttons
const incrementButton = document.getElementById('increaseTempButton');
const decrementButton = document.getElementById('decreaseTempButton');
const resetButton = document.getElementById('resetButton');

//emoji
const seasonalEmoji = document.getElementById('seasonalEmoji');
// const realtimeTempButton = document.getElementById('realtimeTempButton');

const updateTemp = () => {
    currentTemp.textContent = state.temp
}

const incrementTemp = () => {
    state.temp += 1
    updateTemp()
    alterTextColor()
}

const decrementTemp = () => {
    state.temp -= 1
    updateTemp()
    alterTextColor()
}

// Wave 5
let skyColor = document.getElementById('skyColor')
let select = document.getElementById('sky')

const alterSky = () => {
    let text = select.options[select.selectedIndex].text;
    if (text === "Sunny"){
        return skyColor.style.backgroundColor = "yellow"
    } else if (text === "Cloudy"){
        return skyColor.style.backgroundColor = "lightgray"
    } else if (text === "Rainy"){
        return skyColor.style.backgroundColor = "lightblue"
    } else if (text === "Snowy"){
        return skyColor.style.backgroundColor = "coral"
    }
    console.log("background color did not change")
}


const registerEventHandlers = () => {
    incrementButton.addEventListener('click', incrementTemp);
    decrementButton.addEventListener('click', decrementTemp);
    // realtimeTempButton.addEventListener('click',)
    select.addEventListener('change', alterSky);
    input.addEventListener('change', getLatLon);
    resetButton.addEventListener('click', defaultDisplayName)
}

document.addEventListener("DOMContentLoaded", registerEventHandlers);

const alterTextColor = () => {
    if (state.temp > 80){
        console.log('changing to red')
        seasonalEmoji.textContent = '🔥🔥🔥🔥🔥🔥🔥'
        return currentTemp.style.color = 'red'
    } else if (state.temp >= 70){
        console.log('changing to orange')
        seasonalEmoji.textContent = '🌻🌻🌻🌻🌻🌻🌻'
        return currentTemp.style.color = 'orange'
    } else if (state.temp >= 60){
        console.log('changing to yellow')
        seasonalEmoji.textContent = '🍄🍄🍄🍄🍄🍄🍄'
        return currentTemp.style.color = 'yellow'
    } else if (state.temp >= 50){
        seasonalEmoji.textContent = '🍁🍁🍁🍁🍁🍁🍁'
        console.log('changing to green')
        return currentTemp.style.color = 'green'
    } else if (state.temp <= 49){
        seasonalEmoji.textContent = '❄️'
        console.log('changing to teal')
        return currentTemp.style.color = 'teal'
    }
    console.log('text color did not change')
}

//axios request to the api JSON object, 

//could create a script file that contains all the api calls, then import the js files into 


//convert kevlin to farenheit helper function
const kelvinToFaren = (k) => {
    let faren = Math.floor(1.8 * (k - 273) + 32)
    return faren 
    
}


const getTemp = (locationData) => {
    
    axios
    .get('http://localhost:5000/weather', {
        params: {
            lat: locationData.lat,
            lon: locationData.lon,
        },
    })
    .then((response) => {
        let tempInKelvin = response.data.current.temp;
        console.log(tempInKelvin)
        console.log (typeof tempInKelvin)
        let realTimeTemp = kelvinToFaren(tempInKelvin);
        console.log(realTimeTemp)
        state.temp = realTimeTemp;
        currentTemp.textContent = `${state.temp}°F`
    })
    .catch((error) => {
        console.log(
            'not workingggg error- weather'
        )
    })
}


//get input by query selector
const input = document.querySelector('input');

let locationDisplay = document.getElementById('location')

// WAVE 6
// need to work on this..... buggy
const defaultDisplayName = (event) => {
    // nathaniel's magic
    event.preventDefault()
    locationDisplay.textContent = "New York City"
    currentTemp.textContent = '80'
    console.log('strugglez')
}

const getLatLon = () => {
    let locationName = input.value
    console.log(locationName);

    // changing display text to the input text
    locationDisplay.textContent = locationName

    let lat, lon, locationData;
    console.log(lat, lon, locationData);
    axios 
        .get('http://localhost:5000/location', {
            params: {
                q: locationName,
            },
        })
        .then((response) => {
            lat = response.data[0].lat;
            lon = response.data[0].lon;
            locationData = { lat,lon }
            console.log(locationData)
            getTemp(locationData)
        })
        .catch((error) => {
            console.log(
                'not workingggg error'
            )
        })
}

