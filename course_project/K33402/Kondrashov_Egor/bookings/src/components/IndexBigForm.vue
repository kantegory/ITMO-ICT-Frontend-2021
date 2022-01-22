<template>
  <div class="container main-search justify-content-center">
    <div class="row justify-content-center">
      <div class="col-9">
        <label for="city" class="form-label">Город</label>
        <input
          type="search"
          class="form-control"
          aria-label="Search"
          id="city"
        />
      </div>
    </div>
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
