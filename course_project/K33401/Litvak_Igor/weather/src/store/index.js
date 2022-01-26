import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";
import axios from 'axios'
import {getAuthHeader, weatherCodeToIcon, timestampToWeekDay} from './utils'

Vue.use(Vuex)


const instance = axios.create({
    baseURL: 'http://localhost:8000/api',
    timeout: 20000,  // ms
    headers: {'Content-type': 'application/json'}
});


// https://www.bezkoder.com/vue-refresh-token/
instance.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        const originalConfig = err.config;

        if (originalConfig.url !== "/auth/jwt/create" && err.response) {
            // Access Token was expired
            if (err.response.status === 401 && !originalConfig._retry) {
                originalConfig._retry = true;

                try {
                    await store.dispatch('refreshToken');
                    console.log("Refreshed access token");
                    return instance(originalConfig);
                } catch (_error) {
                    return Promise.reject(_error);
                }
            }
        }

        return Promise.reject(err);
    }
);


const store = new Vuex.Store({
    state: {
        user: null,
        selectedCity: null,
        favouriteCities: [],
        rawFavouriteCities: [],
        allCities: [],
        todayWeather: null,
        weekWeather: null
    },
    getters: {
        nonFavouriteCities(state) {
            return state.allCities.filter(city => !(state.favouriteCities.map(fav_city => fav_city.id).includes(city.id)));
        },
        loggedIn(state) {
            return state.user !== null;
        }
    },
    mutations: {
        setSelectedCity(state, payload) {
            state.selectedCity = payload;
            // Remove forecast immediately to not confuse user with forecast for last city
            state.todayWeather = null;
            state.weekWeather = null;
        },
        setFavouriteCities(state, payload) {
            // Deal with favourite cities being nested serializer
            state.favouriteCities = payload.map(city => city.city);
            state.rawFavouriteCities = payload;
        },
        setAllCities(state, payload) {
            state.allCities = payload;
        },
        setForecast(state, payload) {

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
        },
        setUser(state, payload) {
            state.user = payload;
        },
        unsetUser(state) {
            state.user = null;
            state.todayWeather = null;
            state.weekWeather = null;
            state.favouriteCities = [];
            state.rawFavouriteCities = [];
        }
    },
    actions: {
        selectCity(context, city_id) {
            // Select specific city by ID
            return new Promise(resolve => {
                context.commit('setSelectedCity', context.state.allCities.filter(city => city.id == city_id)[0]);
                resolve();
            })
        },
        selectClosestCity(context, location) {
            // Set city to closest
            return new Promise(resolve => {
                instance.get(`/cities/closest/?lat=${location.coords.latitude}&lon=${location.coords.longitude}`, {
                    headers: {
                        Authorization: getAuthHeader()
                    }
                }).then(function (response) {
                    if (200 <= response.status < 300) {
                        return response.data;
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                    return context.dispatch('selectCity', data['id'])
                }).then(function () {
                    resolve();
                });
            })
        },
        listFavouriteCities(context) {
            // Get all favourite cities of user
            instance.get('/cities/favourite/', {
                headers: {
                    Authorization: getAuthHeader()
                }
            }).then(function (response) {
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
            instance.get('/cities/').then(function (response) {
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
            instance.post('/cities/favourite/', {city_id: city_id}, {
                headers: {
                    Authorization: getAuthHeader()
                }
            }).then(function (response) {
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
            instance.delete(`/cities/favourite/${city_id}/`, {
                headers: {
                    Authorization: getAuthHeader()
                }
            }).then(function (response) {
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
            instance.get(`/cities/${city_id}/forecast/`).then(function (response) {
                if (200 <= response.status < 300) {
                    return response.data;
                }
                return Promise.reject(response);
            }).then(function (data) {
                context.commit('setForecast', data);
            })
        },
        getCurrentUser(context) {
            // Get info on current user
            return new Promise(resolve => {
                instance.get("/auth/users/me/", {
                    headers: {
                        Authorization: getAuthHeader()
                    }
                }).then(function (response) {
                    if (200 <= response.status < 300) {
                        return response.data;
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                    context.commit('setUser', data);
                    resolve();
                })
            });
        },
        login(context, payload) {
            // Sign user in
            return new Promise(resolve => {
                instance.post("/auth/jwt/create", payload).then(function (response) {
                    if (200 <= response.status < 300) {
                        return response.data;
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                    localStorage.setItem('token', JSON.stringify(data));
                    return context.dispatch('getCurrentUser')
                }).then(function () {
                    resolve();
                });
            })
        },
        refreshToken() {
            // Refresh JWT token on expiry
            let token = JSON.parse(localStorage.getItem('token'))
            instance.post("/auth/jwt/refresh/", {refresh: token?.refresh}).then(function (response) {
                if (200 <= response.status < 300) {
                    return response.data;
                }
                return Promise.reject(response);
            }).then(function (data) {
                token.access = data['access'];
                localStorage.setItem('token', JSON.stringify(token));
            })
        },
        logout(context) {
            // Log user out
            return new Promise(resolve => {
                context.commit('unsetUser')
                localStorage.removeItem('token');
                resolve();
            })
        },
        register(context, payload) {
            // Register user
            return new Promise(resolve => {
                instance.post("/auth/users/", payload).then(function (response) {
                    if (200 <= response.status < 300) {
                        resolve();
                    }
                    return Promise.reject(response);
                })
            })
        },
        changeName(context, payload) {
            // Update user first and last names
            return new Promise(resolve => {
                instance.patch("/auth/users/me/", payload, {
                    headers: {
                        Authorization: getAuthHeader()
                    }
                }).then(function (response) {
                    if (200 <= response.status < 300) {
                        return response.data;
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                    context.commit("setUser", data);
                    resolve();
                })
            })
        },
        changePassword(context, payload) {
            // Update user first and last names
            return new Promise(resolve => {
                instance.post("/auth/users/set_password/", payload, {
                    headers: {
                        Authorization: getAuthHeader()
                    }
                }).then(function (response) {
                    if (200 <= response.status < 300) {
                        return response.data;
                    }
                    return Promise.reject(response);
                }).then(function (data) {
                    context.commit("setUser", data);
                    resolve();
                })
            })
        }
    },
    plugins: [createPersistedState({
        storage: window.sessionStorage,
    })]
})
export default store;
