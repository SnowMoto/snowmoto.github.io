function windChill(){
    let temp=45;
    let mph=10;
    let result=chillWind(temp,mph);
    document.getElementById("chilly").innerHTML=result.toFixed(1);
}
function chillWind(temp,mph){
    let result= 35.74+(0.6215*temp)-35.75*Math.pow(mph,0.16)+0.4275*temp*Math.pow(mph,0.16);
    return result;
}