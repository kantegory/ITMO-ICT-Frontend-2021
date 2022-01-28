import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuetify from './plugins/vuetify'
import EventBus from './EventBus'
import store from './store/index'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const options = {
  draggable: false,
  position: 'bottom-left'
}

Vue.use(Toast, options)
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.prototype.$bus = EventBus

new Vue({
  router,
  axios,
  vuetify,
  render: h => h(App),
  store
}).$mount('#app')
