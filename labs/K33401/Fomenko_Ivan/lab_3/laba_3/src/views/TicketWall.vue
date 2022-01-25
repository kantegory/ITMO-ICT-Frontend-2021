<template>
  <div class="ticketwall">
    <Header/>
    <TicketWallBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import TicketWallBody from '@/components/TicketWallBody.vue'

export default {
  name: 'Home',
  components: {
    TicketWallBody,
    Footer,
    Header
  }
}
</script>
