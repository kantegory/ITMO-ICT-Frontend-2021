<template>
  <main>

    <div class="container-md booking-item" v-for="(f, index) in from" :key="index">
      <h3>{{ f.name }}</h3>
      <img src="../../public/images/ag.jpg" class="img-fluid">
      <p class="place-date">Город: {{f.town}}</p>
      <p>Хозяин: {{f.owner}}</p>
      <p>Адрес: {{f.address}} </p>
      <p>Количество гостей: {{f.capacity}}</p>
      <p>Общая стоимость: {{f.price}}₽</p>
      <a href="#" class="link-primary">Подробнее</a>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  name: 'myBookings',
  data: () => ({
    id: [],
    isActive: [],
    from: [],
    to: [],
    nameImg: [],
    date: [],
    time: [],
    price: []
  }),
  mounted () {
    axios
      .get('http://localhost:3000/tickets')
      .then(response => {
        this.from = response.data
      }
      )
  }
}

</script>

<style scoped>
.booking-item {
  padding: 20px;
  border: 2px solid #4263a2;
  margin: 15px auto;
  border-radius: 7px;
}

img.img-fluid {
  width: 50%;
  padding: 25px 0px;
}

p.place-date {
  font-size: small;
}
</style>
