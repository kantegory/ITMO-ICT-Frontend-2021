<template>
  <main>
    <heading text="Бронирование жилья" />
    <b-form @submit="onSubmit">
      <index-big-form v-model="city" />
      <index-small-forms v-model="details" />
      <search-button />
    </b-form>
  </main>
</template>

<script>
import Heading from "./Heading.vue"
import IndexBigForm from "../components/IndexBigForm.vue"
import IndexSmallForms from "../components/IndexSmallForms.vue"
import SearchButton from "../components/SearchButton.vue"

export default {
  name: "IndexMain",

  components: {
    Heading,
    IndexBigForm,
    IndexSmallForms,
    SearchButton
  },

  data: () => {
    return {
      city: "",
      details: {
        numberOfGuests: "",
        arrivalDatetime: "",
        departureDatetime: ""
      }
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      // Redirect to search results
    }
  }
}
</script>

<style>
main {
  height: 90%;
}
</style>
