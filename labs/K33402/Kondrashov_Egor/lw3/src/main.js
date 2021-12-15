import Vue from "vue"
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import App from "./App.vue"
import router from "./router"

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")
