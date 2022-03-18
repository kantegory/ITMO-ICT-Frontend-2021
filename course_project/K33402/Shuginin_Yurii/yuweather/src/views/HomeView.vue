<template>
  <div class="home">
    <Header />
    <main>
      <div class="container py-5">
        <Search />
        <div class="row mt-2">
          <div class="col-12 d-flex justify-content-center">
            <button type="button" class="btn btn-primary btn-lg" v-on:click="get_loc">Geolocation forecast</button>
          </div>
        </div>
      </div>
    </main>
    <Footer :bottom="BottomFooter" />
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
  data: () => ({
    BottomFooter: 'bottom'
  }),

  components: {
    Header,
    Footer,
    Search,
    LogoutModal
  },

  methods: {
    getCoordinates () {
      return new Promise(function (resolve, reject) {
        const giveUp = 1000 * 30
        const options = {
          timeout: giveUp
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, options)
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
