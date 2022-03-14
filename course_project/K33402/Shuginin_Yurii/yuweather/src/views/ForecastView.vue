<template>
  <div class="forecast">
    <Header />
    <main>
        <div class="container pt-4">
            <div class="row mx-auto">
                <div class="col-12 d-flex flex-sm-row flex-column justify-content-between align-items-center">
                    <h2 class="text-primary mb-3 mb-sm-0">{{ getHeader }}</h2>
                    <a class="btn btn-primary btn-lg" href="favourites" role="button">Add to Favourites</a>
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

  data: () => ({
    CityHeader: String,
    Forecasts: []
  }),

  computed: mapGetters(['allForecasts', 'getHeader']),

  methods: {
    ...mapActions(['getForecasts']),

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
