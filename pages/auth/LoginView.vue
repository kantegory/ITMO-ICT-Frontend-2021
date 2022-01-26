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
      <div class="d-flex flex-column align-items-start">
        <b-button type="submit" variant="outline-dark" class="mt-3 mb-2 align-self-stretch">Войти</b-button>
        <b-link :to="{'name': 'RegisterView'}">Регистрация</b-link>
        <b-link :to="{'name': 'PasswordResetView'}">Забыли пароль?</b-link>
      </div>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import {Component, mixins, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import ErrorsMixin from "~/mixins/errors";

@Component({
  name: 'LoginView',
  auth: 'guest',
})
export default class LoginView extends mixins(ErrorsMixin, Vue) {
  form: components['schemas']['LoginRequest'] = {
    username: '',
    password: '',
  }

  async userLogin() {
    try {
      await this.$auth.loginWith('local', {data: this.form})
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.errors = error.response.data
      }
    }
  }
}
</script>
