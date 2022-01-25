<template>
  <div class="card mt-4 mb-4 rounded-3 shadow-sm ml-5 mr-5">
    <div class="card-header py-3">
      <h4 class="my-0 fw-normal">City</h4>
    </div>
    <div class="card-body">
      <h1 id='c_temp_now' class="card-title pricing-card-title">+4<small class="text-muted fw-light">°C</small></h1>
      <table class="table mt-3 mb-3">
        <tr>
          <td>сегодня</td>
          <td id="c_temp_day1"> -</td>
          <td id="c_cond_day1"> -</td>
        </tr>
        <tr>
          <td>завтра</td>
          <td id="c_temp_day2"> -</td>
          <td id="c_cond_day2"> -</td>
        </tr>
        <tr>
          <td>послезавтра</td>
          <td id="c_temp_day3"> -</td>
          <td id="c_cond_day3"> -</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  props: ['apiKey']
}
</script>

<style scoped>

</style>
