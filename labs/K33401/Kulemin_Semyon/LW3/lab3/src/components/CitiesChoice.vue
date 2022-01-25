<template>
  <div class="mt-5 mb-3 text-center align-items-center">
    <div  v-for="(city, i) in this.$store.getters.CITIES" :key="i">
      <CityChanger :id="i"/>
    </div>
  </div>
</template>

<script>
import CityChanger from '@/components/CityChanger'

export default {
  name: 'CitiesChoice',
  components: {
    CityChanger
  }
}
</script>

<style scoped>

</style>
