<template>
  <div class="body">
  <div class="bg-color">
    <div class="container" id="body">
      <div class="row">
        <div class="col-lg">
          <h1 id="title">Мой профиль</h1>
          <div class="windowMe row">
            <img class="col" alt="" src="../../public/Me.png">
            <div class="col pb-2">
              <h5 class="mt-5 city"> {{ courses }}</h5>
              <h6 class="mt-2">mail@bk.ru</h6>
              <a href="/Login" class="link">
                <button type="submit" class="mt-5 pt- btn btn-success">Выйти</button>
              </a>
            </div>
          </div>
          <div class="filter row">
            <h5 style="margin-left: 15px">Фильтр по районам</h5>
            <div class="">
              <a href="#" class="list-group-item list-group-item-action ">
                Адмиралтейский район
              </a>
              <a href="#" class="list-group-item list-group-item-action">Василеостровский район</a>
              <a href="#" class="list-group-item list-group-item-action">Выборгский район</a>
              <a href="#" class="list-group-item list-group-item-action">Калининский район</a>
              <a href="#" class="list-group-item list-group-item-action">VКировский район
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-8 mt-5">
          <div class="row">
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                <form class="search d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search"
                         aria-label="Search">
                  <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </nav>

            <div class="col-lg-2 me-5 cardWeather" v-for="(Ols, index) in Ol" :key="index">
              <div class="row justify-content-center">
                <p><span class="date">{{date[index]}}</span>.<span class="month">{{month}}</span></p>
                <p>Погода: <span class="temp"></span>{{(Ols.main.temp - 267).toFixed(2)}}°C</p>
                <p>Влажность: <span class="humidity"></span>{{Ols.main.humidity}}%</p>
                <p>Ветер: <span class="wind"></span>{{Ols.wind.speed}} км/ч</p>
                <p><span class="wearther">{{Ols.weather[0].main}}</span></p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import axios from 'axios'
const apiKey = '1aa2045fd48de21d4f8b36bc1fed8a98'
const city = 'Moscow'
const a = new Date()
const aa = a.getDate()
const monthh = a.getMonth()
export default {
  name: 'Weather',
  data: () => ({
    courses: [],
    temp: [],
    Ol: [],
    date: [],
    month: []
  }),
  mounted () {
    axios
      .get(`http://api.openweathermap.org/data/2.5/find?q=${city}&type=like&APPID=${apiKey}`)
      .then(response => {
        this.courses = response.data.list[0].name
        for (var j = 0; j < response.data.list.length; j++) {
          const Oll = (response.data.list[j])
          this.Ol.push(Oll)
          this.date.push(aa + j)
          this.month = monthh
        }
      }
      )
  }
}

</script>

<style scoped>
.body{
  min-height: calc(100vh - 80px);
}
/** {*/
/*  margin: 0;*/
/*  padding: 0;*/
/*}*/
/*html, body {*/
/*  height: 100%;*/
/*}*/
/*.maAreal{*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  height: 100%;*/
/*}*/
.search{
  width: 100%;
}
 .cardWeather{
  background: #FFFFFF;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  /*max-width: 137px;*/
  margin-top: 50px;
  margin-bottom: 10px;
  padding: 10px;
}
.cardWeather img{
  max-width: 90px;
}
.cardWeather p{
  text-align: center;
}
.windowMe{
  margin-right: 30px;
  box-shadow: 2px 5px 10px rgb(0 0 0 / 10%);
  border-radius: 20px;
}
.windowMe img{
  padding: 20px 5px 20px 5px;
}
.navbar{
  border-radius: 25px
}
#title{
  margin-bottom: 20px;
  margin-top: 50px;
}
.list-group-item {
  border: inherit;
}
.filter{
  margin-top: 30px;
  margin-right: 30px;
  box-shadow: 2px 5px 10px rgb(0 0 0 / 10%);
  border-radius: 20px;
}
/*.maAreal {*/
/*  display: flex;*/
/*  flex-direction: column;*/
/*  height: 100%;*/
/*}*/
/*.maAreal #body{*/
/*  flex: 1 0 auto;*/
/*}*/
</style>
