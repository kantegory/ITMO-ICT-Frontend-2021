<template>
  <b-container class="align-self-center d-flex flex-column align-items-center">
    <h2 class="text-center mb-5">Сменить пароль</h2>
    <b-form class="w-50 mt-4" @submit.prevent="passwordUpdate">
      <b-alert variant="warning" :show="!getState('non_field_errors')">
        {{ getError('non_field_errors') }}
      </b-alert>
      <b-form-group label="Текущий пароль" :state="getState('old_password')" :invalid-feedback="getError('old_password')">
        <b-form-input type="password" v-model="form.old_password" required/>
      </b-form-group>
      <b-form-group label="Новый пароль" :state="getState('new_password1')" :invalid-feedback="getError('new_password1')">
        <b-form-input type="password" v-model="form.new_password1" required/>
      </b-form-group>
      <b-form-group label="Повторите пароль" :state="getState('new_password2')" :invalid-feedback="getError('new_password2')">
        <b-form-input type="password" v-model="form.new_password2" required/>
      </b-form-group>
      <b-button type="submit" variant="outline-dark" class="mt-3 mb-2 w-100">Сохранить</b-button>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import {Component, mixins, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import ErrorsMixin from "~/mixins/errors";

@Component({
  name: 'PasswordChangeView',
})
export default class PasswordChangeView extends mixins(ErrorsMixin, Vue) {
  form: components['schemas']['PasswordChangeRequest'] = {
    old_password: '',
    new_password1: '',
    new_password2: '',
  }

  async passwordUpdate() {
    try {
      const response = await this.$axios.post('/auth/password/change/', this.form)
      setTimeout(() => {
        this.$bvToast.toast(response.data.detail, {
          title: 'Успешно!',
          variant: 'success',
          toaster: 'b-toaster-bottom-right',
          autoHideDelay: 5000,
        })
      })
      await this.$router.push({'name': 'ProfileView'})
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.errors = error.response.data
      }
    }
  }
}
</script>
