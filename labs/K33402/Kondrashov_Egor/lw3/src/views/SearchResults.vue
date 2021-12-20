<template>
  <section class="page-content">
    <app-header />
    <search-results-main :hotelItems="hotelItems" />
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
    async getHotelItems() {
      try {
        let city = this.$route.query.city
        if (!city) {
          city = "-553173"
        } else {
          city = await this.getCityIdByName(city)
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
          `https://booking-com.p.rapidapi.com/v1/hotels/search?dest_type=city&checkin_date=${arrivalDatetime}&room_number=1&checkout_date=${departureDatetime}&order_by=popularity&dest_id=${city}&adults_number=${numberOfGuests}&units=metric&filter_by_currency=AED&locale=en-gb`,
          {
            headers: {
              "x-rapidapi-host": "booking-com.p.rapidapi.com",
              "x-rapidapi-key":
                "7364d7fb71msh2d462a6fff9d1b1p102b53jsnff2949c01c27"
            }
          }
        )

        if (response.status !== 200) {
          throw new Error(response.error)
        }
        this.hotelItems = response.data.result
        console.log(this.hotelItems)
      } catch (e) {
        console.error("Error from Booking API: ", e)
      }
    },
    async getCityIdByName(city) {
      const res = await fetch(
        `https://booking-com.p.rapidapi.com/v1/hotels/locations?locale=en-gb&name=${city}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": "booking-com.p.rapidapi.com",
            "x-rapidapi-key":
              "7364d7fb71msh2d462a6fff9d1b1p102b53jsnff2949c01c27"
          }
        }
      )
      const data = await res.json()
      if (data) {
        return data[0].dest_id
      } else {
        return null
      }
    }
  },
  beforeMount() {
    this.getHotelItems()
  },
  data: () => ({
    hotelItems: []
  })
}
</script>

<style>
</style>
