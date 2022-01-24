import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    username: '',
    email: '',
    cities: [['Moscow', '55,7522', '37,6156'], ['LA', '34.0522', '-118.244'], ['London', '51.5058', '-0.12574']],
    weather: []
  },
  getters: {
    getCities (state) {
      return state.cities
    },
    getWeather (state) {
      return state.weather
    }
  },
  mutations: {
    SET_CITIES (state, cities) {
      state.cities = cities
    },
    SET_WEATHER (state, weather) {
      state.weather = weather
    }
  },
  actions: {
    getWeather ({ commit }) {
      const currentWeather = []
      for (let i = 0; i < this.cities.length; i++) {
        axios
          .get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.cities[i][1] + '&lon=' + this.cities[i][2] + '&exclude={daily}' + '&appid=' + '5fa8289d2a7fa01e858bb2efe6a2b11b' + '&lang=ru&units=metric')
          .then(response => {
            currentWeather.push(response)
          })
        // setTimeout('1000')
      }
      commit('SET_WEATHER', currentWeather)
    }
  }
})
