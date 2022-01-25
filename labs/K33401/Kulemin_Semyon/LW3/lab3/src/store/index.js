import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    cities: [],
    weather: []
  },
  getters: {
    CITIES (state) {
      return state.cities
    },
    WEATHER (state) {
      return state.weather
    }
  },
  mutations: {
    setCities (state, payload) {
      state.cities = payload
    }
  },
  actions: {
    getCities ({ commit }) {
      commit('setCities', [['Moscow', '55,7522', '37,6156'], ['LA', '34.0522', '-118.244'], ['London', '51.5058', '-0.12574'], ['NY', '40.7143', '-74.006']])
    }
  }
})
