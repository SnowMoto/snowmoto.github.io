function addPopup() {
    let greeting="Hero's Pancake Social at Preston Park, Saturday 8am"
    let result= "Come back Friday for Pancake Info!";
    let d=new Date();
    if (d.getDay()==5){
       result=alert(greeting);
    }
    else{
       return alert(result);
    }}

