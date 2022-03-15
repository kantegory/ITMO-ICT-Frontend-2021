<template>
    <div class="col-xl-3 col-lg-4 col-sm-6 col-12">
        <div class="card border-primary mb-4">
            <div class="card-body d-flex flex-column text-primary">
                <h4 class="card-title text-center">{{ Forecast.city }}</h4>
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
                <button class="btn btn-primary mb-2" type="button" @click="moreLink">More</button>
                <button class="btn btn-outline-danger" type="button" @click="$emit('click')">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'FavouritesCard',
  methods: {
    moreLink () {
      window.location.href = `forecast?city=${this.Forecast.city}`
    }
  },

  props: {
    Forecast: Object
  }
}
</script>

<style>
</style>
