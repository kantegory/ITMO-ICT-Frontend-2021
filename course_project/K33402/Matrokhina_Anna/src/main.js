import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import './assets/styles.scss'

Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
