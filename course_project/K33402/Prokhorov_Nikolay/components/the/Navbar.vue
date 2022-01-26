<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-container>
      <b-navbar-brand :to="{name: 'index'}">SuperWeather</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item :to="{'name': 'forecast'}">Прогноз</b-nav-item>
          <b-nav-item :to="{'name': 'my'}">Избранное</b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown v-if="$auth.loggedIn" text="Аккаунт" right no-caret>
            <b-dropdown-item href="#">Профиль</b-dropdown-item>
            <b-dropdown-item @click="$auth.logout('local')">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else :to="{name: 'sign-up'}">
            Войти
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'TheNavbar'
})
export default class TheNavbar extends Vue {
}
</script>

<style lang="scss">

</style>
