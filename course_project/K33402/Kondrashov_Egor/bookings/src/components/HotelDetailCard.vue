<template>
  <div class="row">
    <div class="container-md hotel-item">
      <img :src="hotel.img_src" alt="" />
      <h2>{{ hotel.name }}</h2>
      <p>{{ hotel.address }}</p>
      <p>Рейтинг: {{ hotel.rating }}</p>
      <p>Бронирование от {{ hotel.cost_from }} Р</p>
      <p>{{ hotel.description }}</p>
      <div v-if="this.$store.getters.isLoggedIn && hasHotelBookings">
        <h4>У вас уже есть бронирования в этом отеле:</h4>
        <ul>
          <booking-info
            v-for="booking in bookings"
            :key="booking.id"
            :booking="booking"
          />
        </ul>
        <p>
          Чтобы посмотреть все ваши бронирования, нажмите
          <b-link :to="{ name: 'MyBookings' }">сюда</b-link>.
        </p>
      </div>
      <make-booking-form v-if="this.$store.getters.isLoggedIn" />
      <span v-if="!this.$store.getters.isLoggedIn"
        ><p class="text-info make-booking">
          Для того чтобы забронировать,
          <b-link :to="{ name: 'Login' }">войдите в систему</b-link>.
        </p></span
      >
    </div>
  </div>
</template>
<script>
import MakeBookingForm from "./MakeBookingForm.vue"
import BookingInfo from "./BookingInfo.vue"

export default {
  components: { MakeBookingForm, BookingInfo },
  name: "HotelDetailCard",
  props: {
    hotel: Object
  },
  data() {
    return {
      bookings: Array
    }
  },
  computed: {
    hasHotelBookings: function () {
      return this.bookings.length > 0
    }
  },
  beforeMount() {
    this.getHotelBookings()
  },
  methods: {
    async getHotelBookings() {
      if (this.$store.getters.authHeader) {
        try {
          const config = {
            headers: {
              Authorization: this.$store.getters.authHeader
            }
          }
          const resp = await this.axios.get(
            `http://localhost:8000/api/bookings/hotels/${this.$route.params.id}`,
            config
          )

          if (resp.status !== 200) {
            throw new Error(resp.error)
          }
          console.log(resp.data)
          this.bookings = resp.data
        } catch (e) {
          console.error("Error from API: ", e)
        }
      }
    }
  }
}
</script>
<style>
.hotel-item {
  padding: 10px;
  border: 2px solid var(--accent-color);
  margin: 30px auto 0px;
  border-radius: 7px;
}

.hotel-item h2 {
  margin: 0;
}

.hotel-item img {
  width: 100%;
}
</style>
