<template>
  <div class="favourites">
    <Header />
    <main>
        <div class="container py-4">
            <div class="row">
                <div class="col-12">
                    <h3 class="d-flex align-items-center justify-content-center text-primary">
                        <img src="@/images/star.png" width="35" height="35" class="d-inline-block align-text-top me-3">
                        Favourites
                        <img src="@/images/star.png" width="35" height="35" class="d-inline-block align-text-top ms-3">
                    </h3>
                </div>
            </div>
            <div class="row mt-4 mx-auto">
                <FavouritesCard
                    v-for="Forecast in todayWeather"
                    :key="Forecast.id"
                    :Forecast="Forecast"
                    @click="del(Forecast.city)"
                />
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <a class="btn btn-primary btn-lg" href="/" role="button">Add new location</a>
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
import FavouritesCard from '@/components/FavouritesCard.vue'
import LogoutModal from '@/components/LogoutModal.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'FavouritesView',
  components: {
    Header,
    Footer,
    FavouritesCard,
    LogoutModal
  },

  computed: mapGetters(['getCities', 'todayWeather']),

  methods: {
    ...mapActions(['getTodayWeather', 'deleteCity']),

    del (city) {
      this.deleteCity(city)
      this.getTodayWeather(this.getCities)
    }
  },

  created () {
    this.getTodayWeather(this.getCities)
  }
}
</script>
