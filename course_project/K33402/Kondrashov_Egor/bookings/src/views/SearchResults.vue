<template>
  <section class="page-content">
    <app-header />
    <search-results-main :hotels="hotels" />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import SearchResultsMain from "../components/SearchResultsMain.vue"

export default {
  name: "SearchResults",

  components: {
    AppHeader,
    SearchResultsMain
  },

  methods: {
    async getHotels() {
      try {
        let city = this.$route.query.city
        if (!city) {
          city = "Москва"
        }
        let numberOfGuests = this.$route.query.numberOfGuests
        if (!numberOfGuests) {
          numberOfGuests = 1
        }
        let arrivalDatetime = this.$route.query.arrivalDatetime
        if (!arrivalDatetime) {
          arrivalDatetime = "2022-07-24"
        }
        let departureDatetime = this.$route.query.departureDatetime
        if (!departureDatetime) {
          departureDatetime = "2022-07-25"
        }
        const response = await this.axios.get(
          `http://localhost:8000/api/hotels?checkin_date=${arrivalDatetime}&checkout_date=${departureDatetime}&city=${city}&adults_number=${numberOfGuests}`
        )

        if (response.status !== 200) {
          throw new Error(response.error)
        }

        this.hotels = response.data
      } catch (e) {
        console.error("Error from API: ", e)
      }
    }
  },
  beforeMount() {
    this.getHotels()
  },
  data: () => ({
    hotels: []
  })
}
</script>

<style>
</style>
