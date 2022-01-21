import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './views/Index'
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";


Vue.config.productionTip = false

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Index },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile }
]

const router = new VueRouter({
    mode: 'history',
    routes: routes
})

new Vue({
    render: h => h(App),
    router: router
}).$mount('#app')
