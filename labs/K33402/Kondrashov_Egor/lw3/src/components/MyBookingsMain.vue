<template>
  <main>
    <booking-card
      heading="Студия в сердце Северной Венеции"
      imgSrc="https://q-xx.bstatic.com/xdata/images/hotel/840x460/76109618.jpg?k=ba537b048279407e0241cbd138c6dced32572a4f864bdaf5dbb60c314c3003b0&o="
      placeDate="Санкт-Петербург · 6 мар. 2020 г. – 10 мар. 2020 г."
      host="Julia & Mikhail"
      address="1-я линия, 40, Санкт-Петербург, город Санкт-Петербург 199106, Россия"
      guestsNum="2"
      totalCost="7833,89₽"
    />
    <booking-card
      heading="Уютная студия в центре на Восстания"
      imgSrc="https://m01.tury.ru/hotel/88/8893183/8571493_1600.jpg"
      placeDate="Санкт-Петербург · 22 янв. 2020 г. – 27 янв. 2020 г."
      host="Антон"
      address="11 Греческий проспект, Санкт-Петербург, 191036, Россия"
      guestsNum="2"
      totalCost="8600,70₽"
    />
  </main>
</template>

<script>
import BookingCard from "./BookingCard.vue"

export default {
  name: "MyBookingsMain",

  components: {
    BookingCard
  }
}
</script>

<style>
</style>
