import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/search',
        name: 'Search',
        component: Search
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
