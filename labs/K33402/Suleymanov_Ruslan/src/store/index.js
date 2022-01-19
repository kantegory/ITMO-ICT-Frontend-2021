import Vue from 'vue'
import Vuex from 'vuex'
import {moduleTheme} from "@/store/moduleTheme";
import {moduleCity} from "@/store/moduleCity";
import {moduleMetcast} from "@/store/moduleMetcast";
import {moduleUser} from "@/store/moduleUser";

Vue.use(Vuex)


const store = new Vuex.Store({
    modules: {
        theme: moduleTheme,
        city: moduleCity,
        metcast : moduleMetcast,
        user: moduleUser
    }
})
export default store;