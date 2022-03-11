<template>
  <div></div>
</template>

<script>
export default {
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
      let result = { status: true, data: null, error: null }

      let url = `http://127.0.0.1:8000/city/?search=${city}`

      try {
        const response = await this.axios.get(url)

        if (response.data.length === 0) {
          result.status = false
          result.error = 'Ошибка! Указанный город не найден'
        } else {
          result.data = response.data
        }
      } catch (e) {
        result.status = false
        result.error = 'Ошибка! Указанный город не найден'
      }

      return result
    },

    async apiCityWeather(city, date) {
      let result = { status: true, data: null, error: null }

      let cityResolved = await this.resolveCityName(city)

      let url = `http://127.0.0.1:8000/weather/?city=${cityResolved.data.id}`

      try {
        const response = await this.axios.get(url)

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

          result.data.weatherid = result.data.id
          result.data = response.data.daily[diff]
          result.data.temp = result.data.temp.day
        }

        result.data.weatherid = response.data.id
        result.data.cityid = cityResolved.data.id
        result.data.name = cityResolved.data.local_names.ru
      } catch (e) {
        console.log('error getting weather', e)
        result.status = false
        result.error = 'Ошибка! Не удалось получить прогноз погоды'
      }

      return result
    }
  }
}
</script>
