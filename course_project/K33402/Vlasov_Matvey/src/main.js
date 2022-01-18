import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store.js'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import vuetify from './plugins/vuetify'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.config.productionTip = false

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App)
}).$mount('#app')
