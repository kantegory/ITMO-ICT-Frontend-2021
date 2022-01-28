<template>
  <div class="signup">
    <v-form
        @submit.prevent="signUp"
        ref="signUpForm"
        class="my-1"
    >
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-text-field
              label="Имя пользователя"
              v-model="signUpForm.username"
          />
          <v-text-field
              label="Пароль"
              v-model="signUpForm.password"
              type="password"
          />
          <v-text-field
              label="Email"
              v-model="signUpForm.email"
          />
          <v-text-field
              label="Имя"
              v-model="signUpForm.first_name"
          />
          <v-text-field
              label="Фамилия"
              v-model="signUpForm.last_name"
          />
          <v-btn type="submit" color="green" dark>Регистрация</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Register',
  data: () => ({
    signUpForm: {
      email: '',
      username: '',
      password: '',
      first_name: '',
      last_name: ''
    }
  }),
  methods: {
    async signUp () {
      try {
        const response = await axios
          .post('http://127.0.0.1:8000/api/auth/users/', this.signUpForm)
        if (response.status !== 201) {
          throw new Error(response.status)
        } else {
          this.$toast('Вы успешно зарегистрировались', {
            timeout: 2000
          })
        }
        this.$refs.signUpForm.reset()
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  }
}
</script>
