<template>
  <div>
    <div class="mt-4 mb-4 rounded-3 ml-5 mr-5">
      <label class="form-label">Выберите город</label>
      <table class="table">
        <tr colspan="2">
          <div class="input-group mt-3 mb-3">
            <span class="input-group-text">City</span>
            <input v-model="cityName" type="text" class="form-control" placeholder="город" required>
          </div>
        </tr>
        <tr>
          <td>
            <input v-model="lat" type="number" class="form-control" placeholder="lat" required/>
          </td>
          <td>
            <input v-model="lon" type="number" class="form-control" placeholder="lon" required/>
          </td>
        </tr>
      </table>
      <button @click="validateData()" class="w-50 mt-4 mb-4 btn btn-primary btn-lg align-self-center" type="submit">Выбрать</button>
    </div>
    <div v-if="result">
      <FullWeather :city="cityName" api-key="5fa8289d2a7fa01e858bb2efe6a2b11b" :lat="lat" :lon="lon"/>
    </div>
    <div v-else class="ml-5 mr-5 mt-5 mb-5">
      <div class="alert-danger">-90 &lt;= lat &lt;= 90, -180 &lt;= lon &lt;= 180</div>
    </div>
  </div>
</template>

<script>
import FullWeather from '@/components/FullWeather'

export default {
  name: 'SearchWeather',
  components: { FullWeather },
  data: () => ({
    cityName: '',
    lat: '',
    lon: '',
    result: false
  }),
  methods: {
    validateData () {
      if ((parseFloat(this.lat) >= -90) && (parseFloat(this.lat) <= 90) && (parseFloat(this.lon) >= -180) && (parseFloat(this.lat) <= 180)) {
        this.result = true
      }
    }
  }
}
</script>

<style scoped>

</style>
