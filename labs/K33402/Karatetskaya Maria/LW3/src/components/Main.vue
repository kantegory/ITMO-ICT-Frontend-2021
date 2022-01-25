<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-5">
          <form class="form-fly" @submit.prevent="warn()" method="get">
            <div class="mb-3">
              <label class="label_text" for="from">Пункт отправления:</label>
              <input type="text" class="form-control" id="from" name="from" placeholder="Откуда" v-model="from">
            </div>
            <div class="mb-3">
              <label class="label_text" for="to">Пункт назначения:</label>
              <input type="text" class="form-control" id="to" name="to" placeholder="Куда" v-model="to">
            </div>
            <div class="mb-3">
              <label class="label_text" for="from">Дата отправления:</label>
              <input type="date" class="form-control" id="date" name="date" placeholder="Когда" v-model="date">
            </div>

            <div class="mb-3">
              <select id="pass" class="form-select form-select-lg form-control">
                <option selected>Пассажиры</option>
                <option value="1">1 Пассажир</option>
                <option value="2">2 Пассажира</option>
                <option value="3">3 Пассажира</option>
              </select>
            </div>
            <div class="mb-3">
              <select id="class_pas" class="form-select form-select-lg form-control">
                <option selected>Класс</option>
                <option value="1">Бизнес класс</option>
                <option value="2">Первый класс</option>
                <option value="3">Эконом класс</option>
              </select>
            </div>
            <button class="btn btn-primary show" v-on:click="warn">Смотреть билеты</button>
          </form>
        </div>
        <div class="col-lg-7 mt-5 col-12 cardSearch">
          <div class="col-lg-6 col-md-6 col-sm-12 col-card justify-content-center" v-for="(f, index) in json" :key="index">
            <div class="card">
              <img src="../../public/image/plain.jpg" class="card-img-top" alt="">
              <div class="card-body">
                <h5 class="card-title">{{f.from}} - {{f.to}}</h5>
                <p class="card-text">Количество пассажиров - {{f.pass}}</p>
                <p class="card-text">Цена - {{f.price}} руб</p>
                <p class="card-text">Дата вылета - {{f.date}}</p>
                <p class="card-text mb-3">Время вылета - {{f.time}}</p>
                <button class="btn btn-primary little"><a href="#">Подробнее</a></button>
              </div>
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
  name: 'Main',
  data: () => ({
    from: null,
    form: null,
    Class: null,
    to: null,
    json: null,
    date: null,
    passenger: null,
    price: null,
    new_url: ''
  }),
  methods: {
    warn: function () {
      axios.get(`http://localhost:3000/tickets?from=${this.from}&to=${this.to}&date=${this.date}`).then(response => {
        console.log('123')
        this.form = response.data
        localStorage.setItem('profil', JSON.stringify(this.form))
        this.json = JSON.parse(localStorage.getItem('profil'))
      }
      )
    }
  }
}
</script>
<style scoped>
  .cardSearch {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
</style>
