const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const southern = towns.filter(town => (town.name == 'Preston'));

        southern.forEach(town => {

            let eachTown = document.createElement('article');
            let ul = document.createElement('ul');
            let li1 = document.createElement('li');
            let li2 = document.createElement('li');
            let li3 = document.createElement('li');
            let li4 = document.createElement('li');

            eachTown.appendChild(ul)

            li1.innerHTML = `${town.events[1]}`;
            ul.appendChild(li1);

            li2.innerHTML = `${town.events[2]}`;
            ul.appendChild(li2);

            li3.innerHTML = `${town.events[0]}`;
            ul.appendChild(li3);

            document.querySelector('div.local-events').appendChild(eachTown);
        });

    });