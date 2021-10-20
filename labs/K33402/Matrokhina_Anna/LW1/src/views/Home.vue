<template>
  <div class="home-page">
    <b-container>
      <h1 class="mt-4">Поиск прогноза погоды по городу</h1>

      <b-form>
        <div class="d-sm-flex mt-4">
          <b-form-input placeholder="Введите город..."/>
          <div class="d-flex justify-content-center mt-2 mt-sm-0 ml-sm-2">
            <b-button>Поиск</b-button>
          </div>
        </div>
      </b-form>

      <b-row cols="1" cols-md="2" cols-lg="3" cols-xl="4" class="mt-5">
        <b-col v-for="city in weatherInCities" class="mb-3">
          <weather-city :city="city.city"
                        :weather="city.weather"
                        :pressure="city.pressure"
                        :wind="city.wind"
                        :wind-direction="city.windDirection"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import WeatherCity from "../components/WeatherCity";
export default {
  name: 'Home',
  components: { WeatherCity },
  data () {
    return {
      weatherInCities: [
        {city: 'Москва', weather: '+18', pressure: 754, wind: 4, windDirection: 'Юго-западный'},
        {city: 'Санкт-Петербург', weather: '+11', pressure: 748, wind: 7, windDirection: 'Северный'},
        {city: 'Казань', weather: '+23', pressure: 789, wind: 2, windDirection: 'Северо-восточный'},
        {city: 'Новгород', weather: '+15', pressure: 756, wind: 5, windDirection: 'Южный'},
      ]
    }
  }
}
</script>
