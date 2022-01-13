<template>
  <main>
    <b-form class="index-search-form" @submit="onSubmit">
      <heading text="Поиск жилья" />
      <index-big-form />
      <search-button />
    </b-form>
  </main>
</template>

<script>
import Heading from "./Heading.vue"
import IndexBigForm from "../components/IndexBigForm.vue"
import SearchButton from "../components/SearchButton.vue"

export default {
  name: "IndexMain",

  components: {
    Heading,
    IndexBigForm,
    SearchButton
  },

  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.$router.push({
        name: "SearchResults",
        query: {
          city: document.getElementById("city").value
        }
      })
    }
  }
}
</script>

<style>
main {
  height: 100%;
}
.index-search-form {
  height: 100%;
}
</style>
