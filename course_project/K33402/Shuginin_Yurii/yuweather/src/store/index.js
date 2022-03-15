import Vue from 'vue'
import Vuex from 'vuex'
import forecast from './modules/forecast'
import savedCities from './modules/savedCities'
import todayWeather from './modules/todayWeather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    forecast,
    savedCities,
    todayWeather
  }
})
