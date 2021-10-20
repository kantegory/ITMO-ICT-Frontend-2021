<template>
  <div class="account-page">
    <b-container>
      <h1 class="mt-4 text-center">Здравствуйте, meowberry!</h1>

      <h3 class="mt-5">Погода в выбранных городах:</h3>
      <b-row cols="1" cols-md="2" cols-lg="3" cols-xl="4" class="mt-3">
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
  name: 'Account',
  components: { WeatherCity },
  data () {
    return {
      weatherInCities: [
        {city: 'Санкт-Петербург', weather: '+11', pressure: 748, wind: 7, windDirection: 'Северный'},
        {city: 'Казань', weather: '+23', pressure: 789, wind: 2, windDirection: 'Северо-восточный'},
      ]
    }
  }
}
</script>
