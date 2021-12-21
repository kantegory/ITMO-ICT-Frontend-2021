<template>
  <div class="container d-flex main-search justify-content-center">
    <label for="city" class="form-label">Город</label>
    <input type="search" class="form-control" aria-label="Search" id="city" />
  </div>
</template>

<script>
export default {
  name: "IndexBigForm",
  props: {
    city: String
  }
}
</script>

<style>
.main-search {
  position: relative;
  top: 28%;
}
</style>
