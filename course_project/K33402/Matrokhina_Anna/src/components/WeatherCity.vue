<template>
  <b-card :title="title" class="weather-card">
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

      <div class="d-flex flex-column">
        <b-button v-if="!noDetailButton" size="sm" variant="outline-dark"
                  @click="$router.push({name: 'WeatherItem', params: {id: weatherid}})">
          Подробнее
        </b-button>
        <b-button v-if="saveButton" size="sm" variant="outline-success" class="mt-2"
                  @click="$emit('save-city', id)">
          Сохранить
        </b-button>
        <b-button v-if="deleteButton" size="sm" variant="outline-danger" class="mt-2"
                  @click="$emit('delete-city', deleteById ? id : title)">
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
    weatherid: Number,
    title: String,
    weather: Number,
    pressure: Number,
    wind: Number,
    windDirection: String,
    saveButton: Boolean,
    deleteButton: Boolean,
    deleteById: Boolean,
    noDetailButton: Boolean
  },
}
</script>
