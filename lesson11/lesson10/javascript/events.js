const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const local = towns.filter(town => (town.name == 'Preston'));
        
        local.forEach(town => {
            let i= 0;
            let eachTown = document.createElement('article');
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            
            eachTown.appendChild(ul)

            li.innerHTML = `${town.events[i]}`;
            ul.appendChild(li);
            document.querySelector('div.local-events').appendChild(eachTown);
            (i++);
        });
    });