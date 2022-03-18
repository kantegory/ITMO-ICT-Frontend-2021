<template>
  <div class="forecast">
    <Header />
    <main>
        <div class="container pt-4">
            <div class="row mx-auto">
                <div class="col-12 d-flex flex-sm-row flex-column justify-content-between align-items-center">
                    <h2 class="text-primary mb-3 mb-sm-0">{{ getHeader }}</h2>
                    <button v-if="not_added(getCityName)" class="btn btn-primary btn-lg" type="button" @click="addCity(getCityName)">Add to Favourites</button>
                    <button v-else class="btn btn-success btn-lg" type="button" disabled>Favourite</button>
                </div>
            </div>
            <div class="row mt-4 mx-auto justify-content-center">
                <ForecastCard
                    v-for="Forecast in allForecasts"
                    :key="Forecast.identifier"
                    :Forecast="Forecast"
                />
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
import ForecastCard from '@/components/ForecastCard.vue'
import LogoutModal from '@/components/LogoutModal.vue'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'ForecastView',
  components: {
    Header,
    Footer,
    ForecastCard,
    LogoutModal
  },

  computed: mapGetters(['allForecasts', 'getHeader', 'getCityName', 'getCities']),

  methods: {
    ...mapActions(['getForecasts', 'addCity']),

    not_added (city = '') {
      if (city) {
        return !this.getCities.includes(city)
      }
    },

    data_entered () {
      const url = new URLSearchParams(window.location.search)
      const data = Object
      data.city = url.get('city')
      data.lat = url.get('lat')
      data.lon = url.get('lon')
      return data
    }
  },

  created () {
    const cityData = this.data_entered()
    this.getForecasts(cityData)
  }
}
</script>
