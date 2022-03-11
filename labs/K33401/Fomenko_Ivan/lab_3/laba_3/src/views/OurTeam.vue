<template>
  <div class="OurTeam">
    <Header/>
    <OurTeamBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import OurTeamBody from '@/components/OurTeamBody.vue'

export default {
  name: 'Home',
  components: {
    OurTeamBody,
    Footer,
    Header
  }
}
</script>
