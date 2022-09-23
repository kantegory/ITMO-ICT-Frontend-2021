<template>
     <div class="container">
          <h2 class="fs-4">Hello, {{ this.$store.getters.USERNAME }}!</h2>
          <div class="row row-cols-1 row-cols-md-3 mt-3 mb-3 text-center">
            <div class="col">
              <div class="card mb-4 rounded-3 box-shadow">
                  <img class="card-img" image src="@/assets/spb.jpg" width="300" height="150">
                  <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Saint Petersburg</h4>
                  </div>
                  <div class="card-body">
                    <!-- <h1 class="card-title pricing-card-title" id="loc0_now">-</h1> -->
                    <b-table class="table mt-2 mb-2" striped hover :items="weather1"></b-table>
                  </div>
            </div>
            </div>
            <div class="col">
                <div class="card mb-4 rounded-3 box-shadow">
                    <img class="card-img" image src="@/assets/moscow.jpg" width="300" height="150">
                    <div class="card-header py-3">
                      <h4 class="my-0 fw-normal">Moscow</h4>
                    </div>
                    <div class="card-body">
                      <!-- <h1 class="card-title pricing-card-title" id="loc1_now">-</h1> -->
                      <b-table class="table mt-2 mb-2" striped hover :items="weather2"></b-table>
                    </div>
              </div>
              </div>
              <div class="col">
                <div class="card mb-4 rounded-3 box-shadow">
                    <img class="card-img" image src="@/assets/perm.jpg"  width="300" height="150">
                    <div class="card-header py-3">
                      <h4 class="my-0 fw-normal">Perm</h4>
                    </div>
                    <div class="card-body">
                      <!-- <h1 class="card-title pricing-card-title" id="loc2_now">-</h1> -->
                      <b-table class="table mt-2 mb-2" striped hover :items="weather3">
                      </b-table>
                    </div>
              </div>
            </div>
    </div>
     </div>
</template>

<script>
import axios from 'axios'

var API_KEY = 'd5bcfc52613c0f1b56495d915a4c245c'

// let weathers = []

let weather1 = [
  { date: 'today', temp: '-', prec: '-' },
  { date: 'tomorrow', temp: '-', prec: '-' },
  { date: 'day after tomorrow', temp: '-', prec: '-' }
]
let weather2 = [
  { date: 'today', temp: '-', prec: '-' },
  { date: 'tomorrow', temp: '-', prec: '-' },
  { date: 'day after tomorrow', temp: '-', prec: '-' }
]
let weather3 = [
  { date: 'today', temp: '-', prec: '-' },
  { date: 'tomorrow', temp: '-', prec: '-' },
  { date: 'day after tomorrow', temp: '-', prec: '-' }
]

export default {
  data () {
    return {
      weather1: weather1,
      weather2: weather2,
      weather3: weather3,
      username: this.$store.getters.USERNAME
    }
  },
  mounted () {
    var cities = this.$store.getters.CITIES
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=' + cities.Moscow[0] + '&lon=' + cities.Moscow[1] + '&exclude={daily}' + '&appid=' + API_KEY + '&lang=eng&units=metric')
      .then(response => response.data)
      .then(data => {
        weather2 = [
          { date: 'today', temp: data.daily[0].temp.day + 'C', prec: data.daily[0].weather[0].description },
          { date: 'tomorrow', temp: data.daily[1].temp.day + 'C', prec: data.daily[1].weather[0].description },
          { date: '29.01', temp: data.daily[2].temp.day + 'C', prec: data.daily[2].weather[0].description }
        ]
      }
      )
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=' + cities.Perm[0] + '&lon=' + cities.Perm[0] + '&exclude={daily}' + '&appid=' + API_KEY + '&lang=eng&units=metric')
      .then(response => response.data)
      .then(data => {
        weather3 = [
          { date: 'today', temp: data.daily[0].temp.day + 'C', prec: data.daily[0].weather[0].description },
          { date: 'tomorrow', temp: data.daily[1].temp.day + 'C', prec: data.daily[1].weather[0].description },
          { date: '29.01', temp: data.daily[2].temp.day + 'C', prec: data.daily[2].weather[0].description }
        ]
      }
      )
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=' + cities['Saint Petersburg'][0] + '&lon=' + cities['Saint Petersburg'][0] + '&exclude={daily}' + '&appid=' + API_KEY + '&lang=eng&units=metric')
      .then(response => response.data)
      .then(data => {
        weather1 = [
          { date: 'today', temp: data.daily[0].temp.day + 'C', prec: data.daily[0].weather[0].description },
          { date: 'tomorrow', temp: data.daily[1].temp.day + 'C', prec: data.daily[1].weather[0].description },
          { date: '29.01', temp: data.daily[2].temp.day + 'C', prec: data.daily[2].weather[0].description }
        ]
      }
      )
  }
}
</script>

<style scoped>
.fs-4 {
    text-align: left;
}
</style>
