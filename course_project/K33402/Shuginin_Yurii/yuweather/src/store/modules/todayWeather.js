import { apiKey } from '@/assets/config.js'
import axios from 'axios'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export default {
  actions: {
    async getTodayWeather (ctx, cities = []) {
      try {
        const Forecasts = []
        if (cities) {
          for (let i = 0; i < cities.length; i++) {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&units=metric&appid=${apiKey}`)
            if (response.status !== 200) {
              throw new Error(response.error)
            }

            const ForecastData = await response.data
            const Forecast = {}
            Forecast.city = cities[i]
            Forecast.icon = `http://openweathermap.org/img/wn/${ForecastData.weather[0].icon}@2x.png`
            Forecast.temp = Math.round(ForecastData.main.temp)
            Forecast.wind = Math.round(ForecastData.wind.speed) + ' m/s'
            Forecast.conditions = capitalizeFirstLetter(ForecastData.weather[0].description)
            Forecast.pressure = Math.round(ForecastData.main.pressure * 0.75) + ' mmHg'
            Forecast.humidity = ForecastData.main.humidity + ' %'

            Forecasts.push(Forecast)
          }
        } else {
          window.location.href = '/error'
          return
        }

        ctx.commit('updateToday', Forecasts)
      } catch (e) {
        console.error('AN API ERROR', e)
        window.location.href = '/error'
      }
    }
  },

  mutations: {
    updateToday (state, forecasts) {
      state.todayWeather = forecasts
    }
  },

  state: {
    todayWeather: []
  },

  getters: {
    todayWeather (state) {
      return state.todayWeather
    }
  }
}
