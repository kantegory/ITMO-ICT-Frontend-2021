<template>
  <div class="mt-4 mb-4 rounded-3 ml-5 mr-5">
    <label class="form-label">Выберите город № {{ id + 1 }}</label>
    <table class="table">
      <tr colspan="2">
        <div class="input-group mt-3 mb-3">
          <span class="input-group-text">City</span>
          <input v-model="cityName" type="text" class="form-control" :placeholder="this.$store.getters.CITIES[id][0]" required>
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
    <button @click="updateCity()" class="w-50 mt-4 mb-4 btn btn-primary btn-lg align-self-center" type="submit">Выбрать</button>
  </div>
</template>

<script>
export default {
  name: 'CityChanger',
  props: ['id'],
  data: () => ({
    cityName: '',
    lat: '',
    lon: ''
  }),
  methods: {
    updateCity () {
      this.$store.dispatch('updateCities', [this.$props.id, this.cityName, this.lat, this.lon])
    }
  }
}
</script>

<style scoped>

</style>
