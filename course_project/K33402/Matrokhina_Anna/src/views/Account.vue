<template>
  <div class="account-page">
    <b-container>
      <h1 class="mt-4 text-center">Здравствуйте, {{ $store.state.username }}!</h1>

      <div class="d-flex justify-content-center">
        <b-button variant="outline-dark" @click="$router.push({name: 'ProfileEdit'})">Редактировать профиль</b-button>
      </div>

      <h3 class="mt-5">Погода в выбранных городах:</h3>
      <b-row v-if="weatherInCities.length !== 0" cols="1" cols-md="2" cols-lg="3" cols-xl="4" class="mt-3">
        <b-col v-for="data in weatherInCities" class="mb-3">
          <weather-city
              :id="data.mycityid"
              :weatherid="data.id"
              :title="data.city.local_names.ru"
              :weather="data.current.temp"
              :pressure="data.current.pressure"
              :wind="data.current.wind_speed"
              :wind-direction="getWindDirection(data.current.wind_deg)"
              :delete-button="true" :delete-by-id="true"
              @delete-city="deleteCity"
          />
        </b-col>
      </b-row>

      <h5 v-else>
        Вы не добавили ни одного города в избранное
      </h5>
    </b-container>
  </div>
</template>

<script>
import WeatherCity from "../components/WeatherCity";
import WeatherMixin from "@/mixins/WeatherMixin";

export default {
  name: 'Account',
  components: { WeatherCity },
  mixins: [WeatherMixin],

  data() {
    return {
      weatherInCities: []
    }
  },

  async mounted() {
    try {
      const response = await this.axios.get(`http://127.0.0.1:8000/auth/users/me/`, {
        headers: {
          'Authorization': `Token ${this.$store.state.token}`
        }
      })

      if (response) {
        this.$store.commit('updateUserInfo', { 'username': response.data.username })
      }

    } catch (e) {
      console.log('error', e)
    }

    try {
      const response = await this.axios.get(`http://127.0.0.1:8000/mycities/`, {
        headers: {
          'Authorization': `Token ${this.$store.state.token}`
        }
      })

      this.weatherInCities = []

      if (response) {
        response.data.forEach(mycity => {
          this.weatherInCities.push({ mycityid: mycity.id, ...mycity.weather[0] })
        })
      }

    } catch (e) {
      console.log('error', e)
    }
  },

  methods: {
    async deleteCity(mycityid) {
      try {
        const response = await this.axios.delete(`http://127.0.0.1:8000/mycities/${mycityid}`,
            {
              headers: {
                'Authorization': `Token ${this.$store.state.token}`
              },
            })

        if (response) {
          this.weatherInCities = this.weatherInCities.filter(item => item.mycityid !== mycityid)
        }

      } catch (e) {
        console.log('error', e)
      }
    }
  }
}
</script>
