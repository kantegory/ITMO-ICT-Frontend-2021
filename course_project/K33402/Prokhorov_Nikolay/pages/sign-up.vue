<template>
  <b-container class="d-flex justify-content-center align-items-start">
    <base-card-form @submit="submit">
      <b-form-group
        label="Имя пользователя"
      >
        <b-form-input
          v-model="form.username"
          required
        />
      </b-form-group>

      <b-form-group
        label="Пароль"
      >
        <b-form-input
          v-model="form.password"
          type="password"
          required
        />

        <ul class="form-text text-muted small pl-4 mb-0">
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

      </b-form-group>

      <b-form-group
        label="Подтверждение пароля"
      >
        <b-form-input
          v-model="form.passwordRepeat"
          type="password"
          required
        />
      </b-form-group>

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
import { Component, Vue } from 'nuxt-property-decorator'
import { TSignUpForm } from "~/types/forms";

@Component({
  name: 'sign-up'
})
export default class SignUp extends Vue {
  form: TSignUpForm = {
    username: null,
    password: null,
    passwordRepeat: null
  }

  submit() {
    this.$router.push({ name: 'login' })
  }
}
</script>

<style lang="scss">

</style>
