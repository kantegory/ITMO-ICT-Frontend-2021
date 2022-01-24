<template>
  <b-navbar toggleable="lg" class="checksplitter-navbar">
    <b-container>
      <b-navbar-brand href="#">CheckSplitter</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#" disabled>Чеки</b-nav-item>
          <b-nav-item href="#" disabled>Профиль</b-nav-item>
        </b-navbar-nav>

      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'CheckSplitterNavbar'
})
export default class CheckSplitterNavbar extends Vue {

}
</script>

<style lang="scss">
@import "checksplitternavbar";
</style>
