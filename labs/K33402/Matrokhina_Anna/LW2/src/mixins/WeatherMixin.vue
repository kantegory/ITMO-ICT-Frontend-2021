<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      openweathermapKey: '5ae749cc2df923e8e65a27f4fdc3eccf'
    }
  },

  methods: {
    getWindDirection(windAngle) {
      let val = Math.floor((windAngle / 22.5) + 0.5);
      let arr = [
        'Северный',
        'Северо-Восточный', 'Северо-Восточный', 'Северо-Восточный',
        'Восточный',
        'Юго-Восточный', 'Юго-Восточный', 'Юго-Восточный',
        'Южный',
        'Южно-Западный', 'Южно-Западный', 'Южно-Западный',
        'Западный',
        'Северо-Западный', 'Северо-Западный', 'Северо-Западный'
      ];
      return arr[(val % 16)];
    },

    async resolveCityName(city) {
      let result = {status: true, data: null, error: null}

      let url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${this.openweathermapKey}`
      await this.axios.get(url)
          .then(response => {
            if (response.data.length === 0) {
              result.status = false
              result.error = 'Ошибка! Указанный город не найден'
            } else {
              result.data = response.data[0]
            }
          })
          .catch(error => {
            result.status = false
            result.error = 'Ошибка! Указанный город не найден'
          })

      return result
    },

    async apiCityWeather(city, date) {
      let result = {status: true, data: null, error: null}

      let cityResolved = await this.resolveCityName(city)

      if (!cityResolved.status) {
        return cityResolved
      }

      let params = new URLSearchParams()
      params.append('lat', cityResolved.data.lat)
      params.append('lon', cityResolved.data.lon)
      params.append('exclude', 'hourly,minutely')
      params.append('units', 'metric')
      params.append('appid', this.openweathermapKey)

      let url = `https://api.openweathermap.org/data/2.5/onecall`
      await this.axios.get(url, {params: params})
          .then(response => {
            if (date === 'today') {
              result.data = response.data.current
            } else if (date === 'tomorrow') {
              result.data = response.data.daily[1]
              result.data.temp = result.data.temp.day
            } else if (date === 'weekends') {
              let today = new Date().getDay()
              let weekend = 7
              let diff = weekend - today

              if (diff === 0) {
                diff = 7
              }

              result.data = response.data.daily[diff]
              result.data.temp = result.data.temp.day
            }

            result.data.name = cityResolved.data.local_names.ru
          })
          .catch(error => {
            console.log('error getting weather', error)
            result.status = false
            result.error = 'Ошибка! Не удалось получить прогноз погоды'
          })

      return result
    }
  }
}
</script>
