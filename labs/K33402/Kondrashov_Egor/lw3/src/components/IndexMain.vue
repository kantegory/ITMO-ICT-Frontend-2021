<template>
  <main>
    <heading text="Бронирование жилья" />
    <index-big-form />
    <index-small-forms />
    <search-button />
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
  }
}
</script>

<style>
main {
  height: 90%;
}
</style>
