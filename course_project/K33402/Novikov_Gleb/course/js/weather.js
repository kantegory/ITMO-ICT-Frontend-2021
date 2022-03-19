apiKey = '';
lat = 59.693088;
lon = 30.200033;

async function getWeather() {
    url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
    const response = await fetch(url, {"method": "GET"});
    return await response.json();
}

function setWeather() {
    const place = document.getElementById('weather-place');
    const temp = document.getElementById('weather-temp');
    const status = document.getElementById('weather-status');
    getWeather().then((json) => {
        place.innerText = json.name;
        temp.innerText = parseInt(json.main.temp - 273.15)  + '°C';
        status.innerText = json.weather[0].main;
        console.log(json.name)
    });
}

setWeather();
