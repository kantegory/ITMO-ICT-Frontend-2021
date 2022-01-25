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
            <button v-if="Class" type="submit" class="btn btn-primary show">Смотреть билеты</button>
            <button v-else class="btn btn-primary show"><a href="/Answer">Смотреть билеты</a></button>
          </form>
        </div>
        <div class="col-12 col-lg-7">
          <h5 v-if="answer" mt-5>По  вашему запросу ничего не найдено</h5>
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
    ans: null,
    answer: null,
    Class: '1',
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
        if (response.data.length !== 0) {
          this.form = response.data
          console.log(response.data[0])
          localStorage.setItem('profil', JSON.stringify(this.form))
          this.Class = ''
        } else {
          this.ans = '1'
          console.log(this.ans)
          localStorage.setItem('pro', JSON.stringify(this.ans))
          this.answer = JSON.parse(localStorage.getItem('pro'))
        }
      }
      )
    }
  }
}
</script>
<style scoped>
  h5 {
    margin-top: 70px;
    margin-left: 100px;
  }
</style>
