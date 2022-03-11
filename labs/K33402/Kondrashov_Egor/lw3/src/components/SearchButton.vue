<template>
  <div class="container d-flex search-button justify-content-center">
    <button class="btn" type="submit">
      Найти
      <b-icon
        icon="search"
        style="
          width: 0.8em;
          height: 0.8em;
          fill: var(--accent-text);
          margin: 0px 0px 0px 10px;
        "
      />
    </button>
  </div>
</template>

<script>
export default {
  name: "SearchButton"
}
</script>

<style>
.search-button {
  position: relative;
  top: 45%;
}
</style>
