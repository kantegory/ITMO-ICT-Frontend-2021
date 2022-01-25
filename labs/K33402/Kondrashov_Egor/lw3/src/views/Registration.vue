<template>
  <section class="page-content text-center">
    <app-header />
    <registration-main />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import RegistrationMain from "../components/RegistrationMain.vue"

export default {
  name: "Registration",

  components: {
    AppHeader,
    RegistrationMain
  }
}
</script>

<style>
html,
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
}
</style>
