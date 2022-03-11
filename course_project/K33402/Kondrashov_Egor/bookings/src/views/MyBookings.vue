<template>
  <section class="page-content">
    <app-header />
    <my-bookings-main :bookings="bookings" />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import MyBookingsMain from "../components/MyBookingsMain.vue"

export default {
  name: "MyBookings",

  components: {
    AppHeader,
    MyBookingsMain
  },
  methods: {
    async getBookings() {
      try {
        const config = {
          headers: {
            Authorization: this.$store.getters.authHeader
          }
        }
        const resp = await this.axios.get(
          "http://localhost:8000/api/bookings",
          config
        )

        if (resp.status !== 200) {
          throw new Error(resp.error)
        }

        this.bookings = resp.data
      } catch (e) {
        console.error("Error from API: ", e)
      }
    }
  },
  beforeMount() {
    this.getBookings()
  },
  data: () => ({
    bookings: []
  })
}
</script>

<style>
</style>
