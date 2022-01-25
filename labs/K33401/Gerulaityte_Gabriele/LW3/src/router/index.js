import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('../views/registration.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/shop.vue')
  },
  {
    path: '/account',
    name: 'account',
    component: () => import('../views/account.vue')
  },
  {
    path: '/purchased',
    name: 'purchased',
    component: () => import('../views/purchased.vue')
  },
  {
    path: '/liked',
    name: 'liked',
    component: () => import('../views/liked.vue')
  },
  {
    path: '/adress',
    name: 'adress',
    component: () => import('../views/adress.vue')
  },
  {
    path: '/passwordReset',
    name: 'passwordReset',
    component: () => import('../views/passwordReset.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
