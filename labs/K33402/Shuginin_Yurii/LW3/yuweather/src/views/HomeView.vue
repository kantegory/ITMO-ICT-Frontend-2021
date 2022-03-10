<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Header />
    <main>
      <div class="container py-5">
        <Search />
      </div>
    </main>
    <Footer />
    <LogoutModal />
  </div>
</template>

<script>
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Search from '@/components/Search.vue'
import LogoutModal from '@/components/LogoutModal.vue'

export default {
  name: 'HomeView',
  components: {
    Header,
    Footer,
    Search,
    LogoutModal
  }
}
</script>
