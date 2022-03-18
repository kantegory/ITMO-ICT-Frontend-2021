import { apiKey } from '@/assets/config.js'
import axios from 'axios'

function capitalizeFirstLetter (string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

function convertDate (date) {
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
}

export default {
  actions: {
    async getForecasts (ctx, cityData = Object) {
      try {
        if (cityData.lat && cityData.lon) {
          const response = await axios.get(`http://api.openweathermap.org/geo/1.0/reverse?lat=${cityData.lat}&lon=${cityData.lon}&limit=1&appid=${apiKey}`)
          if (response.status !== 200) {
            throw new Error(response.error)
          }

          cityData.city = await response.data[0].name
          ctx.commit('updateHeader', cityData.city + ' (' + cityData.lat + ', ' + cityData.lon + ')')
          ctx.commit('updateName', cityData.city)
        } else if (cityData.city) {
          const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${cityData.city}&limit=1&appid=${apiKey}`)
          if (response.status !== 200) {
            throw new Error(response.error)
          }

          cityData = await response.data[0]
          ctx.commit('updateHeader', cityData.name + ', ' + cityData.country)
          ctx.commit('updateName', cityData.name)
        } else {
          window.location.href = '/error'
        }

        const response1 = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${cityData.lat}&lon=${cityData.lon}&exclude=current,minutely,hourly,alerts&units=metric&appid=${apiKey}`)
        if (response1.status !== 200) {
          throw new Error(response1.error)
        }

        const forecastData = await response1.data
        forecastData.daily.splice(0, 1)
        const Forecasts = forecastData.daily.map((Forecast) => {
          const date = new Date(Forecast.dt * 1000)
          Forecast.date = convertDate(date)
          Forecast.icon = `http://openweathermap.org/img/wn/${Forecast.weather[0].icon}@2x.png`
          Forecast.temp = Math.round(Forecast.temp.day)
          Forecast.wind = Math.round(Forecast.wind_speed) + ' m/s'
          Forecast.conditions = capitalizeFirstLetter(Forecast.weather[0].description)
          Forecast.pressure = Math.round(Forecast.pressure * 0.75) + ' mmHg'
          Forecast.humidity = Forecast.humidity + ' %'
          return Forecast
        })

        ctx.commit('updateForecasts', Forecasts)
      } catch (e) {
        console.error('AN API ERROR', e)
        window.location.href = '/error'
      }
    }
  },

  mutations: {
    updateForecasts (state, forecasts) {
      state.forecasts = forecasts
    },

    updateHeader (state, header) {
      state.CityHeader = header
    },

    updateName (state, city) {
      state.CityName = city
    }
  },

  state: {
    forecasts: [],
    CityHeader: String,
    CityName: String
  },

  getters: {
    allForecasts (state) {
      return state.forecasts
    },

    getHeader (state) {
      return state.CityHeader
    },

    getCityName (state) {
      return state.CityName
    }
  }
}
