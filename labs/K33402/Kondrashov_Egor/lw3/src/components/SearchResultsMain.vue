<template>
  <main>
    <div class="container search-results">
      <hotel-card
        v-for="hotelItem in hotelItems"
        :key="hotelItem.id"
        :hotelItem="hotelItem"
      />
    </div>
  </main>
</template>

<script>
import HotelCard from "./HotelCard.vue"

export default {
  name: "SearchResultsMain",
  props: ["hotelItems"],

  components: {
    HotelCard
  }
}
</script>

<style>
</style>
