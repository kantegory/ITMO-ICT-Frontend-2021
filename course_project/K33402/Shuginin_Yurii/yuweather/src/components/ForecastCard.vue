<template>
    <div class="col-lg-4 col-sm-6 col-12">
        <div class="card border-primary mb-4">
            <div class="card-body d-flex flex-column text-primary">
                <h4 class="card-title text-center">{{ Forecast.date }}</h4>
                <div class="d-flex justify-content-evenly align-items-center"><img :src="Forecast.icon" width="80" height="80" /><h2>{{ Forecast.temp }}°C</h2></div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Wind</b></p><p>{{ Forecast.wind }}</p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text"><b>Conditions</b></p><p class="text-end ps-3">{{ Forecast.conditions }}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Pressure</b></p><p>{{ Forecast.pressure }}</p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Humidity</b></p><p>{{ Forecast.humidity }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ForecastCard',

  props: {
    Forecast: Object
  }
}
</script>

<style>
</style>
