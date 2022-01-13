import EditProfile from "@/views/EditProfile.vue"
import HotelDetail from "@/views/HotelDetail.vue"
import Index from "@/views/Index.vue"
import Login from "@/views/Login.vue"
import MyBookings from "@/views/MyBookings.vue"
import MyProfile from "@/views/MyProfile.vue"
import Registration from "@/views/Registration.vue"
import SearchResults from "@/views/SearchResults.vue"
import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store/index.js"

Vue.use(VueRouter)
const routes = [
  {
    path: "/",
    name: "Index",
    component: Index
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/register",
    name: "Registration",
    component: Registration
  },
  {
    path: "/my-bookings",
    name: "MyBookings",
    component: MyBookings,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/search-results",
    name: "SearchResults",
    component: SearchResults
  },
  {
    path: "/hotels/:id",
    name: "HotelDetail",
    component: HotelDetail
  },
  {
    path: "/my-profile",
    name: "MyProfile",
    component: MyProfile,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/my-profile/edit",
    name: "EditProfile",
    component: EditProfile,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next("/login")
  } else {
    next()
  }
})

export default router
