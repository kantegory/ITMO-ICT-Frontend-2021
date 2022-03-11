<template>
<div class="container">
  <div class="city">
      <v-card
          class="my-3"
          id="weather-form"
          elevation="2"
        >
        <v-list-item-content>
          <div class="text-overline" v-if="info.name">Город {{ info.name }}</div>
          <v-list-item-subtitle v-if="info.name">Текущая температура: {{ info.main.temp }}°c</v-list-item-subtitle>
          <v-list-item-subtitle v-if="info.name">Ощущается как: {{ info.main.feels_like }}°c</v-list-item-subtitle>
          <v-list-item-subtitle v-if="info.name">Скорость ветра: {{ info.wind.speed }} м/с</v-list-item-subtitle>
        </v-list-item-content>
      <button class="btn btn-success mb-3" id="delete" type="submit" v-if="info.name" v-on:click="removeCity(id)">Удалить город</button>
      </v-card>
  </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'City',
  props: [
    'info',
    'id'
  ],
  methods: {
    getWeather () {
      axios
        .get('https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?id=' + this.info.city.id + '&appid=62f76307202d2bbb00f83a4de8ac7393&units=metric')
        .then(response => (this.info = response.data))
    },
    async removeCity (id) {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          this.axios.defaults.headers.common.Authorization = `token ${token}`
        }
        const response = await axios
          .delete('http://127.0.0.1:8000/api/cities/preferences/' + id + '/', {
            token: token
          }, this.info.id)
        location.reload()
        if (response.status !== 201) {
          throw new Error(response.status)
        }
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  },
  mounted () {
    this.getWeather()
  }
}
</script>

<style scoped>
    .cardWeather{
        background: #FFFFFF;
        box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        margin-top: 50px;
        margin-bottom: 10px;
        padding: 10px;
    }
</style>
