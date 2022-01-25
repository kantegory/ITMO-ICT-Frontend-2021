<template>
    <div class="d-flex justify-content-center">
        <form @submit.prevent="signup">
            <b-alert show variant="danger" v-if="error">
                {{ this.error }}
            </b-alert>
            <input-field v-model="username" type="text" placeholder="Username" icon="person-fill" />
            <input-field v-model="password" type="password" placeholder="Password" icon="lock-fill" />
            <input-field v-model="firstName" type="text" placeholder="First Name" icon="person-fill" />
            <input-field v-model="lastName" type="text" placeholder="Last Name" icon="person-fill" />

            <div class="input-field">
                <input v-model="role" type="radio" value="landlord" id="rd1">
                <label for="rd1">Landlord</label>
                <input v-model="role" type="radio" value="tenant" id="rd2">
                <label for="rd2">Tenant</label>
            </div>
            <div class="input-field">
                <input type="checkbox" id="cb2" required>
                <label for="cb2">I am older than 18 years of age</label>
            </div>
            <div class="input-field">
                <input type="checkbox" id="cb1" required>
                <label for="cb1">I agree with <a href="#">terms and conditions</a></label>
            </div>

            <b-row class="mt-3 d-flex justify-content-center">
                <input class="btn btn-primary mb-3" type="submit" value="Register" />
            </b-row>
        </form>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue'
import login from '@/mixins/login.js'

export default {
    name: 'SignupForm',
    components: {
        InputField
    },
    mixins: [login],
    data: () => ({
        username: '',
        password: '',
        firstName: '',
        lastName: '',
        role: '',
        error: ''
    }),
    methods: {
        async signup () {
            const url = 'http://127.0.0.1:8000/auth/users/'

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: this.username,
                    password: this.password,
                    first_name: this.firstName,
                    last_name: this.lastName
                })
            })

            const data = await response.json()

            if (response.ok) {
                this.setRole(data.id)
                this.login()
            } else {
                this.error = Object.values(data)[0][0].toString()
            }
        },
        async setRole (id) {
            if (this.role === '') this.role = 'tenant'
            const url = `http://127.0.0.1:8000/${this.role}/create/`

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user: id
                })
            })

            if (response.ok) {
                this.$store.commit('isLoggedUpdate', {
                    role: this.role
                })
            }
        }
    }
}
</script>

<style scoped>
.input-field input {
    margin: 0.5rem;
}

.input-field input[type='checkbox'], input[type='radio'] {
    margin-left: 3rem;
}

::placeholder, select {
    color: var(--color-placeholder);
    background-color: var(--background-color-input);
    text-indent: 0.3rem;
}
</style>
