'use strict';

// Selects the HTML Elements the events will occur on
const increaseTempButton = document.querySelector('#increaseTempControl');
const decreaseTempButton = document.querySelector('#decreaseTempControl');
const tempValue = document.querySelector('#tempValue');

// Makes functions to run when events occur
const state = {
	temp: 0,
};

// Sets the temperate value to state
const updateTemp = () => {
	tempValue.textContent = `${state.temp}`;
};

const tempColor = () => {
	tempValue.classList.remove('red', 'orange', 'yellow', 'green', 'blue');
	if (state.temp >= 80) {
		tempValue.classList.add('red');
	} else if (state.temp >= 70 && state.temp <= 79) {
		tempValue.classList.add('orange');
	} else if (state.temp >= 60 && state.temp <= 69) {
		tempValue.classList.add('yellow');
	} else if (state.temp >= 50 && state.temp <= 59) {
		tempValue.classList.add('green');
	} else if (state.temp < 50) {
		tempValue.classList.add('blue');
	}
};

const increaseTemp = () => {
	state.temp += 1;
	updateTemp();
	tempColor();
};

const decreaseTemp = () => {
	state.temp -= 1;
	updateTemp();
	tempColor();
};

// Registers functions as 'event listeners'
increaseTempButton.addEventListener('click', increaseTemp);
decreaseTempButton.addEventListener('click', decreaseTemp);
