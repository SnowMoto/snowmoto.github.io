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
            let div = document.createElement("div");
            let h2 = document.createElement('h2');
            let para1 = document.createElement('p');
            let para2 = document.createElement('p');
            let para3 = document.createElement('p');
            let para4 = document.createElement('p');
            let image = document.createElement('img');


            //preston
            h2.textContent = towns[i].name;
            para1.textContent = towns[i].motto;
            para2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            para3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            para4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;

            image.setAttribute('src', towns[i].photo);
            image.setAttribute('alt', towns[i].name);

            div.setAttribute('class', 'info');
            card.setAttribute('class', 'card');

            div.appendChild(h2);
            div.appendChild(para1);
            div.appendChild(para2);
            div.appendChild(para3);
            div.appendChild(para4);
            
            card.appendChild(div);
            card.appendChild(image);
            document.querySelector('.towns').appendChild(card);
            }
    }});