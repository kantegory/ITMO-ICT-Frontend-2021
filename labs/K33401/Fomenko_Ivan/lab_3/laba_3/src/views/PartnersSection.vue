<template>
  <div class="PartnersSection">
    <Header/>
    <PartnersSectionBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import PartnersSectionBody from '@/components/PartnersSectionBody.vue'

export default {
  name: 'Home',
  components: {
    PartnersSectionBody,
    Footer,
    Header
  }
}
</script>
