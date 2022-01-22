<template>
  <main>
    <div class="container">
      <div class="title"><a>Мои билеты</a></div>
      <h5 v-if="ans2" class="answer">У вас нет балетов</h5>
      <div class="row card-group form-fly">
        <div class="col-lg-4 col-md-6 col-sm-12 col-card" v-for="(f, index) in json2" :key="index">
          <div class="card">
            <img src="../../public/image/plain.jpg" class="card-img-top" alt="">
            <div class="card-body">
              <h5 class="card-title">{{f.from}} - {{f.to}}</h5>
              <p class="card-text">Количество пассажиров - {{f.pass}}</p>
              <p class="card-text">Цена - {{f.price}} руб</p>
              <p class="card-text">Дата вылета - {{f.date}}</p>
              <p class="card-text">Время вылета - {{f.time}}</p>
              <button class="btn btn-primary little"><a href="#">Подробнее</a></button>
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
  name: 'MyTicket',
  props: {
    json1: null,
    json2: null,
    ans2: null,
    to: null,
    from: null,
    date: null,
    time: null,
    pass: null,
    price: null
  },
  mounted () {
    this.json1 = JSON.parse(localStorage.getItem('maha'))
    console.log('qwe')
    axios.get(`http://localhost:3000/mytickets?id_person=${this.json1}`).then(response => {
      if (response.data.length !== 0) {
        this.json2 = response.data
        console.log('12345')
        console.log(this.json2)
      } else {
        this.ans2 = '1'
        console.log(this.ans2)
      }
    }
    )
  }
}
</script>

<style scoped>
  .answer{
      text-align:center;
  }
</style>
