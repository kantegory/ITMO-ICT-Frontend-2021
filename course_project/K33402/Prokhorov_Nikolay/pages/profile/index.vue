<template>
  <b-container>
    <h1 class="mt-4">Профиль</h1>

    <div class="d-flex flex-column flex-md-row justify-content-between mt-5">
      <h2>Имя пользователя: {{ username }}</h2>

      <nuxt-link :to="{name: 'profile-change-username'}" class="btn btn-primary mt-1 mt-md-0">Сменить имя пользователя</nuxt-link>

    </div>

    <div class="d-flex flex-column flex-md-row justify-content-between mt-5">
      <h2>Почтовый ящик: {{ email }}</h2>

      <nuxt-link :to="{name: 'profile-change-email'}" class="btn btn-primary mt-1 mt-md-0">Сменить почтовый ящик</nuxt-link>
    </div>

    <div class="d-flex flex-column flex-md-row justify-content-between mt-5">
      <h2>Пароль: **********</h2>

      <nuxt-link :to="{name: 'profile-change-password'}" class="btn btn-primary mt-1 mt-md-0">Сменить пароль</nuxt-link>
    </div>

  </b-container>
</template>

<script lang="ts">
import { Component, mixins } from 'nuxt-property-decorator'
import RequestsMixin from "~/mixins/RequestsMixin";

@Component({
  name: 'profile'
})
export default class profile extends mixins(RequestsMixin) {
  get username() {
    const value = this.$storets.auth.user?.username
    return value ? value : 'Не указано'
  }

  get email() {
    const value = this.$storets.auth.user?.email
    return value ? value : 'Не указано'
  }


}
</script>

<style lang="scss">

</style>
