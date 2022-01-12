import Vue from "vue"
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import axios from "axios"
import VueAxios from "vue-axios"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from "./App.vue"
import router from "./router"
import store from "./store"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)

const token = localStorage.getItem("token")
if (token) {
  Vue.axios.defaults.headers.common.Authorization = token
}

new Vue({
  router,
  axios,
  store,
  render: h => h(App)
}).$mount("#app")
