<template>
  <section class="page-content">
    <app-header />
    <my-profile-main :profile="this.profile" />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import MyProfileMain from "../components/MyProfileMain.vue"

export default {
  name: "MyProfile",

  components: {
    AppHeader,
    MyProfileMain
  },
  methods: {
    async getMyProfile() {
      try {
        const config = {
          headers: {
            Authorization: this.$store.getters.authHeader
          }
        }
        const resp = await this.axios.get(
          "http://localhost:8000/api/users/me",
          config
        )

        if (resp.status !== 200) {
          throw new Error(resp.error)
        }

        this.profile = resp.data
      } catch (e) {
        console.error("Error from API: ", e)
      }
    }
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
