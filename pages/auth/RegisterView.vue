<template>
  <b-container class="align-self-center d-flex flex-column align-items-center">
    <h2 class="text-center mb-5">CheckSplitter - учет финансов по-новому</h2>
    <b-form class="w-50" @submit.prevent="userRegister">
      <b-alert variant="warning" :show="!getState('non_field_errors')">
        {{ getError('non_field_errors') }}
      </b-alert>
      <b-form-group label="Логин" :state="getState('username')" :invalid-feedback="getError('username')">
        <b-form-input v-model="form.username" required/>
      </b-form-group>
      <b-form-group label="E-Mail" :state="getState('email')" :invalid-feedback="getError('email')">
        <b-form-input type="email" v-model="form.email" required/>
      </b-form-group>
      <b-form-group label="Пароль" :state="getState('password1')" :invalid-feedback="getError('password1')">
        <b-form-input type="password" v-model="form.password1" required/>
      </b-form-group>
      <b-form-group label="Повторите пароль" :state="getState('password2')" :invalid-feedback="getError('password2')">
        <b-form-input type="password" v-model="form.password2" required/>
      </b-form-group>
      <div class="d-flex flex-column">
        <b-button type="submit" variant="outline-dark" class="mt-3 mb-2">Регистрация</b-button>
        <b-link :to="{'name': 'LoginView'}">Войти в существующий аккаунт</b-link>
      </div>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";

@Component({
  name: 'RegisterView',
  auth: 'guest',
})
export default class RegisterView extends Vue {
  form: components['schemas']['RegisterRequest'] = {
    username: '',
    email: '',
    password1: '',
    password2: '',
  }
  errors: { [name: string]: string[] } = {}

  getError(key: string) {
    return this.errors?.[key]?.[0] !== undefined ? this.errors?.[key]?.[0] : ''
  }

  getState(key: string) {
    return this.getError(key) === ''
  }

  async userRegister() {
    try {
      await this.$axios.post('/auth/registration/', this.form)
      await this.$router.push({'name': 'LoginView'})
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.errors = error.response.data
        console.log(this.errors)
      }
    }
  }
}
</script>
