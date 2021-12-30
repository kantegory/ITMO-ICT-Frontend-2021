import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import Vuetify from "vuetify";
import Toasted from "vue-toasted";

import axios from "axios";
import VueAxios from "vue-axios";

Vue.config.productionTip = false;

// Dùng thư viện gọi API
Vue.use(VueAxios, axios);

// Dùng thư viện pop up nhỏ
Vue.use(Toasted, {
  fullWidth: true,
});

// Dùng vuetify và các bộ icon mở rộng
Vue.use(Vuetify, {
  iconfont: "mdi" || "fa" || "fa4",
});

new Vue({
  router,
  store,
  vuetify,
  axios,
  render: (h) => h(App),
}).$mount("#app");
