import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Login from '@/views/Log.vue'
import Account from '@/views/Acc.vue'
import Weather from '@/views/Search.vue'
import Register from '@/views/Reg.vue'
import LogOut from '@/views/LogOut.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/search',
    name: 'Search',
    component: Weather
  },
  {
    path: '/logout',
    name: 'Logout',
    component: LogOut
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
