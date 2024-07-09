const apiKey = "a516a792024accb77f34519e395792f4";
const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const appId = `&appid=${apiKey}`;
const weatherIcon = document.getElementById("weather-icon");
const today = document.getElementById("today");
const weather = document.getElementById("provinceSelected");
const weatherTemper = document.getElementById("weatherTemperature");
const date = new Date(); // Lấy ngày hiện tại
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
};

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + appId);

    if (response.status == "404") {
        return;
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

        weatherTemper.innerHTML = Math.round(data.main.temp) + "°C"
    }
}

function getNowDate() {
    today.innerHTML = date.toLocaleDateString('vi-VN', options);
}

const getDateInterval = setInterval(() => {
    if (today.innerText) {
        return clearInterval(getDateInterval);
    }
    getNowDate();
}, 100);

const getWeatherInterval = setInterval(() => {
    if (weatherTemper.innerText || weatherIcon.src) {
        return clearInterval(getWeatherInterval);
    }
    checkWeather(weather.value);
}, 100);
