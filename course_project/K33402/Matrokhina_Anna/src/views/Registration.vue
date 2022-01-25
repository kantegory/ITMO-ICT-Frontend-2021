<template>
  <div class="registration-page">
    <b-container>
      <div class="auth-card-wrapper">
        <b-card class="auth-card"
                title="Регистрация"
        >
          <b-form @submit.prevent="submit">
            <b-form-group label="Email" :state="!(errors.email && errors.email.length !== 0)"
                          :invalid-feedback="errors.email ? errors.email.join(', ') : ''">
              <b-form-input placeholder="Введите email" v-model="email" type="email" />
            </b-form-group>

            <b-form-group label="Логин*" :state="!(errors.username && errors.username.length !== 0)"
                          :invalid-feedback="errors.username ? errors.username.join(', ') : ''">
              <b-form-input placeholder="Введите логин" v-model="username" required />
            </b-form-group>

            <b-form-group label="Пароль*" :state="!(errors.password && errors.password.length !== 0)"
                          :invalid-feedback="errors.password ? errors.password.join(', '): ''">
              <b-form-input placeholder="Введите пароль" v-model="password" type="password" required />
            </b-form-group>

            <!--            <b-form-group label="Пароль">-->
            <!--              <b-form-input placeholder="Повторите пароль" />-->
            <!--            </b-form-group>-->

            <div class="d-flex justify-content-center">
              <b-button type="sumbit">Зарегистрироваться</b-button>
            </div>
          </b-form>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      email: '',
      username: '',
      password: '',
      errors: [],
    }
  },

  methods: {
    async submit() {
      try {
        const response = await this.axios.post('http://127.0.0.1:8000/auth/users/',
            { 'email': this.email, 'username': this.username, 'password': this.password })

        console.log('success', response)
        await this.$router.push({ name: 'Authorization' })
      } catch (e) {
        console.log(e)
        console.log(e.response)

        if (e.response) {
          this.errors = e.response.data
        }
      }
    }
  }
}
</script>
