<template>
  <div class="app-layout">
    <header>
      <the-navbar />
    </header>

    <main>
      <Nuxt />
    </main>

    <footer>

    </footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'nuxt-property-decorator'
import useRequests from "~/utils/useRequests";
import { TCitiesStoreData, TFavoritesStoreData, TForecastStoreData } from "~/types/store";

@Component({
  name: 'default',
  head: {
    bodyAttrs: {
      class: 'bootswatch'
    }
  }
})
export default class Default extends Vue {
  @Watch('$storets.auth.loggedIn')
  async onUserLogin (value: boolean) {
    if (value) {
      const result = await useRequests(this.$axios).performRequest<TFavoritesStoreData[]>('get', `favorites`)

      let cities: TCitiesStoreData[] = []
      let forecasts: TForecastStoreData[] = []

      if (result.response) {
        result.response.data.forEach(item => {
          cities.push(item.city_info)
          forecasts.push(item.city_weather[0])
          this.$storets.cities.addCityFavorite(item.city_info.id)
        })
      }

      this.$storets.cities.setData(cities)
      this.$storets.forecast.setData(forecasts)
    }
  }

  async mounted() {
    this.$storets.auth.SET({ key: 'user', value: this.$auth.$state.user })
    this.$storets.auth.SET({ key: 'loggedIn', value: this.$auth.$state.loggedIn })

    this.onUserLogin(this.$storets.auth.loggedIn)
  }
}
</script>

<style lang="scss">
.app-layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > main {
    flex: 1;
    display: flex;

    > div {
      width: 100%;
    }
  }
}
</style>
