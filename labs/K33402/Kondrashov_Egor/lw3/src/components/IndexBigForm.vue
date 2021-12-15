<template>
  <div class="container d-flex main-search justify-content-center">
    <form class="col-9">
      <label for="city" class="form-label">Город</label>
      <input type="search" class="form-control" aria-label="Search" id="city" />
    </form>
  </div>
</template>

<script>
export default {
  name: "IndexBigForm"
}
</script>

<style>
.main-search {
  position: relative;
  top: 28%;
}
</style>
