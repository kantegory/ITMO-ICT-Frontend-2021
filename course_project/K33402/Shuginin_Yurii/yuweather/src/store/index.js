import Vue from 'vue'
import Vuex from 'vuex'
import forecast from './modules/forecast'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    forecast
  }
})
