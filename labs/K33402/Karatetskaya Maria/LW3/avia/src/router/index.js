import Vue from 'vue'
import VueRouter from 'vue-router'
import Tickets from '../views/Tickets'
import SignupPage from '../views/SignupPage'
import SignInPage from '../views/SignInPage'
import MainPage from '../views/MainPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Signup',
    name: 'Signup',
    component: SignupPage
  },
  {
    path: '/Main',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/',
    name: 'SignIn',
    component: SignInPage
  },
  {
    path: '/Tickets',
    name: 'Tickets',
    component: Tickets
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
