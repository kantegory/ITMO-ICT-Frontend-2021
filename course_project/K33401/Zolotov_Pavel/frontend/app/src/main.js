import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

const token = localStorage.getItem('token')
if (token != null) {
  axios.defaults.headers.common.Authorization = `Token ${token}`
}

new Vue({
  router,
  vuetify,
  axios,
  store,
  render: h => h(App)
}).$mount('#app')
