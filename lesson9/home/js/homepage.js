const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); // temporary checking for valid response and data parsing
        const myTowns = ["Preston", "Fish Haven", "Soda Springs"]
        const towns = jsonObject['towns'];
        for (let i = 0; i < towns.length; i++) {
            if (myTowns.includes(towns[i].name)) {
                let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            let para4 = document.createElement('p');
            let image = document.createElement('img');
            //preston
            h2.textContent = towns[i].name;
            card.appendChild(h2);

            para1.textContent = towns[i].motto;
            card.appendChild(para1);

            para2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            card.appendChild(para2);

            para3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            card.appendChild(para3);

            para4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;
            card.appendChild(para4);

            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', towns[i].name);
            

            document.querySelector('div.towns').appendChild(card);
            card.appendChild(image);
            }
    }});