<template>
  <b-container class="align-self-center d-flex flex-column align-items-center">
    <h2 class="text-center mb-5">Профиль</h2>
    <b-avatar class="mb-2" :src="$auth.user.avatarUrl" size="6rem"></b-avatar>
    <b-form class="d-flex flex-column align-items-center">
      <input class="d-none" ref="fileInput" type="file" @change="avatarUpdate(false)">
      <b-button variant="link" size="sm" @click="$refs.fileInput.click()">Обновить аватар</b-button>
      <b-button variant="link" size="sm" @click="avatarUpdate(true)">Удалить аватар</b-button>
    </b-form>
    <b-form class="w-50 mt-4" @submit.prevent="profileUpdate">
      <b-alert variant="warning" :show="!getState('non_field_errors')">
        {{ getError('non_field_errors') }}
      </b-alert>
      <b-form-group label="Имя" :state="getState('firstName')" :invalid-feedback="getError('firstName')">
        <b-form-input v-model="form.firstName" required/>
      </b-form-group>
      <b-form-group label="Фамилия" :state="getState('lastName')" :invalid-feedback="getError('lastName')">
        <b-form-input v-model="form.lastName" required/>
      </b-form-group>
      <b-form-group label="Токен ЧекСкан" :state="getState('checkScanToken')"
                    :invalid-feedback="getError('checkScanToken')">
        <b-form-input type="password" v-model="form.checkScanToken" required/>
      </b-form-group>
      <div class="d-flex flex-column">
        <b-button type="submit" variant="outline-dark" class="mt-3 mb-2">Сохранить</b-button>
        <b-link class="align-self-start" :to="{'name': 'PasswordChangeView'}">Сменить пароль</b-link>
      </div>
    </b-form>
  </b-container>
</template>

<script lang="ts">
import {Component, mixins, Vue} from 'nuxt-property-decorator'
import {components} from "~/types/schema";
import {AxiosResponse} from "axios";
import ErrorsMixin from "~/mixins/errors";

@Component({
  name: 'ProfileView',
})
export default class ProfileView extends mixins(ErrorsMixin, Vue) {
  user = this.$auth.user as components['schemas']['Profile']
  form: components['schemas']['ProfileRequest'] = {
    firstName: this.user.firstName,
    lastName: this.user.lastName,
    checkScanToken: this.user.checkScanToken,
  }

  async avatarUpdate(reset: boolean) {
    try {
      let response: AxiosResponse

      if (!reset) {
        // Prepare request
        const file = reset ? null : (this.$refs.fileInput as any)?.files?.[0]
        const formData = new FormData()
        formData.append('avatar', file)

        // Update user data
        response = await this.$axios.put('/users/profile/avatar', formData);

        // Reset file
        (this.$refs.fileInput as any).value = null
      } else {
        response = await this.$axios.delete('/users/profile/avatar')
      }

      let user = JSON.parse(JSON.stringify(this.$auth.user)) as components['schemas']['Profile']
      user.avatarUrl = response.data.avatarUrl
      this.$auth.setUser(user)

      this.$bvToast.toast(`Данные профиля обновлены!`, {
        title: 'Успешно!',
        variant: 'success',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 5000,
      })
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.errors = error.response.data
        if ('detail' in this.errors) {
          this.$bvToast.toast(error.response.data.detail, {
            title: 'Ошибка!',
            variant: 'danger',
            toaster: 'b-toaster-bottom-right',
            autoHideDelay: 5000,
          })
        }
      }
    }
  }

  async profileUpdate() {
    try {
      const response = await this.$axios.put('/users/profile', this.form)
      this.$auth.setUser(response.data)
      this.$bvToast.toast(`Данные профиля обновлены!`, {
        title: 'Успешно!',
        variant: 'success',
        toaster: 'b-toaster-bottom-right',
        autoHideDelay: 5000,
      })
    } catch (e) {
      const error = e as any
      if (error.response) {
        this.errors = error.response.data
      }
    }
  }
}
</script>
