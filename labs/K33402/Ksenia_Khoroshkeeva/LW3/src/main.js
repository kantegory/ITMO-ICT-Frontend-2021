import Vue from 'vue'
import App from './App.vue'

import router from './router'
import store from './store'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import vSelect from 'vue-select'


Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.component('v-select', vSelect)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
