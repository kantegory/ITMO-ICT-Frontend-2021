import axios from "axios"
import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || ""
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    authHeader: state => `Bearer ${state.token}`
  },
  mutations: {
    auth_request(state) {
      state.status = "loading"
    },
    auth_success(state, payload) {
      state.status = "success"
      state.token = payload.token
    },
    auth_error(state) {
      state.status = "error"
    },
    logout(state) {
      state.status = ""
      state.token = ""
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request")
        const params = new URLSearchParams()
        params.append("username", user.username)
        params.append("password", user.password)
        const config = {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }
        axios.post("http://localhost:8000/api/auth/jwt/login", params, config)
          .then(resp => {
            const token = resp.data.access_token
            localStorage.setItem("token", token)
            commit("auth_success", { token: token })
            resolve(resp)
          })
          .catch(err => {
            commit("auth_error")
            localStorage.removeItem("token")
            reject(err)
          })
      })
    },
    logout({ commit }) {
      return new Promise((resolve, reject) => {
        commit("logout")
        localStorage.removeItem("token")
        resolve()
      })
    }
  },
  modules: {

  }
})
