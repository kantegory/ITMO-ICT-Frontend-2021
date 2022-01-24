<template>
  <div class="row row-cols-1 row-cols-md-3 mb-3 p-5 text-center">
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Москва</h4>
        </div>
        <div class="card-body">
          <h1  id='c1_temp_now' class="card-title pricing-card-title">+4<small class="text-muted fw-light">°C</small></h1>
          <table class="table mt-3 mb-3">
            <tr>
              <td>сегодня</td>
              <td id="c1_temp_day1">+ 7 °C</td>
              <td id="c1_cond_day1">дождь</td>
            </tr>
            <tr>
              <td>завтра</td>
              <td id="c1_temp_day2">+ 5 °C</td>
              <td id="c1_cond_day2">снег</td>
            </tr>
            <tr>
              <td>послезавтра</td>
              <td id="c1_temp_day3">+ 9 °C</td>
              <td id="c1_cond_day3">туман</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Текущая геолокация</h4>
        </div>
        <div class="card-body">
          <h1 id='c_temp_now' class="card-title pricing-card-title">+4<small class="text-muted fw-light">°C</small></h1>
          <table class="table mt-3 mb-3">
            <tr>
              <td>сегодня</td>
              <td id="c_temp_day1"> - </td>
              <td id="c_cond_day1"> - </td>
            </tr>
            <tr>
              <td>завтра</td>
              <td id="c_temp_day2"> - </td>
              <td id="c_cond_day2"> - </td>
            </tr>
            <tr>
              <td>послезавтра</td>
              <td id="c_temp_day3"> - </td>
              <td id="c_cond_day3"> - </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card mb-4 rounded-3 shadow-sm">
        <div class="card-header py-3">
          <h4 class="my-0 fw-normal">Лондон</h4>
        </div>
        <div class="card-body">
          <h1 id='c2_temp_now' class="card-title pricing-card-title">+4<small class="text-muted fw-light">°C</small></h1>
          <table class="table mt-3 mb-3">
            <tr>
              <td>сегодня</td>
              <td id="c2_temp_day1">+ 7 °C</td>
              <td id="c2_cond_day1">дождь</td>
            </tr>
            <tr>
              <td>завтра</td>
              <td id="c2_temp_day2">+ 5 °C</td>
              <td id="c2_cond_day2">снег</td>
            </tr>
            <tr>
              <td>послезавтра</td>
              <td id="c2_temp_day3">+ 9 °C</td>
              <td id="c2_cond_day3">туман</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <div v-for="item in weatherList" :key="item[0]">
      {{item[1].data.list[0]}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeatherCards',
  mounted () {
    this.$store.dispatch('weatherCall')
  },
  computed: {
    weatherList () {
      return this.$store.getters.getWeather
    }
  }
}
</script>

<style scoped>

</style>
