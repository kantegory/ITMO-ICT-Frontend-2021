import Vue from 'vue'
import Vuex from 'vuex'
import {HOST, URL} from "@/const";
import router from "@/router";

Vue.use(Vuex)

const store = new Vuex.Store({
        state: {
            weatherApiData: [],
            userCity: [],
            cities: [],
            activeCity: '',
            countries: [],
            profile: {}
        },
        getters: {
            weatherApiData(state) {
                return state.weatherApiData
            },
            userCity(state) {
                return state.userCity
            },
            cities(state) {
                return state.cities
            },
            countries(state) {
                return state.countries
            },
            profile(state) {
                return state.profile
            },
            activeCity(state) {
                return state.activeCity
            },
        },
        mutations: {
            setWeatherApiData(state, payload) {
                state.weatherApiData = payload
            },
            setCities(state, payload) {
                state.cities = payload
            },
            setCountries(state, payload) {
                state.countries = payload
            },
            setUserCity(state, payload) {
                state.userCity = payload
            },
            setProfile(state, payload) {
                state.profile = payload
            },
            setActiveCity(state, payload) {
                state.activeCity = payload
            },
        },
        actions: {
            getWeatherApiData({commit}, payload) {
                fetch(`${URL}&lat=${payload.lat}&lon=${payload.lon}`, {method: 'GET'})
                    .then(response => response.json())
                    .then(data => {
                            commit('setWeatherApiData', data.daily)
                            commit('setActiveCity', payload.name)
                        }
                    )
            },
            Registration({dispatch}, payload) {
                fetch(`${HOST}/auth/users/`, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(payload)
                    }
                )
                    .then(response => response.json())
                    .then(() => {
                        dispatch('Login', {
                            username: payload.username,
                            password: payload.password,
                        })
                    })
            },
            Login(store, payload) {
                fetch(`${HOST}/auth/jwt/create/`, {
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(payload)
                    }
                )
                    .then(response => response.json())
                    .then(data => {
                        localStorage.setItem('token', JSON.stringify(data))
                        router.push('/')
                    })
            },
            getCities({commit}) {
                fetch(`${HOST}/cities/`, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        commit('setCities', data)
                    })
            },
            Profile({commit}) {
                fetch(`${HOST}/auth/users/me/`, {
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                        },
                        method: 'GET',
                    }
                )
                    .then(response => response.json())
                    .then(data => {
                        commit('setProfile', data)
                    })
            },
            getUserCities({commit}) {
                fetch(`${HOST}/choices/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                    },
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        commit('setUserCity', data)
                    })
            },
            addUserCity({dispatch},payload) {
                fetch(`${HOST}/choices/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                    },
                    method: 'Post',
                    body: JSON.stringify(payload)
                })
                    .then(response => response.json())
                    .then(() => {
                        dispatch('getUserCities')
                    })
            },
            delUserCity({dispatch},payload) {
                fetch(`${HOST}/choices/${payload}/`, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                    },
                    method: 'Delete',
                })
                    .then(response => response.json())
                    .finally(() => {
                        dispatch('getUserCities')
                    })
            },
            getCountries({commit}) {
                fetch(`${HOST}/countries/`, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        commit('setCountries', data)
                    })
            },

        },
    }
)

export default store
