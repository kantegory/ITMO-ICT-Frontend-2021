import {checkResponse} from "@/http/checkResponse";
import {API} from "@/utils/const";
import store from "@/store";


/**
 * getWeatherPos - получение погоды по геоданынм,
 * API - апи в сервисе openweathermap,
 * @constructor
 * @param {string} lat - координата по широте.
 * @param {string} lon - координата по долготе.
 * @return {object} response - обьект, со всеми данными о погоде по координатам.
 */
export const getWeatherPos = (lat,lon) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API}&units=metric`, {
        method: 'GET',
    })
        .then(checkResponse)
        .then(response => {
            store.commit('addCurrentWeather', response)
        })
        .catch(err => console.log(err))

}