function toggleMenu(){
    document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
    }
{
let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// document.getElementById("demo").innerHTML = days[d.getDay()];

let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// document.getElementById("month").innerHTML = months[d.getMonth()];

let date = days[today.getDay()] + ', ' + today.getDate() + " " + months[today.getMonth()] + " " + today.getFullYear();
document.getElementById("date").innerHTML = date;}
