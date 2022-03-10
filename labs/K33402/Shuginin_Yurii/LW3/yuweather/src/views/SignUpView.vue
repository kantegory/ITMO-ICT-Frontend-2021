<template>
  <div class="registration">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <main>
      <div class="container py-4">
        <SignUpForm />
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import SignUpForm from '@/components/SignUpForm.vue'

export default {
  name: 'SignUpView',
  components: {
    Header,
    Footer,
    SignUpForm
  }
}
</script>
