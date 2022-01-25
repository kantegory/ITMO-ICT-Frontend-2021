import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from "@/router";

Vue.use(Vuex)

const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 1000,
    headers: {'Content-type': 'application/json; charset=UTF-8',}
});


const store = new Vuex.Store({
    state: {
        id: null,
        username: '',
        email: '',
        filterCountry: '',
        filterSearch: '',
        citypreforence: [],
        citylist: []
    },
    getters: {
        filterCountry(state) {
            return state.filterCountry
        },
        filterSearch(state) {
            return state.filterSearch
        },
        citylist(state) {
            return state.citylist
        },
        citypreforence(state) {
            return state.citypreforence
        },
        email(state) {
            return state.email
        },
        username(state) {
            return state.username
        },
    },
    mutations: {
        setUser(state, payload) {
            state.id = payload.id
            state.username = payload.username
            state.email = payload.email
        },
        setCities(state, payload) {
            state.citylist = payload
        },
        setFilterCountry(state, payload) {
            state.filterCountry = payload
        },
        setSearch(state, payload) {
            state.filterSearch = payload
        },
        setCitypreforence(state, payload) {
            state.citypreforence = payload
        },
    },
    actions: {
        onSubmitSignUp(store, payload) {
            instance.post(`/auth/users/`, JSON.stringify(payload))
                .then(function (data) {
                    if (200 <= data.status < 300) {
                        return data.data;
                    }
                    return Promise.reject(data.status);
                })
                .then(function () {
                    this.dispatch('onSubmitSignIn', {
                        username: payload.username,
                        password: payload.password,
                        id: payload.id
                    })
                })
        },
        onSubmitSignIn(store, payload) {
            instance.post(`/auth/jwt/create/`, JSON.stringify(payload))
                .then(function (data) {
                    if (200 <= data.status < 300) {
                        return data.data;
                    }
                    return Promise.reject(data.status);
                })
                .then(token => {
                    localStorage.setItem('token', JSON.stringify(token));
                    router.push('/')
                })
        },
        refreshToken() {
            instance.post(`/auth/jwt/refresh/`, {refresh: JSON.parse(localStorage.getItem('token'))?.refresh})
                .then(function (data) {
                    if (200 <= data.status < 300) {
                        return data.data;
                    }
                    return Promise.reject(data.status);
                })
                .then(token => {
                    localStorage.setItem('token', JSON.stringify(token));
                    router.push('/')
                })
        },
        mountedProfile({commit}) {
            instance
                .get(`/auth/users/me/`, {
                    headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                    }
                })
                .then(function (data) {
                    if (200 <= data.status < 300) {
                        return data.data;
                    }
                    return Promise.reject(data.status);
                })
                .then(user => {
                    commit('setUser', {username: user.username, email: user.email})
                })
        },
        cityList({commit}) {
            instance.get(`/cities/all/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                }
            }).then(function (data) {
                if (200 <= data.status < 300) {
                    return data.data;
                }
                return Promise.reject(data);
            })
                .then(cities => {
                    commit('setCities', cities)
                })
        },
        preferencesCityList({commit}) {
            instance.get(`/cities/preferences/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                }
            }).then(function (data) {
                if (200 <= data.status < 300) {
                    return data.data;
                }
                return Promise.reject(data);
            })
                .then(cities => {
                    commit('setCitypreforence', cities)
                })
        },
        addCity(store, payload) {
            instance.post(`/cities/preferences/`, {city: payload}, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                }
            }).then(function (data) {
                if (200 <= data.status < 300) {
                    return data.data;
                }
                return Promise.reject(data);
            })
                .then(() => {
                    this.dispatch('preferencesCityList')
                })
        },
        removeCity(store, payload) {
            instance.delete(`/cities/preferences/${payload}/`, {
                headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                }
            }).then(function (data) {
                if (200 <= data.status < 300) {
                    return data.data;
                }
                return Promise.reject(data);
            })
                .then(() => {
                    this.dispatch('preferencesCityList')
                })
        }
    }
})
export default store;
