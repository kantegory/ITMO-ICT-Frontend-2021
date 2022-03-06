import {API_key} from "./config.js";


function city_entered() {
    const url = new URLSearchParams(window.location.search);
    let city = url.get(`city`);
    return city;
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function convert_date(date) {
    let result = '';
    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    result += date.getDate() + '.';
    if (result.length == 2) {
        result = '0' + result
    }
    
    let month = String(date.getMonth() + 1);
    if (month.length == 1) {
        month = '0' + month
    }

    result += month + ', ' + weekdays[date.getDay()];
    return result;
}


async function get_forecast() {
    let city = city_entered();
    let city_data = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_key}`);
    let city_json = await city_data.json();

    document.querySelector('.city_header').textContent = city_json[0].name + ', ' + city_json[0].country;

    let forecast = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city_json[0].lat}&lon=${city_json[0].lon}&exclude=minutely,hourly,alerts&units=metric&appid=${API_key}`);
    let forecast_json = await forecast.json();

    for (let i = 1; i < 8; i++) {
        let date = new Date(forecast_json.daily[i].dt * 1000);
        document.querySelector(`.date_${i}`).textContent = convert_date(date);
        document.querySelector(`.icon_temp_${i}`).innerHTML = `<img src="http://openweathermap.org/img/wn/${forecast_json.daily[i].weather[0].icon}@2x.png" width="80" height="80"></img><h2>${Math.round(forecast_json.daily[i].temp.day)}°C</h2>`;
        document.querySelector(`.wind_${i}`).textContent = Math.round(forecast_json.daily[i].wind_speed) + ' m/s';
        document.querySelector(`.conditions_${i}`).textContent = capitalizeFirstLetter(forecast_json.daily[i].weather[0].description);
        document.querySelector(`.pressure_${i}`).textContent = Math.round(forecast_json.daily[i].pressure * 0.75) + ' mmHg';
        document.querySelector(`.humidity_${i}`).textContent = forecast_json.daily[i].humidity + ' %';
    }
}


get_forecast();
