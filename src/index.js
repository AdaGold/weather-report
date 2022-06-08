'use strict';


const registerEventHandlers = () => {
  document.getElementById("up-temp").addEventListener('click', increaseTemp);
  document.getElementById("down-temp").addEventListener('click', decreaseTemp);
}

document.addEventListener('DOMContentLoaded', registerEventHandlers);

const state = {
  temperature: 60
}

const increaseTemp = () => {
  state.temperature += 1
  document.getElementById("temp").innerHTML = `${state.temperature}&deg;`
  checkTextColorChange()
  checkSeasonChange()
};

const decreaseTemp = () => {
  state.temperature -= 1
  document.getElementById("temp").innerHTML = `${state.temperature}&deg;`
  checkTextColorChange()
  checkSeasonChange()
};

const checkSeasonChange = () => {
  if (state.temperature <= 32){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/winter_landscape.png";
  } else if (32 < state.temperature && state.temperature < 60){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/fall_landscape.png";
  } else if (60 <= state.temperature  && state.temperature < 80){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/spring_landscape.png";
  } else {
    document.getElementById("temp-img").src = "/ada-project-docs/assets/summer_landscape.png";
  }
};

const checkTextColorChange = () => {
  if (state.temperature <= 49){
    document.getElementById("temp").style.color = "teal";
  }else if (state.temperature >= 50 && state.temperature < 60){
    document.getElementById("temp").style.color = "green";
  }else if (state.temperature >= 60 && state.temperature < 70){
    document.getElementById("temp").style.color = "yellow";
  } else if (state.temperature >= 70 && state.temperature < 80){
    document.getElementById("temp").style.color = "orange";
  } else{
    document.getElementById("temp").style.color = "red";
  }
};