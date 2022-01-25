<template>
  <div class="aboutus">
    <Header/>
    <AboutUsBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import AboutUsBody from '@/components/AboutUsBody.vue'

export default {
  name: 'Home',
  components: {
    AboutUsBody,
    Footer,
    Header
  }
}
</script>
