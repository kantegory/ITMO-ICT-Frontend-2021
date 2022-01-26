<template>
  <b-navbar toggleable="lg" type="light" variant="light">
    <b-container>
      <b-navbar-brand :to="{name: 'index'}">SuperWeather</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="mx-auto">
          <b-nav-item :to="{'name': 'forecast'}">Прогноз</b-nav-item>
          <b-nav-item
            v-if="$storets.auth.loggedIn"
            :to="{'name': 'my'}"
          >
            Избранное
          </b-nav-item>
        </b-navbar-nav>

        <b-navbar-nav>
          <b-nav-item-dropdown v-if="$storets.auth.loggedIn" text="Аккаунт" right no-caret>
            <b-dropdown-item :to="{name: 'profile'}">Профиль</b-dropdown-item>
            <b-dropdown-item @click="logout">Выйти</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item v-else :to="{name: 'login'}">
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
  async logout() {
    await this.$auth.logout('local')
    this.$storets.auth.SET({ key: 'loggedIn', value: false })
    await this.$router.push({ name: 'forecast' })
  }
}
</script>

<style lang="scss">

</style>
