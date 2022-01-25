<template>
  <section class="page-content">
    <app-header />
    <edit-profile-main />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import EditProfileMain from "../components/EditProfileMain.vue"

export default {
  name: "EditProfile",

  components: {
    AppHeader,
    EditProfileMain
  }
}
</script>

<style>
</style>
