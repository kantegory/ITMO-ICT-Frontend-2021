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
        component: Main,
        meta: {
            title: 'Home4Night: Housing for Vacation'
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            title: 'Home4Night: Sign Up'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Home4Night: Log in'
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            title: 'Home4Night: Housing for Vacation'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((page) => {
    Vue.nextTick(() => {
        document.title = page.meta.title
    })
})

export default router
