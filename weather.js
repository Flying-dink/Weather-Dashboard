//set up variables

//let APIkey="2cf9a1c2beb1b1fc37f62405ffef77ee";
//let searchBtn = $(".searchBtn");
//let searchInput = $(".searchInput");

//left Box
//let cityNameEl = $(".cityName");
//let currentDateEl = $(".currentDate");
//let weather ,IconEL = $(".weatherIcon");
//let searchHistoryEl = $(".historyItems");


//Right Box
//let tempEl = $(".temp");
//let humidityEL = $(".humidity");
//let uvIndexEl = $(".uvIndex");
//let cardRow = $(".card-row");


//Create Date Display
function renderDate(){
    var today = moment().format('DD-MM-YYYY')
   $('#current-day').append(today);
 
}


//let 
//let dd = String(today.getDate().patStart(2,'0'));
//let mm = String(today.getMonth() +1).padStart(2,'0');
//let yyyy = today.getFullYear();
//var today = yyyy = mm + '/' + dd + '/' + yyyy;


//if (JSON.parse(localStorage.getItem("searchHistory")) === null) {
  //  console.log("search History")

// else{
   // console.log("search history should load");
    //renderSearchHistory();



//$(document).on("click", ".historyEntry", function() {
  //  console.log("history item")
    //let thisElement = $(this);
    //getWeather(thisElement.text());

//currenturl ="https:// api.openweathermap.org/data/2.5/weather?q=";
//url = "https://api.openweathermap.org/data/2.5/forcast?q=";
//APIkey = "2cf9a1c2beb1b1fc37f62405ffef77ee"
//queryurl = url + city + APIkey

let city="";
let url="";
let APIkey="";
let queryurl="";
let currenturl="";
let citiesDiv= document.getElementById("searched-cities-container");
let cities= [];
listClicker();
searchClicker();
pullCities();
function pullCities() {
    let savedCities= JSON.parse(localStorage.getItem("cities"));
        if (savedCities !==null) {
            cities=savedCities
        }
        renderButtons();
}

function storeCities() {
    localStorage.setItem("cities", JSON.stringify(cities));

}
//render buttons for each element
function  renderButtons() {
    citiesDiv.innerHTML = "";
    if(cities== null) {
        return;
    }

    let uniqueCities= [...new Set(cities)];
    for(let i=0; i< uniqueCities.length; i++) {
        let cityName = uniqueCities[i];

        let buttonEl = document.createElement("button");
        buttonEl.textContent = cityName;
        buttonEl.setAttribute("class", "listbtn");
        citiesDiv.appendChild(buttonEl);
        listClicker();
    }
}

function listClicker() {
    $(".listbtn").on("click",function(event) {
        console/log("hello?")
        city = $(this).text().trim();
        APIcalls();
    })
}
function searchClicker() {
    $("#searchbtn").on ("click", function(event) {
        event.preventDefault();
        city = $(this).prev().val().trim()

        cities.push(city);
        if (cities.length > 8) {
            cities.shift()
        }
    if (city =="") {
        return;
    }
    APIcalls();
    storeCities();
    renderButtons();
})
}

// 2 API calls 1 for current conditions and 1 for 5 day forecast

function APIcalls() {
    url= "https://api.openweathermap.org/data/2.5/forecast?q=";
    currenturl = "https://api.openweathermap.org/data/2.5/weather?q=";

APIkey="&appid=8b668a5ffbcbc6cece2c6f9eb9ed67bf";
queryurl = url + city + APIkey;
currentWeatherUrl= currenturl + city + APIkey;



$("#city-name").text(`Today's Weather In ${city}`);



$.ajax({
    url: queryurl,
    method: "GET",
}).then (function(response) {
    let day_Number = 0;

    for(let i=0; i < response.list.length; i++) {
    if( response.list[i].dt_txt.split(" ")[1]=="15:00:00")
{
    let day = response.list[i].dt_txt.split("-")[2].split("-")[0];
    let month = response.list[i].dt_txt.split("-")[1];
    let year = response.list[i].dt_txt.split("-")[0];
    $("#" + day_Number + "five_day_temp").text("temp:"+String.fromCharCode(176)+"F");
    $("#" + day_Number + "five_day_humidity").text("humidity:"+response.list[i].main.humidity);
    $("#" + day_Number + "five_day_icon").attr("src", "http://openweathermap.org/img/w/"+response.list[i].weather[0].icon+".png");
console.log(response.list[i].dt_txt.split("-"));
console.log(day_Number);
console.log(response.list[i].main.temp);
day_Number++;

}
}
});

//Display Data in Main Div
$.ajax( {
    url: currentWeatherUrl,
    method: "GET",

}).then(function(current_data){
    console.log(current_data);
    let temp = Math.round(((current_data.main.temp-273.15)*9/5 +32))
    console.log("The Temperature in" +city+ "is:" + temp);
    renderDate();
    $("#today-temp").text("Temperature: " + temp + String.fromCharCode(176)+"F");
    $("#today-humidity").text("Humidity: "+ current_data.main.humidity);
    $("#today-wind").text(" Wind Speed:"+ current_data.wind.speed);
    $("#today-icon-div").attr({"src": "http://openweathermap.org/img/w/"+ current_data.weather[0].icon+ ".png",
"height":"100px", "width": "100px"});
})
}

