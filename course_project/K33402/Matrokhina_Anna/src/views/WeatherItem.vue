<template>
  <div class="weather-page">
    <b-container v-if="loaded">
      <h1 class="mt-4 text-center">{{ city.local_names.ru }}, {{ Math.round(current.temp) }}</h1>

      <h5 class="mt-4">Погода на ближайшую неделю:</h5>

      <b-row cols="1" cols-md="2" cols-lg="3" cols-xl="4" class="mt-4">
        <b-col v-for="(data, index) in daily" class="mb-3">
          <weather-city :title="getNextDay(index)"
                        :weather="data.temp.day"
                        :pressure="data.pressure"
                        :wind="data.wind_speed"
                        :wind-direction="getWindDirection(data.wind_deg)"
                        no-detail-button
          />
        </b-col>
      </b-row>
    </b-container>
    <h1 v-else class="mt-4 text-center">Загрузка, ожидайте...</h1>
  </div>
</template>

<script>
import WeatherMixin from "@/mixins/WeatherMixin";
import WeatherCity from "@/components/WeatherCity";

export default {
  components: { WeatherCity },
  mixins: [WeatherMixin],

  data() {
    return {
      loaded: false,
      city: {},
      current: {},
      daily: {}
    }
  },

  async mounted() {
    try {
      const response = await this.axios.get(`http://127.0.0.1:8000/weather/${this.$route.params.id}`)
      this.city = response.data.city
      this.current = response.data.current
      this.daily = response.data.daily
      this.loaded = true
    } catch (e) {
      console.log('error', e)
    }
  },

  methods: {
    getNextDay(index) {
      const date = new Date(new Date().getTime() + index * 24 * 60 * 60 * 1000)

      let month = (date.getMonth() + 1).toString()

      if (month.length === 1) {
        month = `0${month}`
      }

      return `${date.getDate()}.${month}`;
    }
  }
}
</script>
