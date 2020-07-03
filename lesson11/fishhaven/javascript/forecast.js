const forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=7f3a044384f1f53298096cafcc0b978a';

fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);

        const fivedayforecast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', "Mon", 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        let day = 0;
        fivedayforecast.forEach(forecast => {
            let d = new Date(forecast.dt_txt);
            document.getElementById(`forecast${day + 1}`).textContent = forecast.main.temp.toFixed(0);
            document.getElementById(`dayofweek${day + 1}`).textContent = weekdays[d.getDay()];
            day++;
            const imagesrc = `https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`;

            const desc = forecast.weather[0].description;
            document.getElementById(`icon${day + 1}`).setAttribute('src', imagesrc);
            document.getElementById(`icon${day + 1}`).setAttribute('alt', desc);
        })
    });