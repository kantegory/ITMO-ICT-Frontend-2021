import { createStore } from "vuex";

export default createStore({
  state: {
    dark: false,
  },
  mutations: {
    setDark: (state, payload) => {
      const { dark } = payload;
      state.dark = dark;
    },
  },
  actions: {},
  modules: {},
  getters: {
    getDark: (state) => state.dark,
  },
});
