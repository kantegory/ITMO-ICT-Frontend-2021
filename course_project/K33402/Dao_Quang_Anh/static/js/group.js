const routes = [
    {path: '/', redirect:'/step1'},
    {path: '/step1', component:step1},
    {path: '/step2', component:step2},
    {path: '/step3', component:step3},
    
]

const router=new VueRouter({
    routes
})
const app = new Vue({
    router
}).$mount('#app')