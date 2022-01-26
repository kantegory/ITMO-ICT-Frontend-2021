const authRequest = {
    methods: {
        async authRequest (url, data) {
            const DEFAULT_HEADERS = { 'Content-type': 'application/json' }
            const BASE_URL = 'http://localhost:8000'
            const __url = `${BASE_URL}/${url}/`

            const response = await this.axios({
                method: 'POST',
                url: __url,
                data: data,
                headers: DEFAULT_HEADERS
            })

            if (response.status !== 200 && response.status !== 201) {
                throw new Error(response.error)
            }
            return response.data
        }
    }
}

export default authRequest