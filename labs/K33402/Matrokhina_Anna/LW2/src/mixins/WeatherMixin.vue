<template>
  <div></div>
</template>

<script>
export default {
  data() {
    return {
      openweathermapURL: 'https://api.openweathermap.org/data/2.5',
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

    async apiCityWeather(city) {
      let result = {status: true, data: null, error: null}

      await this.axios.get(`${this.openweathermapURL}/weather?q=${city}&appid=${this.openweathermapKey}&units=metric `)
          .then(response => {
            result.data = response.data
          })
          .catch(error => {
            result.status = false
            result.error = 'Ошибка! Указанный город не найден'
          })

      return result
    }
  }
}
</script>
