import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import {getAuthHeader, weatherCodeToIcon, timestampToWeekDay} from './utils'

Vue.use(Vuex)


const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 5000,  // ms
    headers: {'Content-type': 'application/json'}
});

const store = new Vuex.Store({
    state: {
        selectedCity: null,
        firstName: '',
        lastName: '',
        username: '',
        favouriteCities: [],
        allCities: [],
        todayWeather: null,
        weekWeather: null
    },
    mutations: {
        setSelectedCity(state, payload) {
            state.selectedCity = payload;
            // Remove forecast immediately to not confuse user with forecast for last city
            state.todayWeather = null;
            state.weekWeather = null;
        },
        setFavouriteCities(state, payload) {
            state.favouriteCities = payload;
        },
        setAllCities(state, payload) {
            state.allCities = payload;
        },
        setForecast(state, payload) {
            console.log(payload);

            let current = payload["current"];
            state.todayWeather = {
                icon: weatherCodeToIcon(current["weather"][0]["id"]),
                temp: Math.round(current["temp"]),
                desc: current["weather"][0]["description"],
                wind: (current["wind_speed"])
            }

            let weekWeather = []
            for (let day of payload["daily"].slice(0, 7)) {
                weekWeather.push({
                    day: timestampToWeekDay(day["dt"]),
                    temp: Math.round(day["temp"]["day"]),
                    icon: weatherCodeToIcon(day["weather"][0]["id"]),
                    desc: day["weather"][0]["description"]
                });
            }
            state.weekWeather = weekWeather;
        }
    },
    actions: {
        selectCity(context, city_id) {
            // Select specific city by ID
            context.commit('setSelectedCity', context.state.allCities[city_id]);
        },
        listFavouriteCities(context) {
            // Get all favourite cities of user
            instance.get('/cities/favourite', {
                headers: {
                    Authorization: getAuthHeader()
                }
            }).then(function(response) {
                if (200 <= response.status < 300) {
                    return response.data;
                }
                return Promise.reject(response);
            }).then(function (data) {
                context.commit('setFavouriteCities', data);
            })
        },
        listAllCities(context) {
            // Get all cities
            instance.get('/cities').then(function(response) {
                if (200 <= response.status < 300) {
                    return response.data;
                }
                return Promise.reject(response);
            }).then(function (data) {
                context.commit('setAllCities', data);
            })
        },
        addFavouriteCity(context, city_id) {
            // Add city to user favourites by ID
            instance.post('/cities/favourite', {city_id: city_id}, {
                headers: {
                    Authorization: getAuthHeader()
                }
            }).then(function(response) {
                if (200 <= response.status < 300) {
                    return response.data;
                }
                return Promise.reject(response);
            }).then(function () {
                context.dispatch('listFavouriteCities');
            })
        },
        deleteFavouriteCity(context, city_id) {
            // Delete city from user favourites by ID
            instance.delete(`/cities/favourite/${city_id}`, {
                headers: {
                    Authorization: getAuthHeader()
                }
            }).then(function(response) {
                if (200 <= response.status < 300) {
                    return response.data;
                }
                return Promise.reject(response);
            }).then(function () {
                context.dispatch('listFavouriteCities');
            })
        },
        getForecast(context, city_id) {
            // Get forecast for city by id
            instance.get(`/cities/${city_id}/forecast`).then(function(response) {
                if (200 <= response.status < 300) {
                    return response.data;
                }
                return Promise.reject(response);
            }).then(function (data) {
                context.commit('setForecast', data);
            })
        }
    }
})
export default store;
