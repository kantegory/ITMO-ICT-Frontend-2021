<template>
  <div class="row">
    <div class="container-md hotel-item">
      <img :src="hotelItem.main_photo_url" alt="" />
      <h2>{{ hotelItem.hotel_name }}</h2>
      <p>{{ hotelItem.country_trans }}, {{ hotelItem.city_trans }}</p>
      <p>Рейтинг: {{ hotelItem.review_score }}</p>
      <p>
        Бронирование от {{ hotelItem.min_total_price }}
        {{ hotelItem.currency_code }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "HotelCard",
  props: {
    hotelItem: Object
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
  width: initial;
}
</style>
