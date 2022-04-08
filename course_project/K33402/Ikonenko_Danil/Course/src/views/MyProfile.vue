<template>
  <section class="page-content">
    <headers-main />
    <my-profile-main :profile="this.profile" />
  </section>
</template>

<script>
import headersMain from "../components/headers"
import MyProfileMain from "../components/MyProfileMain.vue"

export default {
  name: "MyProfile",
  components: {
    headersMain,
    MyProfileMain
  },
  beforeMount() {
    this.getMyProfile()
  },
  data: () => ({
    profile: Object
  })
}
</script>

<style>
</style>
