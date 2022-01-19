import {weatherCodeToIcon} from "./weather-codes.js";
import {apiKey} from "./secret.js";

// Names of days of the week
const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

// St. Petersburg
let lat = 59.9386;
let lon = 30.3141;

function timestampToWeekDay(timestamp) {
    let date = new Date(timestamp * 1000);
    return dayNames[date.getDay()];
}

function renderWeather(data) {
    // Render today
    let current = data["current"];
    let icon = weatherCodeToIcon(current["weather"][0]["id"]);
    let temperature = Math.round(current["temp"]);
    let description = current["weather"][0]["description"];
    let wind = Math.round((current["wind_speed"]));
    let todayCard = document.querySelector("#weather-today");
    todayCard.innerHTML = `
    <div class="row g-4">
        <div class="col-sm-6">
            <div class="today-img-container">
                <img src="${icon}" alt="${description}" width="180px">
            </div>
        </div>
        <div class="col-sm-6">
            <p><h3>${temperature}℃</h3></p>
            <p class="fs-4">${description}</p>
            <p class="fs-4">wind ${wind} m/s</p>
        </div>
    </div>
    `;

    // Render week
    let weekDays = [];
    let weekTemperatures = [];
    let weekIcons = [];
    let weekDescriptions = [];
    for (let day of data["daily"]) {
        weekDays.push(timestampToWeekDay(day["dt"]));
        weekTemperatures.push(Math.round(day["temp"]["day"]));
        weekIcons.push(weatherCodeToIcon(day["weather"][0]["id"]));
        weekDescriptions.push(day["weather"][0]["description"]);
    }

    let tableDayRow = ``;
    for (let i = 0; i < 7; i++) {
        tableDayRow += `
        <th>${weekDays[i]}</th>
        `;
    }

    let tableTemperatureRow = ``;
    for (let i = 0; i < 7; i++) {
        tableTemperatureRow += `
        <td>${weekTemperatures[i]}℃</td>
        `;
    }

    let tableIconRow = ``;
    for (let i = 0; i < 7; i++) {
        tableIconRow += `
        <td>
            <div class="week-img-container">
                <img src="${weekIcons[i]}" alt="${weekDescriptions[i]}" width="50px">
            </div>
        </td>
        `;
    }

    let weekCard = document.querySelector("#weather-week");
    weekCard.innerHTML = `
    <div class="table-responsive">
        <table class="table table-borderless text-center align-middle">
            <tr>
                ${tableDayRow}
            </tr>
            <tr>
                ${tableTemperatureRow}
            </tr>
            <tr>
                ${tableIconRow}
            </tr>
        </table>
    </div>
    `;
}

function getWeather() {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

    fetch(url)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            renderWeather(data);
        });
}

window.addEventListener("load", getWeather);
// window.onload = getWeather;
