<template>
  <div class="registration">
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
