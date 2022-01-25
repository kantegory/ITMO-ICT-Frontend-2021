<template>
  <div class="mt-5 mb-3 text-center align-items-center">
    <div class="mt-4 mb-4 rounded-3 ml-5 mr-5" v-for="(city, i) in this.$store.getters.CITIES" :key="i">
      <label class="form-label">Выберите город № {{ i + 1 }}</label>
      <table class="table">
        <tr colspan="2">
          <div class="input-group mt-3 mb-3">
            <span class="input-group-text">City</span>
            <input type="text" class="form-control" :placeholder="city[0]" required>
          </div>
        </tr>
        <tr>
          <td>
            <input type="number" class="form-control" placeholder="lat" required>
          </td>
          <td>
            <input type="number" class="form-control" placeholder="lon" required>
          </td>
        </tr>
      </table>
      <button class="w-50 mt-4 mb-4 btn btn-primary btn-lg align-self-center" type="submit">Выбрать</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CitiesChoice'
}
</script>

<style scoped>

</style>
