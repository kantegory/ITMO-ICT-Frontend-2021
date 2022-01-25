import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Index from '../views/Index.vue'
import SignUp from '../views/SignUp.vue'
import Settings from '../views/Settings.vue'
import Search from '../views/Search.vue'
import AdvancedWeather from '../views/AdvancedWeather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/advancedweather',
    name: 'AdvanceDWeather',
    component: AdvancedWeather
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
