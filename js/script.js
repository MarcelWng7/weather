const apiKey = "51deb0bb215d72822249ab40cf7806a3";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checkWeather() {
    const response = await fetch(apiUrl + '&appid=${appKey}');
    var data = await response.json();

    console.log(data);
}

checkWeather();