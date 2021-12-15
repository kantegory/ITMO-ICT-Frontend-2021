<template>
  <main>
    <index-heading />
    <index-big-form />
    <index-small-forms />
    <search-button />
  </main>
</template>

<script>
import IndexHeading from "../components/IndexHeading.vue"
import IndexBigForm from "../components/IndexBigForm.vue"
import IndexSmallForms from "../components/IndexSmallForms.vue"
import SearchButton from "../components/SearchButton.vue"

export default {
  name: "IndexMain",

  components: {
    IndexHeading,
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
