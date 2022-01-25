<template>
  <section class="page-content">
    <app-header />
    <my-profile-main :profile="this.profile" />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import MyProfileMain from "../components/MyProfileMain.vue"
import getMyProfile from "@/mixins/getMyProfile.js"

export default {
  name: "MyProfile",
  mixins: [getMyProfile],
  components: {
    AppHeader,
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
