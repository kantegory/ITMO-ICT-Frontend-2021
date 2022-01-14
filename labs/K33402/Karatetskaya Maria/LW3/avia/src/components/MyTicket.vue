<template>
  <main>
    <div class="container">
      <div class="title"><a>Мои билеты</a></div>
      <div class="row card-group form-fly">
        <div class="col-lg-4 col-md-6 col-sm-12 col-card" v-for="(f, index) in from" :key="index">
          <div class="card">
            <img src="../../public/image/plain.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{f.from}} - {{f.to}}</h5>
              <p class="card-text">Количество пассажиров - {{f.pass}}</p>
              <p class="card-text">Цена - {{f.price}} руб</p>
              <p class="card-text">Дата вылета - {{f.date}}</p>
              <p class="card-text">Время вылета - {{f.time}}</p>
              <button class="btn btn-primary little"><a href="#" >Подробнее</a></button>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
export default {
  data: () => ({
    id: [],
    isActive: [],
    from: [],
    to: [],
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

</style>
