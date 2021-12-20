import Index from "@/views/Index.vue"
import Login from "@/views/Login.vue"
import MyBookings from "@/views/MyBookings.vue"
import Registration from "@/views/Registration.vue"
import Vue from "vue"
import VueRouter from "vue-router"

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
    component: MyBookings
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
