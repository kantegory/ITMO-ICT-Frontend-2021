<template>
  <div class="home">
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
