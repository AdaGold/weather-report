'use strict';

// Selects the HTML Elements the events will occur on
const increaseTempButton = document.querySelector('#increaseTempControl');

// Makes functions to run when events occur
const state = {
	temp: 0,
};

// Sets the temperate value to state
const updateTemp = () => {
	const tempValue = document.querySelector('#tempValue');
	tempValue.textContent = `${state.temp}`;
};

const increaseTemp = () => {
	state.temp += 1;
	updateTemp();
};

// Registers functions as 'event listeners'
increaseTempButton.addEventListener('click', increaseTemp);
