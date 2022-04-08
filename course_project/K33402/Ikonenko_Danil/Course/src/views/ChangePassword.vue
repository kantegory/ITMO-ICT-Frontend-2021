<template>
  <section class="page-content">
    <headers-main />
    <change-password-main />
  </section>
</template>

<script>
import headersMain from "../components/headers"
import ChangePasswordMain from "../components/ChangePasswordMain.vue"

export default {
  name: "ChangePassword",

  components: {
    headersMain,
    ChangePasswordMain
  }
}
</script>

<style>
</style>
