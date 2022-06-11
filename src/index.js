'use strict';
import 'regenerator-runtime/runtime';
import axios from 'axios';

const registerEventHandlers = () => {
  document.addEventListener('DOMContentLoaded', displayWeatherAtLocation);
  document.getElementById("down-temp").addEventListener('click', () => changeTemp(-1));
  document.getElementById("up-temp").addEventListener('click', () => changeTemp(1));
  document.getElementById("city-search-input").addEventListener("search", changeCity)
  document.getElementById("city-search-input").addEventListener("search", changeWeatherAsync);
  document.getElementById("selected-location").addEventListener("click", changeWeatherAsync);
  document.getElementById("current-location").addEventListener("click", displayWeatherAtLocation);
  document.getElementById("city-search-button").addEventListener("click", toggleFunction)
  const skyConditions = document.getElementsByClassName("weather-dropdown-item");
  for (const condition of skyConditions){
    condition.addEventListener("click", () => toggleSky(condition.textContent))
  };
  document.getElementById("toggle-f-c").addEventListener('click', switchFAndC);
};

const FToC = (F) => {
  return (F - 32) * .5556
} 

const CToF = (C) => {
  return (C * 1.8) + 32
} 

const switchFAndC = () => {
  if (state.tempMetric === "F"){
    state.tempMetric = "C"
    state.temperatureC = Math.round(FToC(state.temperatureF))
    document.getElementById("temp").innerHTML = `${state.temperatureC}&deg;`;
  }else{
    state.tempMetric = "F"
    document.getElementById("temp").innerHTML = `${state.temperatureF}&deg;`;
  }
}

document.addEventListener('DOMContentLoaded', () => {registerEventHandlers(); displayWeatherAtLocation();});

const state = {
  tempMetric: "F",
  temperatureF: 60,
  temperatureC: 15.5568,
  cityName: 'Tokyo',
  weatherDescription: "scattered clouds",
  weatherIconName: "bi-cloud-lightning-rain",
  oldIconName: null,
  skyImgUrl: null,
  currentLat: null,
  currentLon: null 
}

const weatherMainToIcon = {"THUNDERSTORM": ["bi-cloud-lightning-rain", "/ada-project-docs/assets/thunderstorm_sky.jpg"], "DRIZZLE": ["bi-cloud-drizzle", "/ada-project-docs/assets/rain_sky.jpg"], "RAIN": ["bi-cloud-rain", "/ada-project-docs/assets/rain_sky.jpg"], "SNOW": ["bi-cloud-snow", "/ada-project-docs/assets/snow_sky.jpg"], "MIST": ["bi-cloud-haze", "/ada-project-docs/assets/mist_sky.jpg"], "SMOKE": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "HAZE": ["bi-cloud-haze", "/ada-project-docs/assets/mist_sky.jpg"], "DUST": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "FOG": ["bi-cloud-haze", "/ada-project-docs/assets/mist_sky.jpg"], "SAND": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "DUST": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "ASH": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "SQUALL": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "TORNADO": ["bi-cloud-fog", "/ada-project-docs/assets/mist_sky.jpg"], "CLEAR": ["bi-sun", "/ada-project-docs/assets/clear_sky.jpg"], "CLOUDS": ['bi-clouds', "/ada-project-docs/assets/broken_clouds_sky.jpg"]}

const displayWeatherAtLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    state.currentLat = latitude;
    state.currentLon = longitude;
    console.log("got geolocation", position)
    axios.get("https://weather-report-server.herokuapp.com/weather", {
        params: {
          lat: state.currentLat,
          lon: state.currentLon
        },
      })
      .then((weatherResponse) => {
        //Store response data
        console.log(weatherResponse.data)
        state.temperatureF = Math.round(weatherResponse.data.current.temp)
        state.temperatureC = FToC(state.temperatureF)
        state.weatherDescription = weatherResponse.data.current.weather[0].description;
        state.oldIconName = state.weatherIconName;
        state.weatherIconName = weatherMainToIcon[weatherResponse.data.current.weather[0].main.toUpperCase()][0];
        state.skyImgUrl = weatherMainToIcon[weatherResponse.data.current.weather[0].main.toUpperCase()][1];
        console.log('successfully stored response data!', weatherResponse.data);
        axios.get("https://weather-report-server.herokuapp.com/city", {
          params: {
            lat: state.currentLat,
            lon: state.currentLon
          },
        })
        .then((cityResponse) => {
          console.log("got the city name", cityResponse.data)

          state.cityName = cityResponse.data.address.city || cityResponse.data.address.region || cityResponse.data.address.county
                  //Update UI
          document.getElementById("temp").innerHTML = `${state.temperatureF}&deg;`;
          checkTextColorChange();
          checkSeasonChange();
          setWeatherIcon()
          setSky();
          setWeatherDescription();
          document.getElementById("city-name").textContent = state.cityName
          console.log('successfully updated UI!');

        })
        .catch((error) => {
          console.log("error with getting city", error)
        });
      })
      .catch((error) => {
        console.log('error!', error)
      });
  });
};

const changeTemp = (change) => {
  state.temperatureF += change
  document.getElementById("temp").innerHTML = `${state.temperatureF}&deg;`;
  checkTextColorChange();
  checkSeasonChange();
};

const checkSeasonChange = () => {
  if (state.temperatureF <= 32){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/winter_landscape.png";
  } else if (32 < state.temperatureF && state.temperatureF < 56){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/fall_landscape.png";
  } else if (56 <= state.temperatureF  && state.temperatureF < 75){
    document.getElementById("temp-img").src = "/ada-project-docs/assets/spring_landscape.png";
  } else if (75 <= state.temperatureF  && state.temperatureF < 95) {
    document.getElementById("temp-img").src = "/ada-project-docs/assets/summer_landscape.png";
  }else {
    document.getElementById("temp-img").src = "/ada-project-docs/assets/hottest_landscape.png";
  }
};

const checkTextColorChange = () => {
  if (state.temperatureF <= 49){
    document.getElementById("temp").style.color = "teal";
  }else if (state.temperatureF >= 50 && state.temperatureF < 60){
    document.getElementById("temp").style.color = "green";
  }else if (state.temperatureF >= 60 && state.temperatureF < 70){
    document.getElementById("temp").style.color = "yellow";
  } else if (state.temperatureF >= 70 && state.temperatureF < 80){
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

const changeWeatherAsync = async () => {
  const q = state.cityName;
  try{
    let response = await axios.get("https://weather-report-server.herokuapp.com/location", {
      params: {
        q
      }
    });
    const lat = response.data[0].lat;
    const lon = response.data[0].lon;
    console.log('success!', response.data);
    try{
      let weatherResponse = await axios.get("https://weather-report-server.herokuapp.com/weather", {
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

const updateState = (weatherResponse) => {
  state.temperatureF = Math.round(weatherResponse.data.current.temp);
  state.weatherDescription = weatherResponse.data.current.weather[0].description;
  state.oldIconName = state.weatherIconName;
  state.weatherIconName = weatherMainToIcon[weatherResponse.data.current.weather[0].main.toUpperCase()][0];
  state.skyImgUrl = weatherMainToIcon[weatherResponse.data.current.weather[0].main.toUpperCase()][1];
  console.log('successfully stored response data!', weatherResponse.data);
}

const updateUI = () => {
  document.getElementById("temp").innerHTML = `${state.temperatureF}&deg;`;
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
  document.getElementById("wdescription").textContent = state.weatherDescription;
}

const toggleSky = (condition) => {
  state.weatherDescription = condition; 
  setWeatherDescription();
  state.skyImgUrl = weatherMainToIcon[condition.toUpperCase()][1];
  setSky();
  state.oldIconName = state.weatherIconName;
  state.weatherIconName = weatherMainToIcon[condition.toUpperCase()][0];
  setWeatherIcon();
};


// const changeWeather = () => {
//   const q = state.cityName;

  // axios.get("https://weather-report-server.herokuapp.com/location", {
  //   params: {
  //     q
  //   }
  // })
  // .then((response) => {
  //   const lat = response.data[0].lat;
  //   const lon = response.data[0].lon;
  //   console.log('success!', response.data);
  //   axios.get("https://weather-report-server.herokuapp.com/weather", {
  //     params: {
  //       lat,
  //       lon
  //     }
  //   })
    // .then((response) => {
    //   //Store response data
    //   state.temperatureF = Math.round(response.data.current.temp)
    //   state.weatherDescription = response.data.current.weather[0].description;
    //   state.oldIconName = state.weatherIconName;
    //   state.weatherIconName = weatherMainToIcon[response.data.current.weather[0].main][0];
    //   state.skyImgUrl = weatherMainToIcon[response.data.current.weather[0].main][1];
    //   console.log('successfully stored response data!', response.data);
    // })
    // .then(() => {
    //   //Update UI
    //   document.getElementById("temp").textContent = `${state.temperatureF}&deg;`;
    //   checkTextColorChange();
    //   checkSeasonChange();
    //   setWeatherIcon()
    //   setSky();
    //   setWeatherDescription();
    //   console.log('successfully updated UI!');
    // })
    // .catch((error) => {
    //   console.log('error!', error)
    // });
//   })
//   .catch((error) => {
//     console.log('error!', error)
//   });
// }
