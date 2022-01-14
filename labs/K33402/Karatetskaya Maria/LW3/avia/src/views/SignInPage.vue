<template>
  <div class="without">
    <Header/>
    <SignIn/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header'
import Footer from '../components/Footer'
import SignIn from '../components/SigIn'
export default {
  name: 'SignupPage',
  components: {
    SignIn,
    Footer,
    Header
  }
}
</script>
