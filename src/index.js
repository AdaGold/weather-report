'use strict';

const state = {
  temp: 80,
  tempColor: 'red',
  tempBackground: 'url(../src/images/sunny.png)',
};

const temp = document.getElementById('temp');
temp.textContent = state.temp + '°';
temp.style.color = state.tempColor;

const backColor = document.getElementsByTagName('main')[0];
backColor.style.backgroundImage = state.tempBackground;

const changetempColor = () => {
  if (state.temp >= 80) {
    state.tempColor = 'red';
    temp.style.color = state.tempColor;
  } else if (state.temp > 69 && state.temp < 80) {
    state.tempColor = 'orange';
    temp.style.color = state.tempColor;
  } else if (state.temp < 70 && state.temp > 59) {
    state.tempColor = 'yellow';
    temp.style.color = state.tempColor;
  } else if (state.temp < 60 && state.temp > 49) {
    state.tempColor = 'green';
    temp.style.color = state.tempColor;
  } else if (state.temp < 50) {
    state.tempColor = 'teal';
    temp.style.color = state.tempColor;
  }
};

const changeBackImg = () => {
  if (state.temp >= 80) {
    state.tempBackground = 'url(../src/images/sunny.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'black';
  } else if (state.temp < 80 && state.temp > 69) {
    state.tempBackground = 'url(../src/images/spring.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'white';
  } else if (state.temp < 70 && state.temp > 59) {
    state.tempBackground = 'url(../src/images/cool.png)';
    backColor.style.backgroundImage = state.tempBackground;
    backColor.style.color = 'white';
  } else if (state.temp < 60) {
    state.tempBackground = 'url(../src/images/snow.png)';
    backColor.style.color = 'white';
    backColor.style.backgroundImage = state.tempBackground;
  }
};

const increaseTemp = () => {
  state.temp++;
  temp.textContent = `${state.temp}°`;
  changetempColor();
  changeBackImg();
};

const decreaseTemp = () => {
  state.temp--;
  temp.textContent = `${state.temp}°`;
  changetempColor();
  changeBackImg();
};

const registerEventHandlers = () => {
  const upArrow = document.getElementById('arrow-up');
  upArrow.addEventListener('click', increaseTemp);

  const downArrow = document.getElementById('arrow-down');
  downArrow.addEventListener('click', decreaseTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
