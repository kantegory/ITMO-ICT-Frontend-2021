import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

/**
 * State toàn bộ (Global state). Component nào cũng có thể sử dụng được.
 */
export default new Vuex.Store({
  state: {
    // Lưu giữ mã xác thực.
    authToken: null,
  },
  mutations: {
    // Gọi function này khi muốn cập nhật giá trị authToken
    setAuthToken: (state, payload) => {
      state.authToken = payload;
    },
  },
  actions: {},
  modules: {},
  getters: {
    // Gọi function này khi muốn lấy giá trị authToken
    getAuthToken: (state) => state.authToken,
  },
});
