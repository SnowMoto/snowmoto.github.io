const requestURL = "https://snowmoto.github.io/lesson12/data/data.json";

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        console.table(jsonObject);
        const rentals = jsonObject['rentals'];
        for (let i = 0; i < rentals.length; i++) {
            let tr = document.createElement ('tr');
            let td1 = document.createElement ('td');
            let td2 = document.createElement ('td');
            let td3 = document.createElement ('td');
        
        td1.textContent = rentals [i].name + '' + rentals[i].model +''+ rentals[i].maxseat;
        tr.appendChild(td1);
        
        td2.textContent = rentals [i].reserve;
        tr.appendChild(td2);

        td3.textContent = rentals [i].walkin;
        tr.appendChild(td3);

        document.querySelector('tbody').appendChild(tr);
        
    }});