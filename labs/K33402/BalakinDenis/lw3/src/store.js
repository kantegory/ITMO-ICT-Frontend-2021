import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tickets: [
            {
                "id": 1,
                "img": "./DP.png",
                name: "St. Petersburg LED - Moscow DME",
                start: {
                    "time": "20:00",
                    "date": "20.10.2021",
                    "week": "Ср",
                    "city": "St. Petersburg",
                    "airport": "LED"
                },
                end: {
                    "time": "22:00",
                    "date": "20.10.2021",
                    "week": "Ср",
                    "city": "Moscow",
                    "airport": "DME"
                },
                time: "1ч 25м",
                price: "4000руб"
            },
            {
                "id": 2,
                "img": "./DP.png",
                "name": "St. Petersburg LED - Vladivostok VVO",
                "start": {
                    "time": "20:00",
                    "date": "20.10.2021",
                    "week": "Ср",
                    "city": "St. Petersburg",
                    "airport": "LED"
                },
                "end": {
                    "time": "22:00",
                    "date": "20.10.2021",
                    "week": "Ср",
                    "city": "Vladivostok",
                    "airport": "VVO"
                },
                "time": "7ч 25м",
                "price": "40000руб"
            },
            {
                "id": 3,
                "img": "./DP.png",
                "name": "Vladivostok VVO - Moscow DME",
                "start": {
                    "time": "20:00",
                    "date": "20.10.2021",
                    "week": "Ср",
                    "city": "Vladivostok",
                    "airport": "VVO"
                },
                "end": {
                    "time": "22:00",
                    "date": "20.10.2021",
                    "week": "Ср",
                    "city": "Moscow",
                    "airport": "DME"
                },
                "time": "1ч 25м",
                "price": "3000руб"
            }
        ]
    },
    mutations: {
        setTickets (state, payload) {
            state.tickets = payload
        }
    },
    getters: {
        tickets: state => {return state.tickets}

    }
})
export default store;
