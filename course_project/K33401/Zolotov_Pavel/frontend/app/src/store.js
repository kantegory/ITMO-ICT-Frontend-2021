import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: ''
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status
  },
  mutations: {
    auth_request (state) {
      state.status = 'loading'
    },
    auth_success (state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    reg_success (state, payload) {
      state.status = 'success'
      state.user = payload.user
    },
    logout_success (state) {
      state.status = ''
      state.token = ''
    },
    auth_error (state) {
      state.status = 'error'
    }
  },
  actions: {
    login ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:8000/auth/token/login/', data: user, method: 'POST' })
          .then(resp => {
            const token = resp.data.auth_token
            const userData = user.username

            localStorage.setItem('token', token)
            axios.defaults.headers.common.Authorization = `Token ${token}`
            commit('auth_success', { token: token, user: userData })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    register ({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:8000/auth/users/', data: user, method: 'POST' })
          .then(resp => {
            const userData = user.username
            commit('reg_success', { user: userData })
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            reject(err)
          })
      })
    },
    logout ({ commit }) {
      commit('logout_success')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common.Authorization
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: 'http://localhost:8000/auth/token/logout/' })
          .then(resp => {
            resolve(resp)
          })
          .catch(err => {
            commit('auth_error', err)
            reject(err)
          })
      })
    }
  },
  modules: {

  }
})
