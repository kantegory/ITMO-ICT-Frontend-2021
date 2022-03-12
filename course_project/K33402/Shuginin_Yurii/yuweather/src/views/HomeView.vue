<template>
  <div class="home">
    <Header />
    <main>
      <div class="container py-5">
        <Search />
        <div class="row mt-4">
          <div class="col-12 d-flex justify-content-center">
            <!-- <a class="btn btn-primary btn-lg" href="/" role="button">Geolocation forecast</a> -->
            <button type="button" class="btn btn-primary btn-lg" v-on:click="get_loc">Geolocation forecast</button>
          </div>
        </div>
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
  },

  methods: {
    getCoordinates () {
      return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })
    },

    async get_loc () {
      const position = await this.getCoordinates()
      const lat = position.coords.latitude
      const lon = position.coords.longitude
      window.location.href = `forecast?lat=${lat}&lon=${lon}`
    }
  }
}
</script>
