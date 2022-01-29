import Vue from 'vue';
import VueRouter from 'vue-router';

import StartPage from '../views/StartPage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import TicketsPage from '../views/TicketsPage.vue'
import AirportsPage from '../views/AirportsPage.vue'
import MyTicketsPage from '../views/MyTicketsPage.vue'
import ContactsPage from '../views/ContactsPage.vue'
import TownsPage from '../views/TownsPage.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/start',
        name: 'StartPage',
        component: StartPage
    },
    {
        path: '/login',
        name: 'LoginPage',
        component: LoginPage
    },
    {
        path: '/contacts',
        name: 'ContactsPage',
        component: ContactsPage
    },
    {
        path: '/register',
        name: 'RegisterPage',
        component: RegisterPage
    },
    {
        path: '/tickets',
        name: 'TicketsPage',
        component: TicketsPage
    },
    {
        path: '/towns',
        name: 'TownssPage',
        component: TownsPage
    },
    {
        path: '/mytickets',
        name: 'MyTicketsPage',
        component: MyTicketsPage
    },
    {
        path: '/airports',
        name: 'AirportsPage',
        component: AirportsPage
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
export default router