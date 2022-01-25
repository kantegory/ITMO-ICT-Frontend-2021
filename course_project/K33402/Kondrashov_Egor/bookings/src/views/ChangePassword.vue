<template>
  <section class="page-content">
    <app-header />
    <change-password-main />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import ChangePasswordMain from "../components/ChangePasswordMain.vue"

export default {
  name: "Registration",

  components: {
    AppHeader,
    ChangePasswordMain
  }
}
</script>

<style>
/* html,
body {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
}
header {
  top: 0;
  position: absolute;
  width: 100%;
} */
</style>
