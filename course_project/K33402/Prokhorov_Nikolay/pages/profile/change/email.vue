<template>
  <b-container class="d-flex justify-content-center align-items-start">
    <base-card-form
      :alert="errors"
      @submit="submit"
    >

      <app-input
        v-model="form.email"
        label="Новый почтовый ящик"
        placeholder="Введите новый адрес почты"
        type="email"
        :errors.sync="errors"
        :errors-key="'email'"
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
import { TChangeEmailForm } from "~/types/forms";
import FormsMixin from "~/mixins/FormsMixin";
import RequestsMixin from "~/mixins/RequestsMixin";
import ToastsMixin from "~/mixins/ToastsMixin";

@Component({
  name: 'ProfileChangeEmail'
})
export default class ProfileChangeEmail extends mixins(FormsMixin, RequestsMixin, ToastsMixin) {
  form: TChangeEmailForm = {
    email: null
  }
  errors = this.errorsFromForm(this.form)

  async submit() {
    const result = await this.request('put', '/auth/users/me/', {
      email: this.form.email
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

  async mounted() {
    const email = this.$storets.auth.user?.email
    this.form.email = email ? email : null
  }
}
</script>

<style lang="scss">

</style>
