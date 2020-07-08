const weather = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&APPID=7f3a044384f1f53298096cafcc0b978a&units=imperial';

fetch(weather)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);  
        const desc = jsObject.weather[0].description;       
        document.getElementById('condition').textContent = jsObject.weather[0].main;
        document.getElementById('temp').textContent = jsObject.main.temp.toFixed(0);
        document.getElementById('percent').textContent = jsObject.main.humidity;
        document.getElementById('wspd').textContent = jsObject.wind.speed.toFixed(0);
    });