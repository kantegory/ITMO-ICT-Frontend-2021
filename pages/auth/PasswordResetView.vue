<template>
  <b-container class="align-self-center d-flex flex-column align-items-center">
    <h2 class="text-center mb-5">Сброс пароля</h2>
    <b-form class="w-50 mt-4" @submit.prevent="passwordReset">
      <b-alert variant="warning" :show="!getState('non_field_errors')">
        {{ getError('non_field_errors') }}
      </b-alert>
      <b-form-group label="Введите e-mail аккаунта" :state="getState('old_password')" :invalid-feedback="getError('old_password')">
        <b-form-input type="email" v-model="form.email" required/>
      </b-form-group>
      <b-button type="submit" variant="outline-dark" class="mt-3 mb-2 w-100">Сбросить пароль</b-button>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import {Component, mixins, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import ErrorsMixin from "~/mixins/errors";

@Component({
  name: 'PasswordResetView',
  auth: 'guest',
})
export default class PasswordResetView extends mixins(ErrorsMixin, Vue) {
  form: components['schemas']['PasswordResetRequest'] = {
    email: '',
  }

  async passwordReset() {
    try {
      const response = await this.$axios.post('/auth/password/reset/', this.form)
      setTimeout(() => {
        this.$bvToast.toast(response.data.detail, {
          title: 'Успешно!',
          variant: 'success',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 5000,
        })
      })
      await this.$router.push({'name': 'LoginView'})
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.errors = error.response.data
      }
      this.$bvToast.toast('Что-то пошло не так.', {
        title: 'Ошибка!',
        variant: 'danger',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 5000,
      })
    }
  }
}
</script>
