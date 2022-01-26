import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import {createRouter, createWebHistory} from "vue-router";
import NewsMy from "@/pages/NewsMy";
import NewsPublic from "@/pages/NewsPublic";
import Profile from "@/pages/Profile";
import NewsDetail from "@/pages/NewsDetail";

const routes = [
    {
        path: '/news',
        component: NewsMy
    },
    {
        path: '/news/public',
        component: NewsPublic
    },
    {
        path: '/news/public/:id/',
        component: NewsDetail
    },
    {
        path: '/news/:id/',
        component: NewsDetail
    },
    {
        path: '/auth/signup',
        component: SignUp,
    },
    {
        path: '/auth/signin',
        component: SignIn
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/profile/:id/',
        component: Profile
    },
]
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;