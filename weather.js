//set up variables

let APIkey="2cf9a1c2beb1b1fc37f62405ffef77ee";
let searchBtn = $(".searchBtn");
let searchInput = $(".searchInput");

//left Box
let cityNameEl = $(".cityName");
let currentDateEl = $(".currentDate");
let weather IconEL = $(".weatherIcon");
let searchHistoryEl = $(".historyItems");


//Right Box
let tempEl = $(".temp");
let humidityEL = $(".humidity");
let uvIndexEl = $(".uvIndex");
let cardRow = $(".card-row");


//Create Date Display

var today = newDate();
let dd = String(today.getDate().patStart(2,'0'));
let mm = String(today.getMonth() +1).padStart(2,'0');
let yyyy = today.getFullYear();
var today = yyyy = mm + '/' + dd + '/' + yyyy;


if (JSON.parse(localStorage.getItem("searchHistory")) === null) {
    console.log("search History")

} else{
    console.log("search history should load");
    renderSearchHistory();
}
url = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
APIkey = "2cf9a1c2beb1b1fc37f62405ffef77ee"
queryurl = url + city + APIkey