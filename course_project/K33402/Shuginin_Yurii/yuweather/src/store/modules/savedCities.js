export default {
  actions: {
    addCity (ctx, city = '') {
      if (city) {
        ctx.commit('addUpdate', city)
      }
    },

    deleteCity ({ commit, getters }, city = '') {
      const index = getters.getCities.indexOf(city)
      if (city && index !== -1) {
        commit('deleteUpdate', index)
      }
    }
  },

  mutations: {
    addUpdate (state, city) {
      state.cities.push(city)
      localStorage.setItem('cities', JSON.stringify(state.cities))
    },

    deleteUpdate (state, index) {
      state.cities.splice(index, 1)
      localStorage.setItem('cities', JSON.stringify(state.cities))
    }
  },

  state: {
    cities: JSON.parse(localStorage.getItem('cities')) || []
  },

  getters: {
    getCities (state) {
      return state.cities
    }
  }
}
