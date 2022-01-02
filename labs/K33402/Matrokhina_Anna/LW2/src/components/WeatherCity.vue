<template>
  <b-card :title="city" class="weather-card">
    <b-card-text>
      <p class="mt-4">
        <b-icon-brightness-high/>
        Температура: {{ weather }}
      </p>
      <p>
        <i class="bi bi-thermometer-half"></i> Давление: {{ pressure }}
      </p>
      <p>
        <i class="bi bi-wind"></i> {{ windDirection }}, {{ wind }} м/с</p>

      <div class="d-flex justify-content-center">
        <b-button v-if="saveButton" size="sm" variant="outline-dark"
                  @click="$emit('save-city', city)"
        >
          Сохранить
        </b-button>
        <b-button v-if="deleteButton" size="sm" variant="outline-danger" class="ml-2"
                  @click="$emit('delete-city', city)"
        >
          Удалить
        </b-button>
      </div>
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
    windDirection: String,
    saveButton: Boolean,
    deleteButton: Boolean,
  },
}
</script>
