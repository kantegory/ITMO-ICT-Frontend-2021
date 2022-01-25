<template>
  <div class="home">
    <Header/>
    <MainBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import MainBody from '@/components/MainBody.vue'

export default {
  name: 'Home',
  components: {
    MainBody,
    Footer,
    Header
  }
}
</script>
