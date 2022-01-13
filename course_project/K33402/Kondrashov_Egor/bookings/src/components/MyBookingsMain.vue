<template>
  <main class="container">
    <h1 class="text-center">Ваши бронирования</h1>
    <booking-card
      v-for="booking in bookings"
      :key="booking.id"
      :booking="booking"
    />
  </main>
</template>

<script>
import BookingCard from "./BookingCard.vue"

export default {
  name: "MyBookingsMain",
  props: ["bookings"],

  components: {
    BookingCard
  }
}
</script>

<style scoped>
h1 {
  margin: 30px 0;
}
</style>>
