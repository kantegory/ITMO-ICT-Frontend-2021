<template>
  <b-container class="d-flex justify-content-center align-items-start">
    <base-card-form
      :alert="errors"
      @submit="submit"
    >

      <app-input
        v-model="form.username"
        label="Имя пользователя"
        placeholder="Придумайте имя пользователя"
        :errors.sync="errors"
        :errors-key="'username'"
        required
      />

      <app-input
        v-model="form.password"
        label="Пароль"
        placeholder="Придумайте пароль"
        type="password"
        :errors.sync="errors"
        :errors-key="'password'"
        required
      >
        <ul class="form-text text-muted small pl-4 mt-2 mb-0">
          <li>
            Пароль не должен быть слишком похож на другую вашу личную информацию.
          </li>
          <li>
            Ваш пароль должен содержать как минимум 8 символов.
          </li>
          <li>
            Такой пароль часто используется.
          </li>
          <li>
            Пароль не может состоять только из цифр.
          </li>
        </ul>
      </app-input>

      <app-input
        v-model="form.passwordRepeat"
        label="Повторите пароль"
        placeholder="Повторите пароль"
        type="password"
        :errors.sync="errors"
        :errors-key="'passwordRepeat'"
        required
      />

      <b-button variant="primary"
                type="submit"
                block
                class="mt-4"
      >
        Зарегистрироваться
      </b-button>

      <p class="text-center mt-3 mb-0">
        Есть аккаунт?
        <nuxt-link :to="{name: 'login'}">Войти</nuxt-link>
      </p>
    </base-card-form>
  </b-container>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { TSignUpForm } from "~/types/forms";
import FormsMixin from "~/mixins/FormsMixin";
import RequestsMixin from "~/mixins/RequestsMixin";
import ToastsMixin from "~/mixins/ToastsMixin";

@Component({
  name: 'sign-up'
})
export default class SignUp extends mixins(FormsMixin, RequestsMixin, ToastsMixin) {
  form: TSignUpForm = {
    username: null,
    password: null,
    passwordRepeat: null
  }
  errors = this.errorsFromForm(this.form)

  async submit() {
    if (this.form.password !== this.form.passwordRepeat) {
      this.errors.passwordRepeat = ['Пароли не совпадают!']
      return
    }

    const result = await this.request('post', '/auth/users/', {
      username: this.form.username,
      password: this.form.password
    })

    if (result.response) {
      await this.$router.push({ name: 'login' })
    } else if (result.fallback) {
      this.errorsFromResponse(this.errors, result.fallback.response?.data)
    } else {
      this.makeErrorToast()
    }
  }
}
</script>

<style lang="scss">

</style>
