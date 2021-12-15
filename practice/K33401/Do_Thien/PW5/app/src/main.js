import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxious from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxious, axios)

new Vue({
  router,
  vuetify,
  axios,
  render: h => h(App)
}).$mount('#app')
