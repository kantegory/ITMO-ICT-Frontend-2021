<template>
  <div class="container d-flex search-params justify-content-center">
    <index-small-form
      labelText="Количество гостей"
      inputId="numberOfGuests"
      inputType="number"
      v-model="details.numberOfGuests"
    />
    <index-small-form
      labelText="Время заезда"
      inputId="arrivalDatetime"
      inputType="date"
      v-model="details.arrivalDatetime"
    />
    <index-small-form
      labelText="Время выезда"
      inputId="departureDatetime"
      inputType="date"
      v-model="details.departureDatetime"
    />
  </div>
</template>

<script>
import IndexSmallForm from "../components/IndexSmallForm.vue"

export default {
  components: { IndexSmallForm },
  name: "IndexSmallForms",
  props: {
    details: {
      type: Object,
      required: true
    }
  },
  watch: {
    details() {
      this.$emit("input", this.details)
    }
  }
}
</script>

<style>
.search-params {
  position: relative;
  top: 35%;
}
</style>
