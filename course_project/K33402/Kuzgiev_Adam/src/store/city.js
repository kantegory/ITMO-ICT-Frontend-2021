
export const CityModule = {
    state: () => ({
        data: JSON.parse(localStorage.getItem('cities')) || []
    }),
    getters: {},
    mutations: {
        ADD_CITY_MODULE: (state, data) => {
            if (data) {
                state.data.unshift(data)
            }
            localStorage.setItem('cities', JSON.stringify(state.data))
        },
        REMOVE_CITY_MODULE: (state, id) => {
            state.data = state.data.filter(city => city?.id !== id)
            localStorage.setItem('cities', JSON.stringify(state.data))
        },
        REMOVE_ALL_CITY_MODULE: (state) => {
            state.data = []
            localStorage.setItem('cities', '[]');
        }
    },
    actions: {
        REMOVE_ALL_CITY: (state) => {
            state.commit('REMOVE_ALL_CITY_MODULE', null, {root: true})
            state.commit('RETURN_ALL_CITY', null, {root: true})
        },
        ADD_CITY: (state, data) => {
            state.commit('ADD_CITY_MODULE', data, {root: true})
            if (data) {
                state.commit('REMOVE_CITY', data.id, {root: true})
            }
        },
        REMOVE_CITY: (state, id) => {
            state.commit('ADD_CITY', state.state.data.find(city => city?.id === id), {root: true})
            state.commit('REMOVE_CITY_MODULE', id, {root: true})
        }
    }
}
