import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  // Trang Home
  {
    path: "/home",
    name: "Home",
    component: Home,
  },

  // Trang Room
  {
    path: "/rooms",
    name: "RoomSearch",
    component: () => import("../views/RoomSearch.vue"),
  },

  // Trang Hotel
  {
    path: "/hotels",
    name: "HotelSearch",
    component: () => import("../views/HotelSearch.vue"),
  },

  // Trang Sign In
  {
    path: "/signin",
    name: "SignIn",
    component: () => import("../views/auth/SignIn.vue"),
  },

  // Trang Sign up
  {
    path: "/signup",
    name: "SignUp",
    component: () => import("../views/auth/SignUp.vue"),
  },

  // Trang đổi password
  {
    path: "/me/changepassword",
    name: "ChangePassword",
    component: () => import("../views/auth/ChangePassword.vue"),
  },

  // Trang Bookings
  {
    path: "/me/bookings",
    name: "MyBookings",
    component: () => import("../views/MyBookings.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

// Khai báo các trang có thể truy cập Public
const publicRoutes = ["SignIn", "SignUp"];

// Bảo vệ các trang cần phải đăng nhập
router.beforeEach((to, from, next) => {
  // Nếu như URL không nằm trong danh sách public. Người dùng cần có Token.
  // Nếu không, họ sẽ phải quay lại trang đăng nhập
  if (!publicRoutes.includes(to.name) && !localStorage.authToken) {
    next({ name: "SignIn" });
  }
  // Nếu như họ đã đăng nhập rồi. Chúng ta sẽ giấu 2 trang SignIn và SignUp đi
  else if (publicRoutes.includes(to.name) && localStorage.authToken) {
    next({
      name: "Home",
    });
  }
  // Các trường hợp còn lại thì cho truy cập
  else {
    next();
  }
});

export default router;
