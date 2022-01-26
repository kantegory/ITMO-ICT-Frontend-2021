<template>
  <div class="app-layout">
    <header>
      <the-navbar />
    </header>

    <main>
      <Nuxt />
    </main>

    <footer>

    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'default',
  head: {
    bodyAttrs: {
      class: 'bootswatch'
    }
  }
})
export default class Default extends Vue {
  mounted() {
    this.$storets.auth.SET({key: 'user', value: this.$auth.$state.user})
    this.$storets.auth.SET({key: 'loggedIn', value: this.$auth.$state.loggedIn})
  }
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex: 1;
    display: flex;

    > div {
      width: 100%;
    }
  }
}
</style>
