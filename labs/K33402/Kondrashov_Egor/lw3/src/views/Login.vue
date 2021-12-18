<template>
  <section class="page-content text-center">
    <app-header />
    <login-main />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import LoginMain from "../components/LoginMain.vue"

export default {
  name: "Login",

  components: {
    AppHeader,
    LoginMain
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
  justify-content: center;
  padding-top: 40px;
}

#app {
  width: 100%;
  height: 100%;
}
.page-content {
  width: 100%;
}

header {
  top: 0;
  position: absolute;
  width: 100%;
}
</style>
