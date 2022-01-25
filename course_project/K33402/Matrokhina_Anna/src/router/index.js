import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Registration from "../views/Registration";
import Authorization from "../views/Authorization";
import Account from "../views/Account";
import WeatherItem from "../views/WeatherItem";
import ProfileEdit from "@/views/ProfileEdit";
import PasswordEdit from "@/views/PasswordEdit";

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
  {
    path: '/account',
    name: 'Account',
    component: Account
  },
  {
    path: '/city/:id',
    name: 'WeatherItem',
    component: WeatherItem
  },
  {
    path: '/profile',
    name: 'ProfileEdit',
    component: ProfileEdit
  },
  {
    path: '/profile/password',
    name: 'PasswordEdit',
    component: PasswordEdit
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
