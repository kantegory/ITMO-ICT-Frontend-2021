<template>
  <div class="registration-page">
    <b-container>
      <div class="auth-card-wrapper">
        <b-card class="auth-card"
                title="Забыли пароль?"
        >
          <b-form @submit.prevent="submit">
            <b-form-group label="Введите почту, которую вы указывали при регистрации"
                          :state="!(errors.email && errors.email.length !== 0)"
                          :invalid-feedback="errors.email ? errors.email.join(', ') : ''">
              <b-form-input placeholder="Введите email" type="email" v-model="email" required />
            </b-form-group>

            <div class="d-flex justify-content-center">
              <b-button type="sumbit">Сбросить пароль</b-button>
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
      email: '',
      errors: [],
    }
  },

  methods: {
    async submit() {
      try {
        const response = await this.axios.post('http://127.0.0.1:8000/auth/users/reset_password/',
            { 'email': this.email })

        console.log('success', response)

        await this.$router.push({ name: 'PasswordResetSuccess', })
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
