<template>
  <div class="Planes">
    <Header/>
    <PlanesBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PlanesBody from '@/components/PlanesBody.vue'

export default {
  name: 'Home',
  components: {
    PlanesBody,
    Footer,
    Header
  }
}
</script>
