import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cities: [['Moscow', '55,7522', '37,6156'], ['LA', '34.0522', '-118.244'], ['London', '51.5058', '-0.12574']],
    weather: [],
    api: '5fa8289d2a7fa01e858bb2efe6a2b11b'
  },
  getters: {
    getCities (state) {
      return state.cities
    },
    getWeather (state) {
      return state.weather
    },
    getApi (state) {
      return state.api
    }
  },
  mutations: {
    // SET_CITIES (state, cities) {
    //   state.cities = cities
    // },
    // SET_WEATHER (state, weather) {
    //   state.weather = weather
    // }
    changeCities: (state, cities) => {
      state.cities = cities
    },
    fetchWeather: (state) => {
      const currentWeather = []
      for (let i = 0; i < this.cities.length; i++) {
        axios
          .get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.cities[i][1] + '&lon=' + this.cities[i][2] + '&exclude={daily}' + '&appid=' + state.api + '&lang=ru&units=metric')
          .then(response => {
            currentWeather.push(response)
          })
      }
      state.weather = currentWeather
    }
  },
  actions: {
    changeCities: ({ commit }, cities) => {
      commit('changeCities', cities)
    },
    weatherCall: ({ commit }) => {
      commit('fetchWeather')
    }
  }
})
