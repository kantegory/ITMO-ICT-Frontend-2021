<template>
  <b-card :title="city" class="weather-card">
    <b-card-text>
      <p class="mt-4">
        <b-icon-brightness-high /> Температура: {{ weather }}
      </p>
      <p>
        <i class="bi bi-thermometer-half"></i> Давление: {{ pressure }}
      </p>
      <p>
        <i class="bi bi-wind"></i> {{ windDirection }}, {{ wind }} м/с</p>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  name: 'WeatherCity',
  props: {
    city: String,
    weather: String,
    pressure: Number,
    wind: String,
    windDirection: String
  }
}
</script>
