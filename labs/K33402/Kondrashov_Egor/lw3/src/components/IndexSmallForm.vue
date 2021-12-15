<template>
  <form class="col-3">
    <label :for="inputId" class="form-label">{{ labelText }}</label>
    <b-form-input :type="inputType" :id="inputId" />
  </form>
</template>

<script>
export default {
  name: "IndexSmallForm",
  props: {
    labelText: String,
    inputId: String,
    inputType: String
  }
}
</script>

<style>
</style>
