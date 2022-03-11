<template>
  <div class="without">
    <Header/>
    <Change/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Change from '../components/Change'
export default {
  name: 'ChangePage',
  components: {
    Change,
    Footer,
    Header
  }
}
</script>
