// Filenames for different weather types
const rootPath = "img/weather-icons/";

const clearSky = "clear-sky.svg";
const fewClouds = "few-clouds.svg";
const scatteredClouds = "scattered-clouds.svg";
const brokenClouds = "broken-clouds.svg";
const showerRain = "shower-rain.svg";
const rain = "rain.svg";
const thunderstorm = "thunderstorm.svg";
const snow = "snow.svg";
const mist = "mist.svg";

const defaultIcon = "default.svg";

// https://openweathermap.org/weather-conditions
const codeMappings = {
    200: thunderstorm,
    201: thunderstorm,
    202: thunderstorm,
    210: thunderstorm,
    211: thunderstorm,
    212: thunderstorm,
    221: thunderstorm,
    230: thunderstorm,
    231: thunderstorm,
    232: thunderstorm,
    300: showerRain,
    301: showerRain,
    302: showerRain,
    310: showerRain,
    311: showerRain,
    312: showerRain,
    313: showerRain,
    314: showerRain,
    321: showerRain,
    500: rain,
    501: rain,
    502: rain,
    503: rain,
    504: rain,
    511: snow,
    520: showerRain,
    521: showerRain,
    522: showerRain,
    531: showerRain,
    600: snow,
    601: snow,
    602: snow,
    611: snow,
    612: snow,
    613: snow,
    615: snow,
    616: snow,
    620: snow,
    621: snow,
    622: snow,
    701: mist,
    711: mist,
    721: mist,
    731: mist,
    741: mist,
    751: mist,
    761: mist,
    762: mist,
    771: mist,
    781: mist,
    800: clearSky,
    801: fewClouds,
    802: scatteredClouds,
    803: brokenClouds,
    804: brokenClouds
};

const dayNames = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];


export function weatherCodeToIcon(code) {
    if (!Object.prototype.hasOwnProperty.call(codeMappings, code)) {
        return rootPath + defaultIcon;
    }
    return rootPath + codeMappings[code];
}

export function timestampToWeekDay(timestamp) {
    let date = new Date(timestamp * 1000);
    return dayNames[date.getDay()];
}

export function getAuthHeader() {
    return `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
}
