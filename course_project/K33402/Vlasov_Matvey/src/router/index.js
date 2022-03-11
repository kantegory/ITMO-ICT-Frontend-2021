import Vue from 'vue'
import VueRouter from 'vue-router'

import Main from '@/views/Main.vue'
import Signup from '@/views/Signup.vue'
import Login from '@/views/Login.vue'
import Search from '@/views/Search.vue'
import Profile from '@/views/Profile.vue'
import PasswordChange from '@/views/PasswordChange.vue'
import UsernameChange from '@/views/UsernameChange.vue'
import PropertyDetail from '@/views/PropertyDetail.vue'
import Bookings from '@/views/Bookings.vue'
import BookingDetail from '@/views/BookingDetail.vue'
import Property from '@/views/Property.vue'
import PropertyCreation from '@/views/PropertyCreation.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Main,
        meta: {
            title: 'Home4Night: Housing for Vacation'
        }
    },
    {
        path: '/signup',
        name: 'Signup',
        component: Signup,
        meta: {
            title: 'Home4Night: Sign Up'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: {
            title: 'Home4Night: Log in'
        }
    },
    {
        path: '/search',
        name: 'Search',
        component: Search,
        meta: {
            title: 'Home4Night: Housing for Vacation'
        }
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        meta: {
            title: 'Home4Night: My Profile'
        }
    },
    {
        path: '/password/change',
        name: 'PasswordChange',
        component: PasswordChange,
        meta: {
            title: 'Home4Night: Password Change'
        }
    },
    {
        path: '/username/change',
        name: 'UsernameChange',
        component: UsernameChange,
        meta: {
            title: 'Home4Night: Username Change'
        }
    },
    {
        path: '/card/:id/',
        name: 'PropertyDetail',
        component: PropertyDetail,
        meta: {
            title: 'Home4Night: Housing for Vacation'
        }
    },
    {
        path: '/bookings',
        name: 'Bookings',
        component: Bookings,
        meta: {
            title: 'Home4Night: My Bookings'
        }
    },
    {
        path: '/booking/:id/',
        name: 'BookingDetail',
        component: BookingDetail,
        meta: {
            title: 'Home4Night: Housing for Vacation'
        }
    },
    {
        path: '/property',
        name: 'Property',
        component: Property,
        meta: {
            title: 'Home4Night: My Property'
        }
    },
    {
        path: '/property/create',
        name: 'PropertyCreation',
        component: PropertyCreation,
        meta: {
            title: 'Home4Night: Property Creation'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.afterEach((page) => {
    Vue.nextTick(() => {
        document.title = page.meta.title
    })
})

export default router
