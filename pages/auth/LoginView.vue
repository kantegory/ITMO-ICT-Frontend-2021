<template>
  <b-container class="align-self-center d-flex flex-column align-items-center">
    <h2 class="text-center mb-5">CheckSplitter - учет финансов по-новому</h2>
    <b-form class="w-50" @submit.prevent="userLogin">
      <b-form-group label="Логин" :state="!(errors.non_field_errors && errors.non_field_errors.length !== 0)"
                    :invalid-feedback="errors.non_field_errors[0]">
        <b-form-input v-model="form.username" required/>
      </b-form-group>
      <b-form-group label="Пароль" :state="!(errors.non_field_errors && errors.non_field_errors.length !== 0)"
                    :invalid-feedback="errors.non_field_errors[0]">
        <b-form-input type="password" v-model="form.password" required/>
      </b-form-group>
      <b-button type="submit" variant="outline-dark" class="mt-3">Войти</b-button>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'

@Component({
  name: 'LoginView',
  auth: 'guest',
})
export default class LoginView extends Vue {
  form = {
    username: '',
    password: '',
  }
  errors = {
    non_field_errors: [] as string[]
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
