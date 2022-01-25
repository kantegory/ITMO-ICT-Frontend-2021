import Vue from 'vue'
import Vuex from 'vuex'

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
  }
})
