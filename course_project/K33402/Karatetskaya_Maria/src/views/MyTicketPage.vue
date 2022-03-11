<template>
<div class="without">
  <Header/>
  <MyTicket/>
  <Footer/>
</div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import MyTicket from '../components/MyTicket'
export default {
  name: 'MyTicketPage',
  components: {
    MyTicket,
    Footer,
    Header
  }
}
</script>
