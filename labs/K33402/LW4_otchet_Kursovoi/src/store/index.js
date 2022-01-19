import { createStore } from "vuex";

export default createStore({
  state: {
    dark: false,
    authenticated: localStorage.authenticated ?? false,
  },
  mutations: {
    setDark: (state, payload) => {
      const { dark } = payload;
      state.dark = dark;
    },
    setAuthenticated: (state, payload) => {
      const { authenticated } = payload;
      state.authenticated = authenticated;
      localStorage.authenticated = authenticated;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getDark: (state) => state.dark,
    getAuthenticated: (state) => state.authenticated,
  },
});
