<template>
  <div class="forecast">
    <Header />
    <main>
        <div class="container pt-4">
            <div class="row mx-auto">
                <div class="col-12 d-flex flex-sm-row flex-column justify-content-between align-items-center">
                    <h2 class="text-primary mb-3 mb-sm-0 city_header"></h2>
                    <button type="button" class="btn btn-primary btn-lg">Add to Favourites</button>
                </div>
            </div>
            <div class="row mt-4 mx-auto justify-content-center">
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
                <ForecastCard />
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

export default {
  name: 'ForecastView',
  components: {
    Header,
    Footer,
    ForecastCard,
    LogoutModal
  }
}
</script>
