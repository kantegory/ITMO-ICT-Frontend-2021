import Vue from 'vue'
import VueRouter from 'vue-router'
import Personal from '../views/Personal.vue'
import SignIn from '../views/SignIn.vue'
import SignUp from "../views/SignUp";
import Preferences from "@/views/Preferences";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Personal',
    component: Personal
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
    path: '/preferences',
    name: 'Preferences',
    component: Preferences
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
