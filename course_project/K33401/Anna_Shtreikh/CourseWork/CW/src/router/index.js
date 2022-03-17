import Vue from 'vue'
import VueRouter from 'vue-router'
import Greeting from '../views/Greeting.vue'
import Log from '../views/Log.vue'
import Logout from '../views/Logout.vue'
import Reg from '../views/Reg.vue'
import Planes from '../views/Planes.vue'
import Flight from '../views/Flight.vue'
import Tickets from '../views/Tickets.vue'
import Passengers from '../views/Passengers.vue'
import FlightCreate from '../views/FlightCreate.vue'
import FlightUpd from '../views/FlightUpd.vue'
import CreateTicket from '../views/CreateTicket.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Greeting',
        component: Greeting
    },
    {
        path: '/log',
        name: 'Log',
        component: Log
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/reg',
        name: 'Reg',
        component: Reg
    },
    {
        path: '/planes',
        name: 'Planes',
        component: Planes
    },
    {
        path: '/tickets',
        name: 'Tickets',
        component: Tickets
    },
    {
        path: '/flight/:flight_id/ticket',
        name: 'CreateTicket',
        component: CreateTicket
    },
    {
        path: '/flight',
        name: 'Flight',
        component: Flight
    },
    {
      path: '/flight/create',
      name: 'FlightCreate',
      component: FlightCreate
    },
    {
      path: '/flight/upd/:flight_id/',
      name: 'FlightUpd',
      component: FlightUpd
    },
    {
      path: '/passengers',
      name: 'Passengers',
      component: Passengers
    },
    {
      path: '/flights/create',
      name: 'FlightCreate',
      component: FlightCreate
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router