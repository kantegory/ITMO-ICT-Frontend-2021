<template>
  <div class="body">
    <Header/>
    <SearchWeather/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchWeather from '@/components/SearchWeather'

export default {
  name: 'Search',
  components: {
    Header,
    Footer,
    SearchWeather
  }
}
</script>

<style scoped>

</style>
