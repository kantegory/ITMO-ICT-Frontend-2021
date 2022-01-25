<template>
  <div class="login">
    <v-form
        @submit.prevent="logIn"
        ref="form"
        class="my-1"
        id="check-login-form"
    >
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-text-field
              label="Имя пользователя"
              v-model="username"
          />
          <v-text-field
              label="Пароль"
              v-model="password"
              type="password"
          />
          <v-btn type="submit" color="green" dark>Вход</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data: () => ({
    username: null,
    password: null
  }),
  methods: {
    logIn () {
      try {
        this.axios
          .post('http://127.0.0.1:8000/api/auth/token/login/', {
            password: this.password,
            username: this.username
          }).then(response => { this.setLogIn(response) })
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    },
    setLogIn (response) {
      console.log(this.password)
      console.log(this.username)
      localStorage.setItem('token', response.data.auth_token)
      this.$bus.$emit('logged', 'User logged')
      this.$router.push('/account')
    }
  }
}
</script>
