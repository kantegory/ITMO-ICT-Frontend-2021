<template>
  <b-container class="align-self-center d-flex flex-column align-items-center">
    <h2 class="text-center mb-5">CheckSplitter - учет финансов по-новому</h2>
    <b-form class="w-50" @submit.prevent="userLogin">
      <b-alert variant="warning" :show="!getState('non_field_errors')">
        {{ getError('non_field_errors') }}
      </b-alert>
      <b-form-group label="Логин" :state="getState('username')" :invalid-feedback="getError('username')">
        <b-form-input v-model="form.username" required/>
      </b-form-group>
      <b-form-group label="Пароль" :state="getState('password')" :invalid-feedback="getError('password')">
        <b-form-input type="password" v-model="form.password" required/>
      </b-form-group>
      <div class="d-flex flex-column">
        <b-button type="submit" variant="outline-dark" class="mt-3 mb-2">Войти</b-button>
        <b-link :to="{'name': 'RegisterView'}">Регистрация</b-link>
<!--        <b-link>Забыли пароль?</b-button>-->
      </div>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";

@Component({
  name: 'LoginView',
  auth: 'guest',
})
export default class LoginView extends Vue {
  form: components['schemas']['LoginRequest'] = {
    username: '',
    password: '',
  }
  errors: { [name: string]: string[] } = {}

  getError(key: string) {
    return this.errors?.[key]?.[0] !== undefined ? this.errors?.[key]?.[0] : ''
  }

  getState(key: string) {
    return this.getError(key) === ''
  }

  async userLogin() {
    try {
      const response = await this.$auth.loginWith('local', {data: this.form})
      await this.$auth.fetchUser()
      this.$auth.setUser((response as any).data.user)
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.errors = error.response.data
      }
    }
  }
}
</script>
