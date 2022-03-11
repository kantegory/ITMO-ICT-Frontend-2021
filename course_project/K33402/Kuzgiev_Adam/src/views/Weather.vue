<template>
  <div>
    <template v-if="$store.state.weather.full_weather.cod === 404">
      <NotFound></NotFound>
    </template>
    <template v-else-if="$store.state.weather.full_weather.cod === 0">
      <v-card class="pa-4">
        <NetworkError @callback="()=>{$store.dispatch('ADD_FULL_WEATHER')}"></NetworkError>
      </v-card>
    </template>
    <template v-else-if="load && Object.keys($store.state.weather.full_weather).length !== 0">
      <CardFullWeather :weather="$store.state.weather.full_weather"
                       :city="$store.state.activeCity"
                       :path="'ADD_FULL_WEATHER'"></CardFullWeather>
    </template>
    <template v-else>
      <CardFullWeatherSkeletonLoader></CardFullWeatherSkeletonLoader>
    </template>
  </div>
</template>

<script>
import CardFullWeather from "@/components/CardFullWeather.vue";
import CardFullWeatherSkeletonLoader from "@/components/CardFullWeatherSkeletonLoader.vue";
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/components/NetworkError.vue";

export default {
  name: 'Weather',
  components: {
    NetworkError, NotFound, CardFullWeatherSkeletonLoader, CardFullWeather
  },
  data() {
    return {
      load: false,
    };
  },
  mounted() {
    this.$store.dispatch('ADD_ACTIVE_CITY', this.$route.params.id)
    this.$store.dispatch('ADD_FULL_WEATHER')
    this.load = true
  }
}

</script>