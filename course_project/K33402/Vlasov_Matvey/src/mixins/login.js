export default {
    data: () => ({
        error: ''
    }),
    methods: {
        async login () {
            const url = 'http://127.0.0.1:8000/auth/token/login/'

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            })

            const data = await response.json()
            const authToken = data.auth_token

            if (authToken !== undefined) {
                this.getData(authToken)
            } else {
                this.error = Object.values(data)[0][0].toString()
            }
        },
        async getData (authToken) {
            const url = 'http://127.0.0.1:8000/auth/users/me/'
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    Authorization: `Token ${authToken}`
                }
            })

            const myData = await response.json()

            localStorage.setItem('authToken', authToken)
            this.$store.commit('isLoggedUpdate', {
                authToken: authToken,
                id: myData.id,
                username: myData.username,
                firstName: myData.first_name,
                lastName: myData.last_name
            })
            if (this.$route.name === 'Login' || this.$route.name === 'Signup') this.$router.push('/profile')
            return this.getRole(myData.id)
        },
        async getRole (id) {
            let role = 'tenant'
            const url = `http://127.0.0.1:8000/landlord/${id}`

            const response = await fetch(url, {
                method: 'GET'
            })

            const data = await response.json()
            if (data.user) role = 'landlord'
            this.$store.commit('isLoggedUpdate', {
                role: role
            })
            return true
        }
    }
}
