import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
    username: '',
    email: ''
  },
  mutations: {
    updateToken(state, payload) {
      console.log('payload', payload)
      localStorage.setItem('token', payload.token)
      state.token = payload.token
    },
    updateUserInfo(state, payload) {
      console.log('payload', payload)
      if (payload.username) {
        state.username = payload.username
      }
      if (payload.email) {
        state.email = payload.email
      }
    },
  },
  getters: {
    isLogged: state => {
      return state.token !== '';
    }
  }
})
export default store
