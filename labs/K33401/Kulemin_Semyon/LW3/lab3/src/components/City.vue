<template>
  <div class="card mt-4 mb-4 rounded-3 shadow-sm ml-5 mr-5">
    <div class="card-header py-3">
      <h1 class="my-0 fw-normal">{{ city }}</h1>
    </div>
    <div class="card-body">
      <h1 class="card-title pricing-card-title"> {{ Math.round(weather[0]['temp']['day'])}}<small class="text-muted fw-light">°C</small></h1>
      <table class="table mt-3 mb-3">
        <thead class="thead-inverse font-weight-bold">
        <td>Date</td>
        <td>Temp</td>
        <td>Falls</td>
        <td>Hum</td>
        </thead>
        <tbody>
          <tr class="ml-5 mr-5 pl-3 pr-3" v-for="(weatherThisDay, i) in weather" :key="i">
            <td class="col-1">{{ dates[i] }}</td>
            <td class="col-1">{{ Math.round(weatherThisDay['temp']['day']) }} °C</td>
            <td class="col-1 b-icon"><img :src='"https://openweathermap.org/img/w/" + weatherThisDay["weather"][0]["icon"] + ".png"' :alt='weatherThisDay["weather"][0]["description"]'></td>
            <td class="col-1">{{ weatherThisDay['humidity'] }} %</td>
          </tr>
        </tbody>

      </table>
      <router-link to="/advancedweather">
        <button @click="addCityForFull([[city, lat, lon]])" class="btn-dark">Подробнее</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'City',
  props: ['city', 'lat', 'lon', 'apiKey'],
  data: () => ({
    dates: [],
    weather: []
  }),
  methods: {
    addCityForFull (city) {
      this.$store.dispatch('cityForFull', city)
    }
  },
  mounted () {
    const today = new Date().getTime()
    axios
      .get('https://api.openweathermap.org/data/2.5/onecall?lat=' + this.lat + '&lon=' + this.lon + '&exclude={daily}' + '&appid=' + this.apiKey + '&lang=ru&units=metric')
      .then(response => {
        for (let i = 0; i < 3; i++) {
          this.dates.push(new Date(today + 24 * 60 * 60 * 1000 * i).getDate() + '/' + (new Date(today + 24 * 60 * 60 * 1000 * i).getMonth() + 1))
          const weatherThisDay = response.data.daily[i]
          console.log(weatherThisDay)
          this.weather.push(weatherThisDay)
        }
      })
  }
}
</script>

<style scoped>

</style>
