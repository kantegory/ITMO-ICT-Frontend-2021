import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from "../views/Registration";
import Authorization from "../views/Authorization";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
    {
        path: '/auth',
        name: 'Authorization',
        component: Authorization
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
