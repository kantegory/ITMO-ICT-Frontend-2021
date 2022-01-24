import Index from "../views/Index";
import Login from "../views/Login";
import Register from "../views/Register";
import Profile from "../views/Profile";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
    { path: '/', component: Index },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/profile', component: Profile }
];

const router = new VueRouter({
    mode: 'history',
    routes: routes
});
export default router;
