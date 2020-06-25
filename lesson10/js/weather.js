const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=7f3a044384f1f53298096cafcc0b978a';

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        document.getElementById('current-temp').textContent = jsObject.main.temp;

const fivedayforcast = jsObject.list.filter(x => x.dt_txt.includes('18:00:00')) 

const weekdays = ['Sun', "Mon", 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];

let day = 0;

console.log(fivedayforcast);

fivedayforcast.foreach(forcast => {
    let d = new Date (forcast.dt_txt);
    document.getElementById('forcast${day+1}').textContent = forcast.main.temp;
    document.getElementById('dayofweek${day+1').textContent = weekdays[d.getDay()];
    day++;
})
//const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
//const desc = jsObject.weather[0].description;  // note how we reference the weather array
//document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
//document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
//document.getElementById('icon').setAttribute('alt', desc);
});   