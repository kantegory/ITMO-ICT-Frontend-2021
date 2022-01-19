<template>
  <div>
  <Header/>
    <Registration/>
  <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/Header'
import Footer from '../components/Footer'
import Registration from '../components/Registration'

export default {
  name: 'Home',
  components: {
    Registration,
    Footer,
    Header
  }
}
</script>
