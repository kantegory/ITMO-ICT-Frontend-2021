import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/booking",
    name: "Booking",
    component: () => import("../views/Booking.vue"),
  },
  {
    path: "/metasearch",
    name: "MetaSearch",
    component: () => import("../views/MetaSearch.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Signup.vue"),
  },
  {
    path: "/changepassword",
    name: "ChangePassword",
    component: () => import("../views/ChangePassword.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const privateRoutes = ["Profile"];
const authRoutes = ["Register", "Login"];

router.beforeEach((to, from, next) => {
  if (privateRoutes.includes(to.name) && !localStorage.authenticated) {
    next({ name: "Login" });
  } else if (authRoutes.includes(to.name) && localStorage.authenticated) {
    next({
      name: "Home",
    });
  } else {
    next();
  }
});

export default router;
