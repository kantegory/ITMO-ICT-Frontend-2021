<template>
  <div>
    <Header/>
    <Weather/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Footer from '../components/Footer'
import Weather from '../components/Weather'

export default {
  name: 'Home',
  components: {
    Weather,
    Footer,
    Header
  }
}
</script>
