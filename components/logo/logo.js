const apiKey = "a516a792024accb77f34519e395792f4";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const appId = `&appid=${apiKey}`;
const weatherIcon = document.getElementById("weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + appId);

    if (response.status == "404") {
        console.log({
            response
        })
    } else {
        var data = await response?.json();
        if (data.weather[0].main == "Clear") {
            weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-1.svg";
        } else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-7.svg";
        } else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-34.svg";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-17.svg";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-19.svg";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-30.svg";
        }

        document.getElementById("weatherTemperature").innerHTML = Math.round(data.main.temp) + "°C"
    }
}

checkWeather(document.getElementById("provinceSelected").value);
