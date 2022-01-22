<template>
    <div>
        <h1 class="display-4">
            Weather forecast for <span class="hover-opacity" data-bs-toggle="modal" data-bs-target="#chooseCityModal">
        <span id="selected-city">{{ selectedCity }}</span>
        <img src="img/edit-pen.svg" alt="edit" width="40px"></span>
        </h1>

        <div class="row g-2">
            <!-- Weather today -->
            <div class="col-12 col-lg-5">
                <div class="card">
                    <div class="card-header">
                        <h2 class="fs-4">Weather today</h2>
                    </div>
                    <div class="card-body" id="weather-today">
                        <weather-today v-if="todayWeather" :icon="todayWeather.icon" :temp="todayWeather.temp"
                                       :desc="todayWeather.desc" :wind="todayWeather.wind"></weather-today>
                    </div>
                </div>
            </div>

            <!-- Weather this week -->
            <div class="col-12 col-lg-7">
                <div class="card">
                    <div class="card-header">
                        <h2 class="fs-4">Weather this week</h2>
                    </div>
                    <div class="card-body" id="weather-week">
                        <div class="table-responsive">
                            <table class="table table-borderless text-center align-middle" v-if="weekWeather">
                                <tr>
                                    <td v-for="item in weekWeather" :key="item.day">
                                        <weather-week :icon="item.icon" :temp="item.temp" :desc="item.desc"
                                                      :day="item.day"></weather-week>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <choose-city-modal></choose-city-modal>
    </div>
</template>

<script>
import WeatherToday from "../components/weather/WeatherToday";
import WeatherWeek from "../components/weather/WeatherWeek";
import ChooseCityModal from "../components/modals/chooseCityModal";

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

const apiKey = process.env.VUE_APP_API_KEY;

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

function weatherCodeToIcon(code) {
    if (!Object.prototype.hasOwnProperty.call(codeMappings, code)) {
        return rootPath + defaultIcon;
    }
    return rootPath + codeMappings[code];
}

function timestampToWeekDay(timestamp) {
    let date = new Date(timestamp * 1000);
    return dayNames[date.getDay()];
}

// https://stackoverflow.com/a/51992739
async function getJSON(url) {
    return fetch(url).then((response) => response.json()).then((responseJson) => {
        return responseJson
    });
}

export default {
    name: "Index",
    components: {ChooseCityModal, WeatherWeek, WeatherToday},
    data: function () {
        let selectedCity = "St. Petersburg";
        if (Object.prototype.hasOwnProperty.call(sessionStorage, "city")) {
            let city = sessionStorage.getItem("city");
            if (city) {
                selectedCity = city;
            } else if (Object.prototype.hasOwnProperty.call(sessionStorage, "lat") && Object.prototype.hasOwnProperty.call(sessionStorage, "lon")) {
                let lat = sessionStorage.getItem("lat");
                let lon = sessionStorage.getItem("lon");
                selectedCity = `${lat} ${lon}`;
            }
        }
        return {
            todayWeather: null,
            weekWeather: null,
            selectedCity: selectedCity
        }
    },
    async created() {
        // Set default value to St. Petersburg
        let lat = 59.937500;
        let lon = 30.308611;

        if (Object.prototype.hasOwnProperty.call(sessionStorage, "lat") && Object.prototype.hasOwnProperty.call(sessionStorage, "lon")) {
            lat = sessionStorage.getItem("lat");
            lon = sessionStorage.getItem("lon");
        }

        let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly,alerts&appid=${apiKey}&units=metric`;

        let data = await getJSON(url);

        console.log(data);

        let current = data["current"];
        this.todayWeather = {
            icon: weatherCodeToIcon(current["weather"][0]["id"]),
            temp: Math.round(current["temp"]),
            desc: current["weather"][0]["description"],
            wind: (current["wind_speed"])
        }

        let weekWeather = []
        for (let day of data["daily"].slice(0, 7)) {
            weekWeather.push({
                day: timestampToWeekDay(day["dt"]),
                temp: Math.round(day["temp"]["day"]),
                icon: weatherCodeToIcon(day["weather"][0]["id"]),
                desc: day["weather"][0]["description"]
            });
        }
        this.weekWeather = weekWeather;
    }
}
</script>

<style scoped>

</style>
