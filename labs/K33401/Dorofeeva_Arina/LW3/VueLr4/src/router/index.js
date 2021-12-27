import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cabinet',
        name: 'Cabinet',
        component: () => import('../views/Cabinet.vue')
    },
    {
        path: '/images',
        name: 'Images',
        component: () => import('../views/Images.vue')
    },
    {
        path: '/sign-up',
        name: 'Registration',
        component: () => import('../views/Registration.vue')
    },
    {
        path: '/sign-in',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/videos/:id',
        name: 'videos',
        component: import('../views/Videos.vue'),
        props: {default: true, sidebar: false}
    },
    {
        path: '/:pathMatch(.*)*',
        name: '404',
        component: import('../views/Error.vue'),
    },
    {
        path: '/image/:id',
        name: 'image',
        component: import('../views/Image.vue'),
        props: {default: true, sidebar: false}
    },
    {
        path: '/my-videos/',
        name: 'MyVideos',
        component: import('../views/MyVideos.vue'),
    },
    {
        path: '/user-info/',
        name: 'userInfo',
        component: import('../views/UserInfo.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
