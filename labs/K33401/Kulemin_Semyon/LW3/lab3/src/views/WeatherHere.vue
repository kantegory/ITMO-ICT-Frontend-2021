<template>
  <div>
    <Header/>
    <div v-if="access">
      <FullWeather city="Моя геолокация" api-key="5fa8289d2a7fa01e858bb2efe6a2b11b" :lat="lat" :lon="lon"/>
    </div>
    <div v-else class="alert-danger ml-5 mr-5 mt-5 mb-5">
      Нет доступа к вашей геолокации
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FullWeather from '@/components/FullWeather'

export default {
  name: 'WeatherAtHome',
  components: {
    Header,
    Footer,
    FullWeather
  },
  data: () => ({
    lat: '60.0',
    lon: '30.0',
    access: false
  }),
  mounted () {
    this.geolocation()
  },
  methods: {
    geolocation () {
      navigator.geolocation.getCurrentPosition(this.geo_success, this.geo_error)
    },
    geo_success (pos) {
      this.lat = pos.coords.latitude
      this.lon = pos.coords.longitude
      this.access = true
    },
    geo_error (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped>

</style>
