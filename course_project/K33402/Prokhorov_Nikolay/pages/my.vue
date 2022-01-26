<template>
  <b-container>
    <h1 class="mt-4">Избранное</h1>

    <b-row cols="1" cols-md="2" cols-xl="3" class="mt-5">
      <b-col v-for="forecast in filterFavofites" :key="forecast.city.name" class="mb-4">
        <weather-card :forecast="forecast" />
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'

@Component({
  name: 'my'
})
export default class My extends Vue {
  get filterFavofites() {
    return this.$storets.forecast.data.filter(item => this.$storets.cities.favorites.includes(item.city.id))
  }
}
</script>

<style lang="scss">

</style>
