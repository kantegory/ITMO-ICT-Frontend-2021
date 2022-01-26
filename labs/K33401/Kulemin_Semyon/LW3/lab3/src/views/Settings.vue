<template>
  <div class="body">
    <Header/>
    <CitiesChoice/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CitiesChoice from '@/components/CitiesChoice'

export default {
  name: 'Settings',
  components: {
    Header,
    Footer,
    CitiesChoice
  }
}
</script>

<style scoped>

</style>
