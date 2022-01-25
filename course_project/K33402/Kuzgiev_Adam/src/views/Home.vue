<template>
  <v-row class="mb-2">
    <v-col v-if="$store.state.gettingLocation">
      <template v-if="$store.state.weather.local_weather.cod === 404">
        <NotFound></NotFound>
      </template>
      <template v-else-if="$store.state.weather.local_weather.cod === 0">
        <v-card class="pa-4">
          <NetworkError
              @callback="()=>{$store.dispatch('ADD_LOCAL_WEATHER')}">
          </NetworkError>
        </v-card>
      </template>
      <template v-else-if="Object.keys($store.state.weather.local_weather).length !== 0">
        <CardFullWeather :weather="$store.state.weather.local_weather"
                         :city="{name:$store.state.location.name}"
                         :path="'ADD_LOCAL_WEATHER'"></CardFullWeather>
      </template>
      <template v-else>
        <CardFullWeatherSkeletonLoader></CardFullWeatherSkeletonLoader>
      </template>
    </v-col>
    <v-col cols="12">
      <div class="text-h6">Favorites</div>
      <div class="d-flex align-stretch flex-wrap">
        <v-responsive max-width="260">
          <v-autocomplete
              v-model="cityId"
              :items="$store.state.cities.filter(x=>x.country==='RU')"
              item-text="name"
              item-value="id"
              flat
              hide-no-data
              hide-details
              label="Search"
              solo-inverted
          ></v-autocomplete>
        </v-responsive>
        <div>
          <v-btn :disabled="!cityId" @click="nameChanged" height="100%" color="primary">Add</v-btn>
        </div>
      </div>
    </v-col>
    <v-col
        v-for="weather in $store.state.weather.data"
        :key="weather.id"
        cols="12"
        sm="6"
    >
      <template v-if="weather.cod === 404">
        <v-card class="fill-height pa-4">
          <NotFound></NotFound>
        </v-card>
      </template>
      <template v-else-if="weather.cod === 0">
        <v-card class="fill-height pa-4">
          <NetworkError
              @callback="()=>{$store.dispatch('ADD_WEATHER', weather.id)}">
          </NetworkError>
        </v-card>
      </template>
      <CardWeather :weather="weather" v-else-if="weather.cod===200"></CardWeather>
      <CardWeatherSkeletonLoader v-else></CardWeatherSkeletonLoader>
    </v-col>
    <v-col style="max-width: 300px" v-if="$store.state.weather.data.length===0" class="text-center mx-auto">
      <v-icon x-large color="primary">
        mdi-weather-cloudy
      </v-icon>
      <div>The cities you select will be displayed here</div>
    </v-col>
  </v-row>
</template>

<script>
import CardWeather from "@/components/CardWeather.vue"
import CardFullWeather from "@/components/CardFullWeather.vue"
import CardFullWeatherSkeletonLoader from "@/components/CardFullWeatherSkeletonLoader.vue"
import CardWeatherSkeletonLoader from "@/components/CardWeatherSkeletonLoader.vue"
import NotFound from "@/views/NotFound.vue";
import NetworkError from "@/components/NetworkError.vue";


export default {
  name: 'Home',
  components: {
    NetworkError,
    NotFound,
    CardWeatherSkeletonLoader,
    CardWeather,
    CardFullWeather,
    CardFullWeatherSkeletonLoader
  },
  data() {
    return {
      cityId: 0,
    };
  },
  methods: {
    nameChanged: function () {
      this.$store.dispatch('ADD_WEATHER', this.cityId)
      this.$store.dispatch('ADD_CITY', this.$store.state.cities.find((city) => city?.id == this.cityId))
      this.cityId = 0
    }
  }
}

</script>
