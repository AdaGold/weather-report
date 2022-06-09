'use strict';


const registerEventHandlers = () => {
  document.getElementById("up-temp").addEventListener('click', increaseTemp);
  document.getElementById("down-temp").addEventListener('click', decreaseTemp);
  document.getElementById("city-search-input").addEventListener("search", changeCity)
  document.getElementById("city-searh-button").addEventListener("click", toggleFunction)
  //for Drop Down Menu Search
  // let links = document.getElementsByClassName("dropdown-item")
  // for (let i = 0; i<links.length; i++){
  //   links[i].addEventListener("click", () => {
  //     document.getElementById("city-name").innerHTML = document.getElementsByClassName("dropdown-item")[i].innerHTML;
  //   })
  // }
}

document.addEventListener('DOMContentLoaded', registerEventHandlers);

const state = {
  temperature: 60
}

const increaseTemp = () => {
  state.temperature++
  document.getElementById("temp").innerHTML = `${state.temperature}&deg;`
  checkTextColorChange()
  checkSeasonChange()
};

const decreaseTemp = () => {
  state.temperature--
  document.getElementById("temp").innerHTML = `${state.temperature}&deg;`
  checkTextColorChange()
  checkSeasonChange()
};

const checkSeasonChange = () => {
  if (state.temperature <= 32){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/winter_landscape.png";
  } else if (32 < state.temperature && state.temperature < 56){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/fall_landscape.png";
  } else if (56 <= state.temperature  && state.temperature < 80){
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

const changeCity = () => {
  document.getElementById("city-name").innerHTML = document.getElementById("city-search-input").value;
};

const toggleFunction = () => {
  document.getElementById("city-search-button").classList.toggle("show");
}

//For Drop Down Menu Search
// const filterFunction = () => {
//   let input, filter, button, div, divs, i;
//   input = document.getElementById("city-search-input");
//   filter = input.value.toUpperCase();
//   button = document.getElementById("city-search-button");
//   div = document.getElementsByClassName("dropdown-menu");
//   divs = document.getElementsByClassName("dropdown-item");
//   for (i = 0; i < divs.length; i++) {
//     let txtValue = divs[i].innerHTML;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       divs[i].style.display = "";
//     } else {
//       divs[i].style.display = "none";
//     }
//   }
// }