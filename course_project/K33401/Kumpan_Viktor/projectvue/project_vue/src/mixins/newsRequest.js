import {len} from "vuelidate/lib/validators/common";

const newsRequest = {
    methods: {
        check_data(data) {
                for (const [key, value] of Object.entries(Object.assign({}, data))) {
                    if (data[key] === ''){
                        delete data[key]
                    }
                }
                return data
        },
        reload_data(new_data,curr_data){
            for (const [key, value] of Object.entries(new_data)) {
                if (new_data[key] === ''){
                    new_data[key] = curr_data[key]
                }
            }
            return new_data
        },
        async newsRequest(url, data={}, method,params= {}) {
            const token = "Token"+' '+localStorage.token
            const DEFAULT_HEADERS = { 'Authorization':token}
            const BASE_URL = 'http://localhost:8000'
            const __url = `${BASE_URL}/${url}/`

            if (len(data) > 0) {
                data = this.check_data(data)
            }
            const response = await this.axios({
                method: method,
                url: __url,
                data: data,
                params: params,
                headers: DEFAULT_HEADERS
            })
            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.error)
            }
            return response.data
        }
    }
}

export default newsRequest