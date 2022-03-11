<template>
  <div class="buy">
    <Header/>
    <BuyBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BuyBody from '@/components/BuyBody.vue'

export default {
  name: 'Home',
  components: {
    BuyBody,
    Footer,
    Header
  }
}
</script>
