<template>
  <button class="w-100 btn btn-lg" type="submit">{{ text }}</button>
</template>
<script>
export default {
  name: "BigButton",
  props: {
    text: String
  }
}
</script>
<style>
.form-signin .checkbox {
  font-weight: 400;
}
</style>
