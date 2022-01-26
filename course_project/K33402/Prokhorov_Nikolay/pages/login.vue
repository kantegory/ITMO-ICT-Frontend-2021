<template>
  <b-container class="d-flex justify-content-center align-items-start">
    <base-card-form
      :alert="errors"
      @submit="submit"
    >
      <app-input
        v-model="form.username"
        label="Имя пользователя"
        placeholder="Ваше имя пользователя"
        :errors.sync="errors"
        :errors-key="'username'"
        required
      />

      <app-input
        v-model="form.password"
        label="Имя пользователя"
        placeholder="Ваш пароль"
        type="password"
        :errors.sync="errors"
        :errors-key="'password'"
        required
        class="mb-1"
      />

      <small class="pl-2">
        <nuxt-link to="/">Не помню пароль</nuxt-link>
      </small>

      <b-button variant="primary"
                type="submit"
                block
                class="mt-4"
      >
        Войти
      </b-button>

      <p class="text-center mt-3 mb-0">
        Нет аккаунта?
        <nuxt-link :to="{name: 'sign-up'}">Зарегистрироваться</nuxt-link>
      </p>
    </base-card-form>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { TFormErrors, TLoginForm } from "~/types/forms";
import CardForm from "~/components/base/CardForm.vue";
import axios from "axios";

@Component({
  name: 'login',
  components: { CardForm },
})
export default class Login extends Vue {
  form: TLoginForm = {
    username: null,
    password: null
  }
  errors = <TFormErrors<TLoginForm>>{}

  async submit() {
    try {
      await this.$auth.loginWith('local', { data: this.form })
    } catch (e) {
      if (axios.isAxiosError(e)) {
        if (e.response) this.errors = e.response.data
        else this.errors.non_field_errors = ['Неизвестная ошибка! Попробуйте позже']
      }
    }
  }
}
</script>

<style lang="scss">

</style>
