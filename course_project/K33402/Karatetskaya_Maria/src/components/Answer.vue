<template>
  <main>
    <div class="container">
      <div class="title"><a>Результаты поиска</a></div>
      <div class="row card-group form-fly">
        <div class="col-lg-4 col-md-6 col-sm-12 col-card" v-for="(f, index) in json" :key="index">
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
export default {
  name: 'Answer',
  props: {
    json: null,
    to: null,
    from: null,
    date: null,
    time: null,
    pass: null,
    price: null
  },
  mounted () {
    console.log('qwe')
    this.json = JSON.parse(localStorage.getItem('profil'))
    console.log(this.json.from)
  }
}
</script>

<style scoped>
  .answer{
      text-align:center;
  }
</style>
