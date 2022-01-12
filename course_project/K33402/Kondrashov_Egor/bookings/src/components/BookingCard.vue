<template>
  <div class="container-md booking-item">
    <h3>{{ heading }}</h3>
    <img :src="imgSrc" class="img-fluid booking-img" alt="" />
    <p class="place-date">{{ placeDate }}</p>
    <p>Хозяин: {{ host }}</p>
    <p>Адрес: {{ address }}</p>
    <p>Количество гостей: {{ guestsNum }}</p>
    <p>Общая стоимость: {{ totalCost }}</p>
    <a href="#" class="link-primary">Подробнее</a>
  </div>
</template>
<script>
export default {
  name: "BookingCard",
  props: {
    heading: String,
    imgSrc: String,
    placeDate: String,
    host: String,
    address: String,
    guestsNum: Number,
    totalCost: String
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

p.place-date {
  font-size: small;
}
</style>
