<template>
  <h1 class="h3 mb-3 fw-normal">{{ text }}</h1>
</template>
<script>
export default {
  name: "CenteredHeading",
  props: {
    text: String
  }
}
</script>
<style>
.h3 {
  margin: 25px auto !important;
}
</style>
