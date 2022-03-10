<template>
    <div class="col-lg-4 col-sm-6 col-12">
        <div class="card border-primary mb-4">
            <div class="card-body d-flex flex-column text-primary">
                <h4 class="card-title text-center date_1"></h4>
                <div class="d-flex justify-content-evenly align-items-center icon_temp_1"></div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Wind</b></p><p class="wind_1"></p>
                </div>
                <div class="d-flex justify-content-between align-items-center">
                    <p class="card-text"><b>Conditions</b></p><p class="conditions_1 text-end ps-3"></p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Pressure</b></p><p class="pressure_1"></p>
                </div>
                <div class="d-flex justify-content-between">
                    <p class="card-text"><b>Humidity</b></p><p class="humidity_1"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'ForecastCard'
}
</script>

<style>
</style>
