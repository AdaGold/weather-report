
const temp = {
    tempByDegree: 70,
  };
  

  const garden = document.querySelector('#ground-emojis');
  const tempContainer = document.querySelector('#temperature');
  
 
  const increaseTemp = () => {
    temp.tempByDegree += 1;
    tempContainer.textContent = `${temp.tempByDegree}`;
    let color = changeTempColor();
    tempContainer.className = color;
  };
  
  const decreaseTemp = () => {
    tempContainer.textContent = `${temp.tempByDegree}`;
    temp.tempByDegree -= 1;
    let color = changeTempColor();
    tempContainer.className = color;
  };
  
 
  const selectSky = () => {
    const skySelector = document.querySelector('#sky');
    const skyEmojis = document.querySelector('#sky-emojis');
    if (skySelector.value === 'cloudy') {
      skyEmojis.innerHTML = '☁️☁️ 🌤☁️🌤 ☁️☁️ ☁️ 🌤 ☁️ ☁️☁️';
    } else if (skySelector.value === 'rainy') {
      skyEmojis.innerHTML = '🌧🌧🌧🌧🌧🌧🌧🌧🌧';
    } else if (skySelector.value === 'sunny') {
      skyEmojis.innerHTML = '☁️ ☁️ ☁️ ☀️ ☁️ ☁️';
    } else if (skySelector.value === 'snowy') {
      skyEmojis.innerHTML = '🌨🌨🌨🌨🌨🌨🌨';
    }
  };
  

  const changeTempColor = () => {
    let color = '';
    if (temp.tempByDegree < 49) {
      color = 'teal';
      garden.innerHTML = '🥶🥶🥶🥶🥶🥶🥶🥶🥶🥶';
    } else if (temp.tempByDegree < 59) {
      color = 'green';
      garden.innerHTML = '🌲🌲🌲🍂🌲🍁🌲🌲🍂🌲';
    } else if (temp.tempByDegree < 69) {
      color = 'yellow';
      garden.innerHTML = '☀️😎🌤 🌤 🌤 ';
    } else if (temp.tempByDegree < 79) {
      color = 'orange';
      garden.innerHTML = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
    } else {
      color = 'red';
      garden.innerHTML = '🌞🔥🌵🌞🔥🌵🌞🔥🌵🌞🔥🌵';
    }
    return color;
  };
  
  const changeCity = () => {
    const cityName = document.querySelector("#city-name");
    const getCityDefault = document.querySelector('#default-city')
    let cityText = cityName.value;
    getCityDefault.innerHTML = cityText
    console.log(cityText);
  };
  
 
  const resetCity = () => {
    document.querySelector('#city-name').value = ""
  };
  
   
  const registerEventHandlers = () => {
    const upButton = document.querySelector('#up-arrow');
    upButton.addEventListener('click', increaseTemp);
  
    const downButton = document.querySelector('#down-arrow');
    downButton.addEventListener('click', decreaseTemp);
  
    const skySelector = document.querySelector('#sky');
    skySelector.addEventListener('change', selectSky);
  
    const cityName = document.querySelector('#city-name');
    cityName.addEventListener('change', changeCity);
  
    const resetButton = document.querySelector('#reset-button');
    resetButton.addEventListener('click', resetCity);
  };
  
  registerEventHandlers();
  