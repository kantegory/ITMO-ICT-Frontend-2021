import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'


Vue.use(Vuetify);
Vue.config.productionTip = false

new Vue({
  router,
  vuetify : new Vuetify(),
  store,
  render: h => h(App),
}).$mount('#app')
