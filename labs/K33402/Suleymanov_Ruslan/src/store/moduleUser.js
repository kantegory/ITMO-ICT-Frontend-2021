import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";

export const moduleUser = {
    state: () => ({
        userInfo: {},
        membership: [],
        isAuthenticated: false,
        access: '',
        refresh: ''
    }),
    mutations: {
        addToken (state, payload) {
            state.access = payload.access
            state.refresh = payload.refresh
            state.isAuthenticated = true
        },
        isAuthenticated (state, payload) {
            state.isAuthenticated =  payload
        },
        addUser (state, payload) {
            state.userInfo = payload
        },
        addMembership (state, payload) {
            state.membership = payload
        }
    },
    actions: {
        deleteCityUser(store, payload) {
            /**
             * DELETE город,
             * @constructor
             * @param {string} payload ид удаленного города
             * @return none.
             */
            fetch(`${URL}api/me/city/${payload}/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                },
                method: 'DELETE',
            })
                .then(() => {
                    this.dispatch('addUser');
                })
                .catch(err => console.log(err))
        },
        addUser ({ commit }) {
            /**
             * GET user,
             * @constructor
             * @param none
             * @return {object} data - обьект, с данными юзера.
             */
            fetch(`${URL}api/me/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                },
                method: 'GET',
            })
                .then(checkResponse)
                .then(data => {
                    commit('addUser', data);
                    this.dispatch('addMembership');

                    commit('clearWeather');
                    data.cities.map((element)=> {
                        this.dispatch('addWeather', {"id": element.id, "city_cod": element.city_cod})
                    })
                })
                .catch(err => console.log(err))
        },
        addMembership ({ commit }) {
            /**
             * GET user cities,
             * @constructor
             * @param none
             * @return {array} data - массив городов юзера.
             */
            fetch(`${URL}api/me/city/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                },
                method: 'GET',
            })
                .then(checkResponse)
                .then(data => {
                    commit('addMembership', data);
                })
                .catch(err => console.log(err))
        },
    },
    getters: {
        isAuthenticated (state) {
            return state.isAuthenticated
        },
        userInfo (state) {
            return state.userInfo
        },
        membership (state) {
            return state.membership
        },
    }
}