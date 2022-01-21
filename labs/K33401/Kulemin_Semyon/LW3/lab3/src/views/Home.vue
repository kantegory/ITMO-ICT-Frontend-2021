<template>
  <div class="body">
    <Header/>
    <WeatherCards/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WeatherCards from '@/components/WeatherCards'

export default {
  name: 'Home',
  components: {
    WeatherCards,
    Header,
    Footer
  }
}
</script>
