<template>
  <b-card class="weather-card">
    <p class="h5 text-center">{{ forecast.city.local_names.ru }}</p>

    <div class="d-flex justify-content-between">
      <span>{{ Math.round(forecast.current.temp) }}°</span>
      <span>{{ forecast.current.weather[0].main }}</span>
    </div>

    <div class="d-flex justify-content-around">
      <span>{{ forecast.current.wind_speed }}  м/с</span>
      <span>{{ forecast.current.humidity }}%</span>
      <span>{{ forecast.current.pressure }} мм рс</span>
    </div>

    <div class="d-flex weather-card__divider">
      <div v-for="(date, index) in nextDays"
           :key="index"
           class="flex-grow-1 d-flex flex-column text-center"
      >
        <span>{{ index === 0 ? 'Завтра' : `${date.getDate()}.${date.getMonth() + 1}` }}</span>
        <span>{{ Math.round(forecast.daily[index].temp.day) }}°</span>
      </div>
    </div>


    <div v-if="$storets.auth.loggedIn" class="weather-card__button">
      <b-button
        variant="primary"
        class="w-100 mt-3"
        @click="$storets.cities.favoritesChange(forecast.city.id)"
      >
        {{ $storets.cities.isCityInFavorites(forecast.city.id) ? `Удалить` : `В избранное` }}
      </b-button>
    </div>

    <!--    <nuxt-link to="/" class="weather-card__link"/>-->
  </b-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { TForecastStoreData } from "~/types/store";

@Component({
  name: 'WeatherCard'
})
export default class WeatherCard extends Vue {
  @Prop() readonly forecast !: TForecastStoreData

  get nextDays() {
    let today = new Date()
    let dates: Date[] = []

    for (let i = 1; i < 5; i++) {
      let nextDay = new Date(today);
      nextDay.setDate(today.getDate() + i);
      dates.push(nextDay)
    }

    return dates
  }
}
</script>

<style lang="scss">
.weather-card {
  position: relative;

  &:hover {
    background-color: $card-hover-color;
  }

  &__divider {
    margin-top: 1rem;
    padding-top: 1rem;

    border-top: 1px solid $border-color;
  }

  &__button {
    transition: opacity 0.1s ease-in-out;

    @include media-breakpoint-up(md) {
      opacity: 0;
    }
  }

  &:hover {
    .weather-card__button {
      opacity: 1;
    }
  }

  &__link {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
