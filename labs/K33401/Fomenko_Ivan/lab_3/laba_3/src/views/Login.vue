<template>
  <div class="login">
    <Header/>
    <LoginBody/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginBody from '@/components/LoginBody.vue'

export default {
  name: 'Home',
  components: {
    LoginBody,
    Footer,
    Header
  }
}
</script>
