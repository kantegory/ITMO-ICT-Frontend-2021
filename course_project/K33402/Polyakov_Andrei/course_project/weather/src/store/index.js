import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    infos: [],
    id: null,
    mainID: null
  },
  mutations: {
    SET_INFOS_TO_STATE: (state, infos) => {
      state.infos = infos
    },
    SET_IDS_TO_STATE: (state, id) => {
      state.id = id
    },
    SET_MAIN_IDS_TO_STATE: (state, mainID) => {
      state.mainID = mainID
    }
  },
  actions: {
    GET_INFOS_FROM_API ({ commit }) {
      const token = localStorage.getItem('token')
      return axios('http://127.0.0.1:8000/api/cities/preferences/', {
        method: 'GET',
        token: token,
        headers: {
          Authorization: 'Token ' + token
        }
      })
        .then((infos) => {
          commit('SET_INFOS_TO_STATE', infos.data)
          return (infos.data)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    GET_CITY_IDS ({ commit }) {
      const token = localStorage.getItem('token')
      return axios('http://127.0.0.1:8000/api/cities/preferences/', {
        method: 'GET',
        token: token,
        headers: {
          Authorization: 'Token ' + token
        }
      })
        .then((infos) => {
          for (let i = 0; i < infos.data.length; i += 1) {
            commit('SET_IDS_TO_STATE', infos.data[i].city.id)
            return (infos.data[i].city.id)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    GET_CITY_MAIN_IDS ({ commit }) {
      const token = localStorage.getItem('token')
      return axios('http://127.0.0.1:8000/api/cities/preferences/', {
        method: 'GET',
        token: token,
        headers: {
          Authorization: 'Token ' + token
        }
      })
        .then((infos) => {
          for (let i = 0; i < infos.data.length; i += 1) {
            commit('SET_MAIN_IDS_TO_STATE', infos.data[i].id)
            return (infos.data[i].id)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    INFOS (state) {
      return state.infos
    },
    ID (state) {
      return state.id
    },
    MAINID (state) {
      return state.mainID
    }
  }
})

export default store
