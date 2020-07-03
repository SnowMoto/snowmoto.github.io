const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject["towns"];
        const events = towns.filter(towns => (towns.name == 'Preston'));

        events.forEach(town => {
            let eachTown = document.getElementById('article');
            let h4 = document.getElementById('h4');
            let ul = document.getElementById('ul');
            let one = document.getElementById('li');
            let two = document.getElementById('li');
            let three = document.getElementById('li');

            eachTown.appendChild(ul);

            h4.textContent = `Events Coming Up`;
            eachTown.appendChild(h4);

            one.textContent = `${town.events[0]}`;
            ul.appendChild('one');

            two.textContent = `${town.events[1]}`;
            ul.appendChild('two');

            three.textContent = `${town.events[2]}`;
            ul.appendChild('three');

            document.querySelector('div.local-events').appendChild(eachTown);
        });
    });