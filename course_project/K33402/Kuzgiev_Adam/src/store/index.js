import Vue from 'vue'
import Vuex from 'vuex'
import {WeatherModule} from "@/store/weather"
import {CityModule} from "@/store/city"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: () => ({
        citiesAll: require("@/assets/city.list.min.json"),
        cities: require("@/assets/city.list.min.json"),
        units: localStorage.getItem('units') || 'metric',
        unitsData: {
            standard: {deg: 'K', speed: 'm/s'},
            metric: {deg: '°C', speed: 'm/s'},
            imperial: {deg: '°F', speed: 'm/h'}
        },
        activeCity: {},
        gettingLocation: localStorage.getItem('location'),
        location: JSON.parse(localStorage.getItem('location')) || {},
        daysWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        fullDaysWeek: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    }),
    getters: {},
    mutations: {
        ADD_GETTING_LOCATION(state, data) {
            state.gettingLocation = data
        },
        ADD_LOCATION(state, data) {
            state.location = data
            if (data.name) {
                localStorage.setItem('location', JSON.stringify(data))
            } else {
                localStorage.removeItem('location')
            }
        },
        ADD_UNITS(state, data) {
            state.units = data
            localStorage.setItem('units', data)
        },
        REMOVE_CITY(state, id) {
            state.cities = state.cities.filter(city => city?.id !== id)
        },
        ADD_CITY(state, data) {
            state.cities.unshift(data)
        },
        RETURN_ALL_CITY(state) {
            state.cities = require("@/assets/city.list.min.json")
        },
        ADD_ACTIVE_CITY(state, data) {
            state.activeCity = data
        }
    },
    actions: {
        ADD_LOCATION(state) {
            if (!("geolocation" in navigator)) {
                return
            }
            navigator.geolocation.getCurrentPosition(res => {
                state.commit('ADD_LOCATION', res)
                state.dispatch('ADD_LOCAL_WEATHER')
                state.commit('ADD_GETTING_LOCATION', true)
            }, () => {
                state.commit('ADD_LOCATION', {})
                state.commit('ADD_GETTING_LOCATION', false)
            })
        },
        ADD_ACTIVE_CITY(state, payload) {
            const data = state.rootState.city.data.find((city) => city?.id.toString() === payload)
            if (data === undefined) {
                state.commit('ADD_ACTIVE_CITY', state.state.cities.filter(x => x?.id.toString() === payload)[0], {root: true})
            } else {
                state.commit('ADD_ACTIVE_CITY', data, {root: true})
            }
        }
    },
    modules: {
        weather: WeatherModule,
        city: CityModule,
    }
})

export default store;

