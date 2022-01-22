<template>
  <div class="without">
    <Header />
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
export default {
  name: 'ContactPage',
  components: {
    Contact,
    Footer,
    Header
  }
}
</script>
