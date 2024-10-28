const apikey = "e7caed4d7417797a88007814710c3d0d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");

async function checkweather(city) {
    const response = await fetch(apiUrl + `&q=${city}&appid=${apikey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value);
});
