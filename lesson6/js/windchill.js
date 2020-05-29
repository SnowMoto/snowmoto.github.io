/*function windChill(){
    let temp=45;
    let mph=10;
    let result=chillWind(temp,mph);
    document.getElementById("chilly").innerHTML=result.toFixed(1);
}
function chillWind(temp,mph){
    let result= 35.74+(0.6215*temp)-35.75*Math.pow(mph,0.16)+0.4275*temp*Math.pow(mph,0.16);
    return result;
}*/
function windChill(){
let temp= parseFloat(document.getElementById("temp").textContent);
let mph= parseFloat(document.getElementById("wspd").textContent);

    if(temp <= 50 && mph >= 3){
    let f=35.74+(0.6215*temp)-35.75*Math.pow(mph,0.16)+0.4275*temp*Math.pow(mph,0.16);
    let result = f.toFixed(0);
    document.getElementById('chilly').innerHTML = result + '&#8457;';
} else {
    document.getElementById('chilly').textContent = "N/A";
}}