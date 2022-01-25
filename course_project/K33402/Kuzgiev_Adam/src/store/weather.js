import axios from "axios";

export const WeatherModule = {
    state: () => ({
        data: [],
        full_weather: {},
        local_weather: {}
    }),
    getters: {},
    mutations: {
        ADD_WEATHER_MODULE(state, data) {
            if (data) {
                if (state.data.filter(weather => weather.id === data.id).length > 0) {
                    state.data = state.data.map(o => o.id === data.id ? data : o)
                } else {
                    state.data.unshift(data)
                }
            }
        },
        REMOVE_ALL_WEATHER_MODULE(state) {
            state.data = []
        },
        REMOVE_WEATHER_MODULE(state, id) {
            state.data = state.data.filter(weather => weather.id !== id)
        },
        ADD_FULL_WEATHER_MODULE(state, data) {
            state.full_weather = data
        },
        ADD_LOCAL_WEATHER_MODULE(state, data) {
            state.local_weather = data
        },
    },
    actions: {
         ADD_WEATHER(state, id) {
            state.commit('ADD_WEATHER_MODULE', {id: id}, {root: true})
            if (id) {
                axios.get('https://api.openweathermap.org/data/2.5/weather', {
                    params: {
                        id: id,
                        appid: '7bec99c40964201451827401996c14fc',
                        units: state.rootState['units']
                    }
                }).then(res => {
                    state.commit('ADD_WEATHER_MODULE', res.data, {root: true})
                }).catch((err) => {
                    if (!err.response) {
                        state.commit('ADD_WEATHER_MODULE', {id: id, cod: 0}, {root: true})
                    }
                })
            } else {
                state.commit('ADD_WEATHER_MODULE', {cod: 404}, {root: true})
            }
        },
         ADD_FULL_WEATHER(state) {
            state.commit('ADD_FULL_WEATHER_MODULE', {}, {root: true})
            const city = state.rootState.activeCity
            if (city && Object.keys(city).length > 0) {
                axios.get('https://api.openweathermap.org/data/2.5/onecall', {
                    params: {
                        lat: city.coord.lat,
                        lon: city.coord.lon,
                        exclude: 'minutely',
                        appid: '7bec99c40964201451827401996c14fc',
                        units: state.rootState.units
                    }
                }).then((res) => {
                    state.commit('ADD_FULL_WEATHER_MODULE', res.data, {root: true})
                }).catch((err) => {
                    if (!err.response) {
                        state.commit('ADD_FULL_WEATHER_MODULE', {cod: 0}, {root: true})
                    }
                })
            } else {
                state.commit('ADD_FULL_WEATHER_MODULE', {cod: 404}, {root: true})
            }
        },
        ADD_LOCAL_WEATHER(state) {
            state.commit('ADD_LOCAL_WEATHER_MODULE', {}, {root: true})
            if (state.rootState.location.coords) {
                axios.get('https://api.openweathermap.org/data/2.5/onecall', {
                    params: {
                        lat: state.rootState.location.coords.latitude,
                        lon: state.rootState.location.coords.longitude,
                        exclude: 'minutely',
                        appid: '7bec99c40964201451827401996c14fc',
                        units: state.rootState.units
                    }
                }).then((res) => {
                    state.commit('ADD_LOCAL_WEATHER_MODULE', res.data, {root: true});
                }).catch((err) => {
                    if (!err.response) {
                        state.commit('ADD_LOCAL_WEATHER_MODULE', {cod: 0}, {root: true})
                    }
                })
            } else {
                state.commit('ADD_LOCAL_WEATHER_MODULE', {cod: 404}, {root: true})
            }
        },
    },
}