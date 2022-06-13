// const axios = require('axios');

// axios
//   .get('https://dog.ceo/api/breeds/list/all')
//   .then(() => {
//     console.log('success!');
//   })
//   .catch(() => {
//     console.log('error!');
//   });


// buttons for tempreture up and down 
let btnAdd = document.querySelector('#increment');
let btnSubstract = document.querySelector('#decrement')
let tempContainer=document.querySelector('#tempContainer')


const increment = ()=>{state.temp+=1;
  tempContainer.textContent=`${state.temp}`;
  changeLandscape();
}
const decrement = () =>{state.temp-=1;
  tempContainer.textContent=`${state.temp}`;
  changeLandscape();
}

btnAdd.addEventListener('click',increment );
btnSubstract.addEventListener('click',decrement );



// Update name of the city
const updateCityName = () => {
  let cityName = document.querySelector('#citynam');
  let inputName= document.querySelector('#input').value;
  state.city = inputName;
  cityName.textContent = state.city;
};
const cityNameInput = document.getElementById('input');
cityNameInput.addEventListener('input', updateCityName);

// Reset name of the city
const state={city:'Tehran',
temp:70}
const reset = () => {
  const cityName = document.getElementById('input');
  cityName.value = 'Tehran';
  updateCityName();
};
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', reset);

// With updated sky change the garden's sky

const changeSky = () => {
  let selectedSky = document.getElementById('skys');
  let skyOption = selectedSky.options[selectedSky.selectedIndex].text;

  let skyContainer=document.getElementById('garden-sky')
  let currentSky ='🌈☀☀☀☀🌝🌝🌝🌝☀☀☀☀☀🌈'
  if (skyOption === 'Sunny') {
    currentSky = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
  } else if (skyOption === 'Cloudy') {
    currentSky = '☁️☁️ ☁️ ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
  } else if (skyOption === 'Rainy') {
    currentSky = '🌧🌈⛈🌧🌧💧⛈🌧🌦🌧💧🌧🌧';
  } else if (skyOption === 'Snowy') {
    currentSky = '🌨❄️🌨🌨❄️❄️🌨❄️🌨❄️❄️🌨🌨';
  }
  skyContainer.textContent = currentSky;
};
const changeUpSky = document.getElementById('skys');
changeUpSky.addEventListener('change', changeSky);
 
// With updated temp change the garden's landscape

const changeLandscape = () => {
  temp=state.temp
  let tempContainer=document.getElementById('tempContainer')
  let landscapeContainer=document.getElementById('ground')
  let currentLandscape ='✨✨✨✨✨🌏🌏🌏🌏🌏'
  if (temp>80) {
    currentLandscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂";
    tempContainer.style.backgroundColor = 'red';
  } else if (temp>=70) {
    currentLandscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
    tempContainer.style.backgroundColor = 'orange';
  } else if (temp>=60) {
    currentLandscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
    tempContainer.style.backgroundColor = 'yellow';
  } else if (temp<=59) {
    currentLandscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    tempContainer.style.backgroundColor = 'green';
  }
  landscapeContainer.textContent = currentLandscape;
};
const changeGround = document.getElementById('ground');
changeGround.addEventListener('change', changeSky);

 


