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

        <small class="pl-2">
          <nuxt-link to="/">Не помню пароль</nuxt-link>
        </small>
      </b-form-group>

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
import { TLoginForm } from "~/types/forms";
import CardForm from "~/components/base/CardForm.vue";


@Component({
  name: 'login',
  components: { CardForm },
})
export default class Login extends Vue {
  form: TLoginForm = {
    username: null,
    password: null
  }

  submit() {
    this.$router.push({ name: 'index' })
  }
}
</script>

<style lang="scss">

</style>
