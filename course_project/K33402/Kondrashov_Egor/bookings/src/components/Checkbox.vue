<template>
  <div class="checkbox mb-3">
    <label> <input type="checkbox" :value="value" /> {{ text }} </label>
  </div>
</template>
<script>
export default {
  name: "checkbox",
  props: {
    value: String,
    text: String
  }
}
</script>
<style>
.checkbox {
  font-weight: 400;
}
</style>
