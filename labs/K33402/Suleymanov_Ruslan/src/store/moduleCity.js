import {URL} from "@/utils/const";
import {checkResponse} from "@/http/checkResponse";

export const moduleCity = {
    state: () => ({
        cities: [
        ],
        city: {}
    }),
    mutations: {
        addCityList(state, payload) {
            state.cities = payload
        },
        addCity(state, payload) {
            state.city = payload
        },
    },
    actions: {
        getMetcastCity() {
            this.dispatch('addCurrentWeather', this.state.city.city.city_cod)
        },
        postCity() {
            /**
             * POST api/me/city - отправление нового города пользователя на сервер по айди,
             * @constructor
             * @return none.
             */
            fetch(`${URL}api/me/city/`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${JSON.parse(localStorage.getItem('token'))?.access}`
                },
                method: 'POST',
                body: JSON.stringify({"city": this.state.city.city.id})
            })
                .then(checkResponse)
                .then(() => {
                    this.dispatch('addUser')
                })
                .catch(err => console.log(err))
        }
    },
    getters: {
        city (state) {
            return state.city
        },
        cities (state) {
            return state.cities
        }
    }
}