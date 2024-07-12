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

async function getWeatherApi(city, retryTimes) {
    try {
        const response = await fetch(apiUrl + city + appId);
        var data = await response?.json();
        switch (data.weather[0].main) {
            case "Clear":
                weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-1.svg";
                break;
            case "Clouds":
                weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-7.svg";
                break;
            case "Drizzle":
                weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-34.svg";
                break;
            case "Mist":
                weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-17.svg";
                break;
            case "Rain":
                weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-19.svg";
                break;
            case "Snow":
                weatherIcon.src = "https://c.tadst.com/gfx/w/svg/wt-30.svg";
                break;
            default:
                weatherIcon.src = "";
                break;
        }
        weatherTemper.innerHTML = Math.round(data.main.temp) + "°C";
    } catch (err) {
        retryTimes--;
        return retryGetWeather(retryTimes);
    }
}
function retryGetWeather(times) {
    if (times === 0) return console.log("Không thể lấy thông tin thời tiết. Vui lòng thử lại sau.");
    return getWeatherApi(weather.value, times);
}

function getNowDate() {
    today.innerHTML = date.toLocaleDateString('vi-VN', options);
}

getNowDate();
setTimeout(() => {
    getWeatherApi(weather.value, 4);
}, 1000)
