<template>
  <div class="ContactUs">
    <Header/>
    <ContactUsBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import ContactUsBody from '@/components/ContactUsBody.vue'

export default {
  name: 'Home',
  components: {
    ContactUsBody,
    Footer,
    Header
  }
}
</script>
