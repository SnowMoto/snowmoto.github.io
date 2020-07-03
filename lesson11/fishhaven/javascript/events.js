const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(jsonObject => {
        const prestonEvents = jsonObject.towns.find(town => {
          return town.name == 'Fish Haven';
        }).events;
    
        prestonEvents.forEach(event => {
          let li = document.createElement('li');
          li.innerHTML = event;
  
            document.querySelector('div.local-events').appendChild(li);
        });
    });
      