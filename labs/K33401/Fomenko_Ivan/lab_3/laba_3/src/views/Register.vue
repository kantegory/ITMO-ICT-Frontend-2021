<template>
  <div class="register">
    <Header/>
    <RegisterBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import RegisterBody from '@/components/RegisterBody.vue'

export default {
  name: 'Home',
  components: {
    RegisterBody,
    Footer,
    Header
  }
}
</script>
