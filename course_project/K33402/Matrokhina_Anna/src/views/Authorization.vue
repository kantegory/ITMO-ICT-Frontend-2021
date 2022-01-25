<template>
  <div class="registration-page">
    <b-container>
      <div class="auth-card-wrapper">
        <b-card class="auth-card"
                title="Авторизация"
        >
          <b-form @submit.prevent="submit">
            <b-form-group label="Логин" :state="!(errors.username && errors.username.length !== 0)"
                          :invalid-feedback="errors.username ? errors.username.join(', ') : ''">
              <b-form-input placeholder="Введите логин" v-model="username" required />
            </b-form-group>

            <b-form-group label="Пароль" :state="!(errors.password && errors.password.length !== 0)"
                          :invalid-feedback="errors.password ? errors.password.join(', '): ''"
                          class="mb-1"
            >
              <b-form-input placeholder="Введите пароль" v-model="password" type="password" required />
            </b-form-group>

            <router-link :to="{name: 'PasswordReset' }">Забыли пароль?</router-link>

            <div class="d-flex justify-content-center">
              <b-button type="sumbit">Авторизоваться</b-button>
            </div>
          </b-form>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Authorizarization',

  data() {
    return {
      username: '',
      password: '',
      errors: [],
    }
  },

  methods: {
    async submit() {
      try {
        const response = await this.axios.post('http://127.0.0.1:8000/auth/token/login/',
            { 'username': this.username, 'password': this.password })

        console.log('success', response)
        this.$store.commit('updateToken', { token: response.data.auth_token })

        await this.$router.push({ name: 'Home' })
      } catch (e) {
        console.log(e)
        console.log(e.response)

        if (e.response) {
          this.errors = e.response.data

          if (e.response.data && e.response.data.non_field_errors) {
            this.errors.password = e.response.data.non_field_errors
          }
        }
      }
    }
  }
}
</script>
