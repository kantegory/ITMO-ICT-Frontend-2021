<template>
  <div class="d-flex title justify-content-center">
    <h3>{{ text }}</h3>
  </div>
</template>
<script>
export default {
  name: "Heading",
  props: {
    text: String
  }
}
</script>
<style>
.title {
  position: relative;
  top: 25%;
}
</style>
