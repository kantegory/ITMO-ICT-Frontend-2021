<template>
  <div class="row">
    <div class="container-md hotel-item">
      <img :src="hotel.img_src" alt="" />
      <h2>{{ hotel.name }}</h2>
      <p>{{ hotel.address }}</p>
      <p>Рейтинг: {{ hotel.rating }}</p>
      <p>Бронирование от {{ hotel.cost_from }} Р</p>
      <b-link
        :to="{ name: 'HotelDetail', params: { id: hotel.id } }"
        class="link-primary"
        >Подробнее</b-link
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "HotelCard",
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
  width: 50%;
}
</style>
