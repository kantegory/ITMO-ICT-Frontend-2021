import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store.js'
import Home from '../views/Home.vue'
import JobList from '@/views/JobList.vue'
import JobDetails from '@/views/JobDetails.vue'
import JobResponse from '@/views/JobResponse.vue'
import JobResponseList from '@/views/JobResponseList.vue'
import Login from '../components/Login.vue'
import Register from '../components/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/jobs',
    name: 'JobList',
    component: JobList
  },
  {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetails
  },
  {
    path: '/jobs/:id/response',
    name: 'JobResponse',
    component: JobResponse,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/responses',
    name: 'JobResponseList',
    component: JobResponseList,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/login')
  } else {
    next()
  }
})

export default router
