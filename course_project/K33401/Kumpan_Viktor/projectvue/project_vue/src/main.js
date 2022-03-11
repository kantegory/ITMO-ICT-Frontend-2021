import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuelidate from "@vuelidate/core"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import "bootstrap"

import router from "@/router/router";

createApp(App)
    .use(Vuelidate)
    .use(router)
    .use(VueAxios, axios)
    .mount('#app')
