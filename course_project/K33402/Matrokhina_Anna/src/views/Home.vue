<template>
  <div class="home-page">
    <b-container>
      <h1 class="mt-4">Поиск прогноза погоды по городу</h1>

      <b-form @submit.prevent="getWeather">
        <div class="d-sm-flex align-items-start mt-4">
          <b-form-group class="flex-grow-1">
            <b-form-input v-model="filterCity"
                          placeholder="Введите город..."
                          :state="filterError === null ? null : false"
            />
            <b-form-invalid-feedback>
              {{ filterError }}
            </b-form-invalid-feedback>
          </b-form-group>

          <div class="d-flex justify-content-center mt-2 mt-sm-0 ml-sm-2">
            <b-button type="submit">Поиск</b-button>
          </div>
        </div>
        <b-form-group label="Фильтр" class="mt-3">
          <div class="d-flex flex-wrap">
            <b-button variant="outline-dark"
                      :pressed="filterDate === 'today'"
                      @click="setFilterDate('today')"
            >
              Сегодня
            </b-button>
            <b-button variant="outline-dark" class="ml-2"
                      :pressed="filterDate === 'tomorrow'"
                      @click="setFilterDate('tomorrow')"
            >
              Завтра
            </b-button>
            <b-button variant="outline-dark" class="ml-2"
                      :pressed="filterDate === 'weekends'"
                      @click="setFilterDate('weekends')"
            >
              Выходные
            </b-button>
            <!--            <b-button variant="outline-dark" class="ml-2"-->
            <!--                      :pressed="filterDate === 'monthlyAvg'"-->
            <!--                      @click="setFilterDate('monthlyAvg')"-->
            <!--            >-->
            <!--              Средняя за месяц-->
            <!--            </b-button>-->
          </div>
        </b-form-group>
      </b-form>

      <b-row v-if="weatherInCities.length !== 0" cols="1" cols-md="2" cols-lg="3" cols-xl="4" class="mt-5">
        <b-col v-for="city in weatherInCities" class="mb-3">
          <weather-city :id="city.cityid"
                        :weatherid="city.weatherid"
                        :title="city.city"
                        :weather="city.weather"
                        :pressure="city.pressure"
                        :wind="city.wind"
                        :wind-direction="city.windDirection"
                        :save-button="true" :delete-button="true"
                        @save-city="saveCity"
                        @delete-city="deleteCity"
          />
        </b-col>
      </b-row>
      <h5 v-else class="mt-4">
        Введите название города чтобы добавить карточку с погодой
      </h5>
    </b-container>
  </div>
</template>

<script>
import WeatherCity from "../components/WeatherCity";
import WeatherMixin from "../mixins/WeatherMixin";

export default {
  name: 'Home',
  mixins: [WeatherMixin],
  components: { WeatherCity },
  data() {
    return {
      filterDate: 'today',
      filterCity: null,
      filterError: null,
      weatherInCities: []
    }
  },

  methods: {
    deleteCity(city) {
      this.weatherInCities = this.weatherInCities.filter(weaher => weaher.city !== city)
    },

    addCityWeather(data) {
      console.log('Weather data', data)

      this.deleteCity(data.name)

      let cityid = data.cityid
      let weatherid = data.weatherid
      let city = data.name
      let weather = data.temp
      let pressure = data.pressure
      let wind = parseInt(data.wind_speed)
      let windDirection = this.getWindDirection(data.wind_deg)

      this.weatherInCities = [{ cityid, weatherid, city, weather, pressure, wind, windDirection }, ...this.weatherInCities]
    },

    async getWeather() {
      console.log(`get wearher for ${this.filterCity} on ${this.filterDate}`)
      let data = await this.apiCityWeather(this.filterCity, this.filterDate)

      this.filterError = data.error
      this.filterCity = null

      if (data.status) {
        this.addCityWeather(data.data)
      }
    },

    async saveCity(cityID) {
      try {
        const response = await this.axios.post(`http://127.0.0.1:8000/mycities/`, {
              city: cityID
            },
            {
              headers: {
                'Authorization': `Token ${this.$store.state.token}`
              }
            })

      } catch (e) {
        console.log('error', e)
      }
    },

    setFilterDate(value) {
      this.filterDate = value
      this.weatherInCities = []
    }
  }
}
</script>
