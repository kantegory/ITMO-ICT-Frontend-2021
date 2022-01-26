<template>
  <b-navbar toggleable="sm" class="check-splitter-navbar shadow-sm">
    <b-container>
      <b-navbar-brand to="/" class="font-weight-bold">CheckSplitter</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
          <template v-if="$auth.loggedIn">
            <b-nav-item :to="{'name': 'ReceiptsListView'}" class="font-weight-bold">Мои чеки</b-nav-item>
            <b-nav-item-dropdown class="ml-2" right no-caret variant="link">
              <template #button-content>
                <b-icon-person-circle class="align-middle"/>
              </template>
              <b-dropdown-text v-if="userName">{{ userName }}</b-dropdown-text>
              <b-dropdown-text>
                <small>{{ $auth.user.username }}</small>
              </b-dropdown-text>
              <b-dropdown-divider/>
              <b-dropdown-item :to="{'name': 'ProfileView'}">
                Профиль
              </b-dropdown-item>
              <b-dropdown-item-button @click="$auth.logout()">
                Выйти
              </b-dropdown-item-button>
            </b-nav-item-dropdown>
          </template>
          <b-nav-item v-else :to="{'name': 'LoginView'}">Войти</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import {Component, Vue} from 'nuxt-property-decorator'
import {BIcon, BIconPersonCircle} from 'bootstrap-vue'

@Component({
  name: 'CheckSplitterNavbar',
  components: {BIcon, BIconPersonCircle}
})
export default class CheckSplitterNavbar extends Vue {

  get userName() {
    return `${this.$auth.user?.firstName} ${this.$auth.user?.lastName}`.trim()
  }
}
</script>

<style lang="scss">
@import "checksplitternavbar";
</style>
