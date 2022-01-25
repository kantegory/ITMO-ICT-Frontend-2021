<template>
  <div class="body">
    <Header/>
    <div v-for="(city, i) in this.$store.getters.CITYFORFULL" :key="i">
      <FullWeather :city="city[0]" api-key="5fa8289d2a7fa01e858bb2efe6a2b11b" :lat="city[1]" :lon="city[2]"/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import FullWeather from '@/components/FullWeather'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'AdvancedWeather',
  props: ['city', 'lat', 'lon'],
  components: {
    FullWeather,
    Header,
    Footer
  }
}
</script>

<style scoped>

</style>
