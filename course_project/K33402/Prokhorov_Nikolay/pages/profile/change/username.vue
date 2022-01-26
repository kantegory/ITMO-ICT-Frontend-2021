<template>
  <b-container class="d-flex justify-content-center align-items-start">
    <base-card-form
      :alert="errors"
      @submit="submit"
    >

      <app-input
        v-model="form.new_username"
        label="Новое имя пользователя"
        placeholder="Придумайте имя пользователя"
        :errors.sync="errors"
        :errors-key="'new_username'"
        required
      />

      <app-input
        v-model="form.current_password"
        label="Пароль для подтверждения"
        placeholder="Ваш пароль"
        type="password"
        :errors.sync="errors"
        :errors-key="'current_password'"
        required
      />

      <b-button variant="primary"
                type="submit"
                block
                class="mt-4"
      >
        Сменить
      </b-button>
    </base-card-form>
  </b-container>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import { TChangeUsernameForm } from "~/types/forms";
import FormsMixin from "~/mixins/FormsMixin";
import RequestsMixin from "~/mixins/RequestsMixin";
import ToastsMixin from "~/mixins/ToastsMixin";

@Component({
  name: 'ProfileChangeUsername'
})
export default class ProfileChangeUsername extends mixins(FormsMixin, RequestsMixin, ToastsMixin) {
  form: TChangeUsernameForm = {
    new_username: null,
    current_password: null,
  }
  errors = this.errorsFromForm(this.form)

  async submit() {
    const result = await this.request('post', '/auth/users/set_username/', {
      new_username: this.form.new_username,
      current_password: this.form.current_password
    })

    if (result.response) {
      await this.$auth.fetchUser()
      this.$storets.auth.SET({ key: 'user', value: this.$auth.$state.user })

      await this.$router.push({ name: 'profile' })
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
