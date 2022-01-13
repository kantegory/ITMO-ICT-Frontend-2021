<template>
  <div class="row">
    <div class="container-md hotel-item">
      <img :src="hotel.img_src" alt="" />
      <h2>{{ hotel.name }}</h2>
      <p>{{ hotel.address }}</p>
      <p>Рейтинг: {{ hotel.rating }}</p>
      <p>Бронирование от {{ hotel.cost_from }} Р</p>
      <p>{{ hotel.description }}</p>
      <make-booking-form />
      <span v-if="!this.$store.getters.isLoggedIn"
        ><p class="text-info make-booking">
          Для того чтобы забронировать, войдите в систему
        </p></span
      >
    </div>
  </div>
</template>
<script>
import MakeBookingForm from "./MakeBookingForm.vue"

export default {
  components: { MakeBookingForm },
  name: "HotelDetailCard",
  props: {
    hotel: Object
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
