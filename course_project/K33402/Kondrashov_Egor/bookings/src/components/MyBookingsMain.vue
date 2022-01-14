<template>
  <main class="container">
    <h2 class="text-center">Ваши бронирования</h2>
    <div v-if="hasBookings">
      <booking-card
        v-for="booking in bookings"
        :key="booking.id"
        :booking="booking"
      />
    </div>
    <div v-else>
      <h4>Пока что у вас нет бронирований.</h4>
      <p>
        <b-link :to="{ name: 'Index' }" class="link-primary">Найдите </b-link
        >место для проживания, которое вам подойдёт.
      </p>
    </div>
  </main>
</template>

<script>
import BookingCard from "./BookingCard.vue"

export default {
  name: "MyBookingsMain",
  props: ["bookings"],

  components: {
    BookingCard
  },

  computed: {
    hasBookings: function () {
      return this.bookings.length > 0
    }
  }
}
</script>

<style scoped>
h2 {
  margin: 30px 0;
}
</style>>
