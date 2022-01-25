<template>
  <b-card :title="city" class="weather-card">
    <b-card-text>
      <p class="mt-4">
        <b-icon-brightness-high />
        Температура: {{ weather }}
      </p>
      <p>
        <i class="bi bi-thermometer-half"></i> Давление: {{ pressure }}
      </p>
      <p>
        <i class="bi bi-wind"></i> {{ windDirection }}, {{ wind }} м/с</p>

      <div class="d-flex justify-content-center">
        <b-button v-if="saveButton" size="sm" variant="outline-dark"
                  @click="$emit('save-city', id)"
        >
          Сохранить
        </b-button>
        <b-button v-if="deleteButton" size="sm" variant="outline-danger" class="ml-2"
                  @click="$emit('delete-city', deleteById ? id : city)"
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
    id: Number,
    city: String,
    weather: Number,
    pressure: Number,
    wind: Number,
    windDirection: String,
    saveButton: Boolean,
    deleteButton: Boolean,
    deleteById: Boolean
  },
}
</script>
