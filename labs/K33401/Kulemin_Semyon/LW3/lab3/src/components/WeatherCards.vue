<template>
  <div class="row row-cols-1 row-cols-md-2 mt-5 mb-3 text-center align-items-center">
    <div v-for="(city, i) in this.$store.getters.CITIES" :key="i">
      <City :city="city[0]" api-key="5fa8289d2a7fa01e858bb2efe6a2b11b" :lat="city[1]" :lon="city[2]"/>
    </div>
  </div>
</template>

<script>
import City from '@/components/City'

export default {
  name: 'WeatherCards',
  components: { City }
}
</script>

<style scoped>

</style>
