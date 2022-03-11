import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignUpView from '@/views/SignUpView.vue'
import ProfileView from '@/views/ProfileView.vue'
import FavouritesView from '@/views/FavouritesView.vue'
import ForecastView from '@/views/ForecastView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/registration',
    name: 'registration',
    component: SignUpView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: FavouritesView
  },
  {
    path: '/forecast',
    name: 'forecast',
    component: ForecastView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
