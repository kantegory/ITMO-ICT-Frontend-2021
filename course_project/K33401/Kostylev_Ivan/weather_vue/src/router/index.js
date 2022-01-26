import Vue from 'vue'
import VueRouter from 'vue-router'
import Weather from '../views/Weather.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from '../views/SignUp.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Weather',
    component: Weather
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
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
