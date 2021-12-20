<template>
  <div class="container d-flex main-search justify-content-center">
    <label for="city" class="form-label">Город</label>
    <input
      type="search"
      class="form-control"
      aria-label="Search"
      id="city"
      v-model="city"
    />
  </div>
</template>

<script>
export default {
  name: "IndexBigForm",
  props: ["city"],
  watch: {
    city() {
      this.$emit("input", this.value)
    }
  }
}
</script>

<style>
.main-search {
  position: relative;
  top: 28%;
}
</style>
