import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    username: '',
  },
  mutations: {
    updateToken(state, payload) {
      console.log('payload', payload)
      localStorage.setItem('token', payload.token)
      state.token = payload.token
    },
    updateUsername(state, payload) {
      console.log('payload', payload)
      state.username = payload.username
    },
  },
  getters: {
    isLogged: state => {
      return state.token !== '';
    }
  }
})
export default store
