import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLoaded: false,
        authToken: '',
        isLogged: false,
        id: '',
        username: '',
        firstName: '',
        lastName: '',
        role: ''
    },
    mutations: {
        isLoggedUpdate (_, params) {
            if (params === undefined) return
            for (const [key, value] of Object.entries(params)) {
                this.state[key] = value
                if (key === 'authToken') {
                    this.state.isLogged = this.state.authToken !== ''
                }
            }
            this.state.isLoaded = true
        }
    }
})
export default store
