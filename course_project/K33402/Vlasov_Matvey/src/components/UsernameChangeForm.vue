<template>
    <div class="d-flex justify-content-center">
        <form @submit.prevent="changeUsername">
            <b-alert show variant="danger" v-if="error">
                {{ this.error }}
            </b-alert>
            <b-alert show variant="success" v-if="success">
                Username successfully changed
            </b-alert>
            <input-field v-model="currentPassword" type="password" placeholder="Current password" icon="lock-fill" />
            <input-field v-model="newUsername" type="text" placeholder="New username" icon="person-fill" />
            <b-row class="mt-3 d-flex justify-content-center">
                <input class="btn btn-primary mb-3" type="submit" value="Change"/>
            </b-row>
        </form>
    </div>
</template>

<script>
import InputField from '@/components/InputField.vue'

export default {
    name: 'UsernameChangeForm',
    components: {
        InputField
    },
    data: () => ({
        currentPassword: '',
        newUsername: '',
        error: '',
        success: false
    }),
    methods: {
        async changeUsername () {
            const url = 'http://127.0.0.1:8000/auth/users/set_username/'
            const authToken = this.$store.state.authToken

            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: `Token ${authToken}`
                },
                body: JSON.stringify({
                    current_password: this.currentPassword,
                    new_username: this.newUsername
                })
            })

            this.success = response.ok
            if (!this.success) {
                const data = await response.json()
                this.error = Object.values(data)[0][0].toString()
            } else {
                this.error = ''
                this.$store.commit('isLoggedUpdate', {
                    username: this.newUsername
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

::placeholder, input[type='password'] {
    color: var(--color-placeholder);
    background-color: var(--background-color-input);
    text-indent: 0.3rem;
}

.fa {
    font-size: 1.5rem;
    padding-right: 1rem;
    width: 1rem;
}
</style>
