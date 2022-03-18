<template>
  <div class="login">
    <Header />
    <main>
      <div class="container py-4">
        <LoginForm />
      </div>
    </main>
    <Footer :bottom="BottomFooter" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginView',
  data: () => ({
    BottomFooter: 'bottom'
  }),

  components: {
    Header,
    Footer,
    LoginForm
  }
}
</script>
