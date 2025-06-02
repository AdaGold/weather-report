"use strict";


// wave 2: 
// changing temperature using increase/decrease buttons



// 5 categories of background colors depending on temp range:
// | Temperature (F) | Color  |
// | --------------- | ------ |
// | 80+             | Red    |
// | 70-79           | Orange |
// | 60-69           | Yellow |
// | 50-59           | Green  |
// | 49 or below     | Teal   |

const updateBackground = temp => {
    const weatherApp = document.getElementById('weather-app'); // change depending on HTML/CSS

    if (temp >= 80) {
        weatherApp.style.background = 'linear-gradient(to right, #ff512f, #dd2476)';
    } else if (temp >= 70) {
        weatherApp.style.background = 'linear-gradient(to right, #f7971e, #ffd200)';
    } else if (temp >= 60) {
        weatherApp.style.background = 'linear-gradient(to right, #fceabb, #f8b500)';
    } else if (temp >= 50) {
        weatherApp.style.background = 'linear-gradient(to right, #a8e063, #56ab2f)';
    } else {
        weatherApp.style.background = 'linear-gradient(to right, #43cea2, #185a9d)';
    }
}

//smoother transition in CSS: 
// #weather-app {
//     transition: background 0.5s ease;
//   }


// at least 4 landscapes that change based on temp ranges (make it coincide with background colors?)