import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cities: [['Moscow', '55,7522', '37,6156'], ['LA', '34.0522', '-118.244'], ['London', '51.5058', '-0.12574'], ['NY', '40.7143', '-74.006']],
    weather: [],
    cityForFull: [['Moscow', '55,7522', '37,6156']],
    lat: '',
    lon: ''
  },
  getters: {
    CITIES (state) {
      return state.cities
    },
    WEATHER (state) {
      return state.weather
    },
    CITYFORFULL (state) {
      return state.cityForFull
    }
  },
  mutations: {
    setCities (state, payload) {
      state.cities = payload
    },
    setCityForFull (state, payload) {
      state.cityForFull = payload
    },
    changeCity (state, payload) {
      state.cities.splice(payload[0], 1, payload.slice(1, 4))
    }
  },
  actions: {
    updateCities (context, payload) {
      context.commit('changeCity', payload)
    },
    cityForFull (context, payload) {
      context.commit('setCityForFull', payload)
    }
  }
})
