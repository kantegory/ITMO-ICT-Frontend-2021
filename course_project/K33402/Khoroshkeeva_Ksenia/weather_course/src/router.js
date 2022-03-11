import Vue from 'vue'
import VueRouter from 'vue-router'
import Personal from "@/views/Personal";
import Login from "@/views/Login";
import Registration from "@/views/Registration";


Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Personal',
        component: Personal
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/registration',
        name: 'Registration',
        component: Registration
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let isAuthenticated = localStorage.getItem('token');
    if (to.name !== 'Login'&& to.name !== 'Registration' && !isAuthenticated) next({ name: 'Login' })
    else next()
})
export default router