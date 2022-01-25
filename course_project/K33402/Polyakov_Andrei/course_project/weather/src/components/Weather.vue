<template>
<div>
<div class="d-flex justify-content-center">
                <h1 class="head-text mt-5">Поиск</h1>
            </div>
            <div class="container">
                <div class="search-form form-inline d-flex justify-content-center">
                    <form
                    @submit.prevent="submitCity"
                    @submit="getWeather"
                    ref="form">
                    <input class="form-control" id='inputValue' type="text" placeholder="Введите название города" v-model="city"></form>
                    <button class="btn btn-success ml-1" id="search" type="submit" v-on:click="getWeather">Поиск</button>
                    <button class="btn btn-success ml-1" id="get-geo" type="submit" v-on:click="getLocation">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM4 4a4 4 0 1 1 4.5 3.969V13.5a.5.5 0 0 1-1 0V7.97A4 4 0 0 1 4 3.999zm2.493 8.574a.5.5 0 0 1-.411.575c-.712.118-1.28.295-1.655.493a1.319 1.319 0 0 0-.37.265.301.301 0 0 0-.057.09V14l.002.008a.147.147 0 0 0 .016.033.617.617 0 0 0 .145.15c.165.13.435.27.813.395.751.25 1.82.414 3.024.414s2.273-.163 3.024-.414c.378-.126.648-.265.813-.395a.619.619 0 0 0 .146-.15.148.148 0 0 0 .015-.033L12 14v-.004a.301.301 0 0 0-.057-.09 1.318 1.318 0 0 0-.37-.264c-.376-.198-.943-.375-1.655-.493a.5.5 0 1 1 .164-.986c.77.127 1.452.328 1.957.594C12.5 13 13 13.4 13 14c0 .426-.26.752-.544.977-.29.228-.68.413-1.116.558-.878.293-2.059.465-3.34.465-1.281 0-2.462-.172-3.34-.465-.436-.145-.826-.33-1.116-.558C3.26 14.752 3 14.426 3 14c0-.599.5-1 .961-1.243.505-.266 1.187-.467 1.957-.594a.5.5 0 0 1 .575.411z"/>
                        </svg>
                    </button>
                </div>
            </div>
            <div class="container">
                <div class="container-city">
                    <div class='mt-3 d-flex justify-content-center' v-if="info.name">
                        <p class='head-text'>Город: {{ info.name }}</p>
                    </div>
                </div>
                <div class="container-temp">
                    <div class='mt-2 d-flex justify-content-center' v-if="info.main.temp">
                        <p class='head-text'>Текущая температура: {{ info.main.temp }} °c</p>
                    </div>
                </div>
                <div class="container-feels_temp">
                    <div class='mt-2 d-flex justify-content-center' v-if="info.main.feels_like">
                        <p class='head-text'>Ощущается как: {{ info.main.feels_like }} °c</p>
                    </div>
                </div>
                <div class="container-desc">
                    <div class='mt-2 mb-3 d-flex justify-content-center' v-if="info.wind.speed">
                        <p class='head-text'>Скорость ветра: {{ info.wind.speed }} м/с</p>
                    </div>
                </div>
                <button class="btn btn-success ml-1" id="search" type="submit" v-if="info.name" v-on:click="addCity">Сохранить город</button>
            </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Weather',
  data: () => ({
    id: null,
    city: '',
    savedCity: '',
    info: {
      main: {
        temp: '',
        feels_like: ''
      },
      wind: {
        speed: ''
      }
    },
    location: {
      coords: {
        latitude: '',
        longitude: ''
      }
    }
  }),
  methods: {
    submitCity () {
      localStorage.setItem('city', this.city)
      this.savedCity = this.city
      this.$refs.form.reset()
    },
    getWeather () {
      axios
        .get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=62f76307202d2bbb00f83a4de8ac7393&lang=ru&units=metric')
        .then(response => (this.info = response.data))
    },
    async getLocation () {
      navigator.geolocation.getCurrentPosition(pos => {
        this.location = pos
      })
      axios
        .get('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?lat=' + this.location.coords.latitude + '&lon=' + this.location.coords.longitude + '&appid=62f76307202d2bbb00f83a4de8ac7393&lang=ru&units=metric')
        .then(response => (this.info = response.data))
    },
    async addCity () {
      try {
        const token = localStorage.getItem('token')
        if (token) {
          this.axios.defaults.headers.common.Authorization = `token ${token}`
        }
        const response = await axios
          .post('http://127.0.0.1:8000/api/cities/preferences/', {
            token: token,
            city: this.info.id
          }, this.info.id)
        if (response.status !== 201) {
          throw new Error(response.status)
        } else {
          this.$toast('Город добавен', {
            timeout: 2000
          })
        }
      } catch (e) {
        console.error('AN API ERROR', e)
      }
    }
  }
}
</script>
