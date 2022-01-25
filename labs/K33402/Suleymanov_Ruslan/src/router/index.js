import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ThemePage from '../views/ThemePage.vue'
import SignInPage from "@/views/auth/SignInPage";
import SignUpPage from "@/views/auth/SignUpPage";
import ProfilePage from "@/views/ProfilePage";
Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage
    },
    {
        path: '/example',
        name: 'Example',
        component: ThemePage
    },
    {
        path: '/profile',
        name: 'Profile',
        component: ProfilePage
    },
    {
        path: '/signin',
        name: 'SignIn',
        component: SignInPage
    },
    {
        path: '/signup',
        name: 'SignUp',
        component: SignUpPage
    },
]
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach((to, from, next) => {
    let isAuthenticated = localStorage.getItem('token');
    if (to.name !== 'SignIn'&& to.name !== 'SignUp' && !isAuthenticated) next({ name: 'SignIn' })
    else next()
})
export default router