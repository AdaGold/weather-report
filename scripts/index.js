let weather = { // key from https://home.openweathermap.org/api_keys 
    "apiKey": "9bb3584c5eef1f79d575c1399cfa5c14",
    fetchWeather: function(city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=imperial&appid=" 
        + this.apiKey) 
        .then((response) => response.json())
        .then((data) => console.log(data));
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp , humidity } = data.main;
        const { speed } = data.wind;
        //console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".city").innerText = "The weather in " + name;
        document.querySelector(".icon").src =  
            "https://openweathermap.org/img/wn/"+ icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "degrees Fahrenheit";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " m/s"; // check units..
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
})

weather.fetchWeather("Chicago"); // for default text when page comes up