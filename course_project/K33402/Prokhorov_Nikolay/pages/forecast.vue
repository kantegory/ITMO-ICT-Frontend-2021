<template>
  <b-container class="forecast">
    <b-row class="mt-4">
      <b-col lg="7" class="d-flex flex-column justify-content-between">
        <h1>Добавить прогноз</h1>

        <b-form class="forecast__search d-flex flex-column align-items-sm-end flex-sm-row flex-xl-grow-1 mt-2"
                @submit.prevent="fetchCity"
        >
          <b-form-group class="flex-grow-1 mb-0"
                        :invalid-feedback="$storets.cities.error"
                        :state="$storets.cities.error ? false : null"
          >
            <b-form-input
              v-model="cityModel"
              placeholder="Введите город..."
            />
          </b-form-group>

          <b-button variant="primary" class="mt-2 mt-sm-0 ml-sm-2"
                    type="submit"
          >
            Поиск
          </b-button>
        </b-form>
      </b-col>

      <!--      <b-col lg="5" class="mt-3 text-lg-right">-->
      <!--        <h5>Информация о вашем местоположении недоступна</h5>-->

      <!--        <b-button class="mt-1 w-100">Предоставить доступ</b-button>-->
      <!--      </b-col>-->
    </b-row>

    <b-row cols="1" cols-md="2" cols-xl="3" class="mt-5">
      <b-col v-for="forecast in searchCitiesOnly" :key="forecast.city.name" class="mb-4">
        <weather-card :forecast="forecast" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'forecast'
})
export default class Forecast extends Vue {
  cityModel: string | null = ''

  get searchCitiesOnly() {
    return this.$storets.forecast.data.filter(item => this.$storets.cities.search.includes(item.city.id))
  }

  async fetchCity() {
    const city = await this.$storets.cities.fetchCity(this.cityModel)
    this.cityModel = null

    if (city) {
      await this.$storets.forecast.fetchForecast(city)
    }
  }
}
</script>

<style lang="scss">
.forecast {
  &__search {
    .invalid-feedback {
      @include media-breakpoint-up(sm) {
        position: absolute;
      }
    }
  }
}
</style>
