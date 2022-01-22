import Vue from 'vue'
import VueRouter from 'vue-router'
import MyTicketPage from '../views/MyTicketPage'
import AnswerPage from '../views/AnswerPage'
import SignupPage from '../views/SignupPage'
import SignInPage from '../views/SignInPage'
import MainPage from '../views/MainPage'
import ContactPage from '../views/ContactPage'
import ChangePage from '../views/ChangePage'

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
    path: '/SignIn',
    name: 'SignIn',
    component: SignInPage
  },
  {
    path: '/MyTicket',
    name: 'MyTicket',
    component: MyTicketPage
  },
  {
    path: '/Answer',
    name: 'Answer',
    component: AnswerPage
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactPage
  },
  {
    path: '/Change',
    name: 'Change',
    component: ChangePage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
