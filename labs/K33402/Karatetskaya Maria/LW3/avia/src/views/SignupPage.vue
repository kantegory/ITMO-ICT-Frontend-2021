<template>
  <div class="without">
    <Header/>
    <Signup/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import Signup from '../components/Signup'
export default {
  name: 'SignupPage',
  components: {
    Signup,
    Footer,
    Header
  }
}
</script>
