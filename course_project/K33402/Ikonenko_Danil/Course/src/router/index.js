import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginMain from '../views/Login.vue'
import MyBooking from '../views/MyBooking'
import RegisterMain from '../views/Register'
import Search from '../views/Search'
import SearchResultsPage from '../views/SearchResultsPage'
import ChangePassword from "@/views/ChangePassword.vue"
import EditProfile from "@/views/EditProfile.vue"
import MyProfile from "@/views/MyProfile.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginMain
  },
  {
    path: '/Booking',
    name: 'MyBooking',
    component: MyBooking
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterMain
  },
  {
    path: '/',
    name: 'Search',
    component: Search
  },
  {
    path: '/results',
    name: 'Results',
    component: SearchResultsPage
  },
  {
    path: '/my-profile',
    name: 'MyProfile',
    component: MyProfile
  },
  {
    path: '/my-profile/edit',
    name: 'EditProfile',
    component: EditProfile
  },
  {
    path: '/my-profile/change-password',
    name: 'ChangePassword',
    component: ChangePassword
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})


export default router
