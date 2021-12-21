import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

fetch(process.env.BASE_URL + 'config.json')
    .then((response) => response.json())
    .then((config) => {
        Vue.prototype.$config = config
        new Vue({
            router,
            vuetify,
            render: h => h(App)
        }).$mount('#app')
    })
