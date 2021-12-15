<template>
  <div class="container d-flex search-params justify-content-center">
    <index-small-form
      labelText="Количество гостей"
      inputId="numberOfGuests"
      inputType="number"
    />
    <index-small-form
      labelText="Время заезда"
      inputId="arrival-datetime"
      inputType="date"
    />
    <index-small-form
      labelText="Время выезда"
      inputId="departure-datetime"
      inputType="date"
    />
  </div>
</template>

<script>
import IndexSmallForm from "../components/IndexSmallForm.vue"

export default {
  components: { IndexSmallForm },
  name: "IndexSmallForms"
}
</script>

<style>
.search-params {
  position: relative;
  top: 35%;
}
</style>
