<template>
  <main>
    <div class="container search-results">
      <hotel-card v-for="hotel in hotels" :key="hotel.id" :hotel="hotel" />
    </div>
  </main>
</template>

<script>
import HotelCard from "./HotelCard.vue"

export default {
  name: "SearchResultsMain",
  props: ["hotels"],

  components: {
    HotelCard
  }
}
</script>

<style>
</style>
