<template>
  <div class="forecast">
    <Header />
    <main>
        <div class="container pt-4">
            <div class="row mx-auto">
                <div class="col-12 d-flex flex-sm-row flex-column justify-content-between align-items-center">
                    <h2 class="text-primary mb-3 mb-sm-0">{{ CityHeader }}</h2>
                    <a class="btn btn-primary btn-lg" href="favourites" role="button">Add to Favourites</a>
                </div>
            </div>
            <div class="row mt-4 mx-auto justify-content-center">
                <ForecastCard
                    v-for="Forecast in Forecasts"
                    :key="Forecast.identifier"
                    :Forecast="Forecast"
                />
            </div>
        </div>
    </main>
    <Footer />
    <LogoutModal />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ForecastCard from '@/components/ForecastCard.vue'
import LogoutModal from '@/components/LogoutModal.vue'
import { apiKey } from '@/assets/config.js'

export default {
  name: 'ForecastView',
  components: {
    Header,
    Footer,
    ForecastCard,
    LogoutModal
  },

  data: () => ({
    CityHeader: String,
    Forecasts: []
  }),

  methods: {
    data_entered () {
      const url = new URLSearchParams(window.location.search)
      const data = Object
      data.city = url.get('city')
      data.lat = url.get('lat')
      data.lon = url.get('lon')
      return data
    },

    capitalizeFirstLetter (string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },

    convert_date (date) {
      let result = ''
      const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      result += date.getDate() + '.'
      if (result.length === 2) {
        result = '0' + result
      }

      let month = String(date.getMonth() + 1)
      if (month.length === 1) {
        month = '0' + month
      }

      result += month + ', ' + weekdays[date.getDay()]
      return result
    },

    async getForecasts () {
      try {
        let cityData = this.data_entered()

        if (cityData.lat && cityData.lon) {
          const response = await this.axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${cityData.lat}&lon=${cityData.lon}&limit=1&appid=${apiKey}`)
          if (response.status !== 200) {
            throw new Error(response.error)
          }

          cityData.city = await response.data[0].name
          this.CityHeader = cityData.city + ' (' + cityData.lat + ', ' + cityData.lon + ')'
        } else if (cityData.city) {
          const response = await this.axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityData.city}&limit=1&appid=${apiKey}`)
          if (response.status !== 200) {
            throw new Error(response.error)
          }

          cityData = await response.data[0]
          this.CityHeader = cityData.name + ', ' + cityData.country
        } else {
          window.location.href = '/error'
        }

        const response1 = await this.axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`)
        if (response1.status !== 200) {
          throw new Error(response1.error)
        }

        const forecastData = await response1.data
        forecastData.daily.splice(0, 1)
        const Forecasts = forecastData.daily.map((Forecast) => {
          const date = new Date(Forecast.dt * 1000)
          Forecast.date = this.convert_date(date)
          Forecast.icon = `http://openweathermap.org/img/wn/${Forecast.weather[0].icon}@2x.png`
          Forecast.temp = Math.round(Forecast.temp.day)
          Forecast.wind = Math.round(Forecast.wind_speed) + ' m/s'
          Forecast.conditions = this.capitalizeFirstLetter(Forecast.weather[0].description)
          Forecast.pressure = Math.round(Forecast.pressure * 0.75) + ' mmHg'
          Forecast.humidity = Forecast.humidity + ' %'
          return Forecast
        })

        this.Forecasts = Forecasts
      } catch (e) {
        console.error('AN API ERROR', e)
        window.location.href = '/error'
      }
    }
  },

  created () {
    this.getForecasts()
  }
}
</script>
