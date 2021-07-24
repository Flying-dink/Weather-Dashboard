//set up variables
var city="";
var APIkey="";
var cities=document.getElementById("searched-cities-container");
var cities=("");
listClicker();
searchClicker();

//render buttons for each element 
function renderButtons() {
    cities.innerHTML = "";
    if(cities ==null) {
        return;
    }
}
url = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
APIkey = "2cf9a1c2beb1b1fc37f62405ffef77ee"
queryurl = url + city + APIkey