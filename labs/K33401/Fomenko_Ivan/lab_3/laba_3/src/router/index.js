import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import TicketWall from '../views/TicketWall.vue'
import OurTeam from '../views/OurTeam.vue'
import AboutUs from '../views/AboutUs.vue'
import ContactUs from '../views/ContactUs.vue'
import PartnersSection from '../views/PartnersSection.vue'
import Buy from '../views/Buy.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/TicketWall',
    name: 'TicketWall',
    component: TicketWall
  },
  {
    path: '/OurTeam',
    name: 'OurTeam',
    component: OurTeam
  },
  {
    path: '/AboutUs',
    name: 'AboutUs',
    component: AboutUs
  },
  {
    path: '/ContactUs',
    name: 'ContactUs',
    component: ContactUs
  },
  {
    path: '/PartnersSection',
    name: 'PartnersSection',
    component: PartnersSection
  },
  {
    path: '/Buy',
    name: 'Buy',
    component: Buy
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
