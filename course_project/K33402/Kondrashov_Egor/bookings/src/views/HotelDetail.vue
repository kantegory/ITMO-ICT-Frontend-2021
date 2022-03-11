<template>
  <section class="page-content">
    <app-header />
    <hotel-detail-card :hotel="hotel" />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import HotelDetailCard from "../components/HotelDetailCard.vue"

export default {
  name: "HotelDetail",

  components: {
    AppHeader,
    HotelDetailCard
  },

  methods: {
    async getHotel() {
      try {
        const response = await this.axios.get(
          `http://localhost:8000/api/hotels/${this.$route.params.id}`
        )

        if (response.status !== 200) {
          throw new Error(response.error)
        }

        this.hotel = response.data
      } catch (e) {
        console.error("Error from API: ", e)
      }
    }
  },
  beforeMount() {
    this.getHotel()
  },
  data: () => ({
    hotel: {}
  })
}
</script>

<style>
</style>
