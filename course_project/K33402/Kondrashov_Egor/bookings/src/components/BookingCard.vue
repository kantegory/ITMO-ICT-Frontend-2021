<template>
  <div class="container-md booking-item">
    <h3>{{ booking.hotel.name }}</h3>
    <img :src="booking.hotel.img_src" class="img-fluid booking-img" alt="" />
    <p class="date">С {{ booking.starts_at }} по {{ booking.ends_at }}</p>
    <p>Адрес: {{ booking.hotel.address }}</p>
    <p>Количество гостей: {{ booking.number_of_guests }}</p>
    <b-link
      :to="{ name: 'HotelDetail', params: { id: booking.hotel.id } }"
      class="link-primary"
      >Перейти на страницу отеля</b-link
    >
  </div>
</template>
<script>
export default {
  name: "BookingCard",
  props: {
    booking: Object
  }
}
</script>
<style>
.booking-item {
  padding: 20px;
  border: 2px solid var(--accent-color);
  margin: 30px auto 0px;
  border-radius: 7px;
}

.booking-img {
  width: 50%;
  padding: 25px 0px;
}

p.date {
  font-size: small;
}
</style>
