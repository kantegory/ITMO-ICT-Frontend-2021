<template>
  <section class="page-content">
    <headers-main />
    <edit-profile-main />
  </section>
</template>

<script>
import headersMain from "../components/headers"
import EditProfileMain from "../components/EditProfileMain.vue"

export default {
  name: "EditProfile",

  components: {
    headersMain,
    EditProfileMain
  }
}
</script>

<style>
</style>
