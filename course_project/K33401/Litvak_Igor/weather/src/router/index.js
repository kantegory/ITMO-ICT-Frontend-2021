import Index from "../views/Index";
import Login from "../views/Login";
import Register from "../views/Register";
import Profile from "../views/Profile";
import VueRouter from "vue-router";
import Vue from "vue";
import store from "../store";

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

router.beforeEach(function(to, from, next) {
    // Redirect to login page if not logged in and trying to access a restricted page
    const publicPages = ['/login', '/register'];
    const authRequired = !publicPages.includes(to.path);
    const loggedIn = store.getters.loggedIn;

    if (authRequired && !loggedIn) {
        return next('/login');
    }

    next();
});

export default router;
