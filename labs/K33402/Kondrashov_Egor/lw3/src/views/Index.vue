<template>
  <section class="page-content">
    <app-header />
    <index-main />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import IndexMain from "../components/IndexMain.vue"

export default {
  name: "Index",

  components: {
    AppHeader,
    IndexMain
  }
}
</script>

<style>
html,
body {
  height: 100%;
}
#app {
  height: 100%;
}
.page-content {
  height: 100%;
}
</style>
