'use strict';

const registerEventHandlers = () => {
  document.getElementById("down-temp").addEventListener('click', () => changeTemp(-1));
  document.getElementById("up-temp").addEventListener('click', () => changeTemp(1));
  document.getElementById("city-search-input").addEventListener("search", changeCity)
  document.getElementById("city-search-input").addEventListener("search", changeWeatherAsync)
  document.getElementById("city-search-button").addEventListener("click", changeWeatherAsync)
  document.getElementById("city-search-button").addEventListener("click", toggleFunction)
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
  temperature: 60,
  cityName: 'Tokyo',
  weatherDescription: "scattered clouds",
  weatherIconName: "bi-cloud-lightning-rain",
  oldIconName: "hello",
  skyImgUrl: null  
}

const changeTemp = (change) => {
  state.temperature += change
  document.getElementById("temp").innerHTML = `${state.temperature}&deg;`
  checkTextColorChange()
  checkSeasonChange()
};

const checkSeasonChange = () => {
  if (state.temperature <= 32){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/winter_landscape.png";
  } else if (32 < state.temperature && state.temperature < 56){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/fall_landscape.png";
  } else if (56 <= state.temperature  && state.temperature < 75){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/spring_landscape.png";
  } else if (75 <= state.temperature  && state.temperature < 95) {
    document.getElementById("temp-img").src = "/ada-project-docs/assets/summer_landscape.png";
  }else {
    document.getElementById("temp-img").src = "/ada-project-docs/assets/hottest_landscape.png";
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
  state.cityName = document.getElementById("city-search-input").value;
  document.getElementById("city-name").textContent = state.cityName;
};

const toggleFunction = () => {
  document.getElementById("city-search-button").classList.toggle("show");
}


const weatherMainToIcon = {"Thunderstorm": ["bi-cloud-lightning-rain", "/ada-project-docs/assets/thunderstorm_sky.jpg"], "Drizzle": ["bi-cloud-drizzle", "/ada-project-docs/assets/rain_sky.jpg"], "Rain": ["bi-cloud-rain", "/ada-project-docs/assets/rain_sky.jpg"], "Snow": ["bi-cloud-snow", "/ada-project-docs/assets/snow_sky.jpg"], "Mist": ["bi-cloud-haze", "/ada-project-docs/assets/mist_sky.jpg"], "Smoke": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "Haze": ["bi-cloud-haze", "/ada-project-docs/assets/mist_sky.jpg"], "Dust": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "Fog": ["bi-cloud-haze", "/ada-project-docs/assets/mist_sky.jpg"], "Sand": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "Dust": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "Ash": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "Squall": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "Tornado": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "Clear": ["bi-sun", "/ada-project-docs/assets/clear_sky.jpg"], "Clouds": ['bi-clouds', "/ada-project-docs/assets/broken_clouds_sky.jpg"]}

const changeWeatherAsync = async () => {
  const q = state.cityName;
  try{
    let response = await axios.get("http://localhost:5000/location", {
      params: {
        q
      }
    });
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    console.log('success!', response.data);
    try{
      let weatherResponse = await axios.get("http://localhost:5000/weather", {
        params: {
          lat,
          lon
        }
      });
        updateState(weatherResponse);
        updateUI();
      }catch(error){
        console.log('weather error!', error)
      }
  }catch(error){
    console.log('location error', error)
  };
};
// const changeWeather = () => {
//   const q = state.cityName;

  // axios.get("http://localhost:5000/location", {
  //   params: {
  //     q
  //   }
  // })
  // .then((response) => {
  //   const lat = response.data[0].lat;
  //   const lon = response.data[0].lon;
  //   console.log('success!', response.data);
  //   axios.get("http://localhost:5000/weather", {
  //     params: {
  //       lat,
  //       lon
  //     }
  //   })
    // .then((response) => {
    //   //Store response data
    //   state.temperature = Math.round(response.data.current.temp)
    //   state.weatherDescription = response.data.current.weather[0].description;
    //   state.oldIconName = state.weatherIconName;
    //   state.weatherIconName = weatherMainToIcon[response.data.current.weather[0].main][0];
    //   state.skyImgUrl = weatherMainToIcon[response.data.current.weather[0].main][1];
    //   console.log('successfully stored response data!', response.data);
    // })
    // .then(() => {
    //   //Update UI
    //   document.getElementById("temp").innerHTML = `${state.temperature}&deg;`;
    //   checkTextColorChange();
    //   checkSeasonChange();
    //   setWeatherIcon()
    //   setSky();
    //   setWeatherDescription();
    //   console.log('successfully updated UI!');
    // })
//     .catch((error) => {
//       console.log('error!', error)
//     });
//   })
//   .catch((error) => {
//     console.log('error!', error)
//   });
// }

const updateState = (weatherResponse) => {
  state.temperature = Math.round(weatherResponse.data.current.temp);
  state.weatherDescription = weatherResponse.data.current.weather[0].description;
  state.oldIconName = state.weatherIconName;
  state.weatherIconName = weatherMainToIcon[weatherResponse.data.current.weather[0].main][0];
  state.skyImgUrl = weatherMainToIcon[weatherResponse.data.current.weather[0].main][1];
  console.log('successfully stored response data!', weatherResponse.data);
}

const updateUI = () => {
  document.getElementById("temp").innerHTML = `${state.temperature}&deg;`;
  checkTextColorChange();
  checkSeasonChange();
  setWeatherIcon();
  setSky();
  setWeatherDescription();
  console.log('successfully updated UI!');
}

const setSky = () => {
  document.body.style.background = `url(${state.skyImgUrl}) no-repeat top fixed`;
  document.body.style.backgroundSize = '100% 100%';
}
const setWeatherIcon = () => {
  document.getElementsByClassName("weather-icon")[1].classList.replace(state.oldIconName, state.weatherIconName);
}

const setWeatherDescription = () => {
  document.getElementById("wdescription").innerHTML = state.weatherDescription;
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