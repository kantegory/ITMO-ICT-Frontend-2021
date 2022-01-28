import axios from "axios"
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "bootstrap/dist/css/bootstrap.css"
import Vue from "vue"
import VueAxios from "vue-axios"
import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueAxios, axios)

new Vue({
  router,
  axios,
  render: h => h(App)
}).$mount("#app")
