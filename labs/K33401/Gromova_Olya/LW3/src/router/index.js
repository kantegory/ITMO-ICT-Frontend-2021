import Vue from 'vue';
import VueRouter from 'vue-router';

import StartPage from '../views/StartPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import TicketsPage from '../views/TicketsPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/start',
        name: 'StartPage',
        component: StartPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/tickets',
        name: 'TicketsPage',
        component: TicketsPage
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router