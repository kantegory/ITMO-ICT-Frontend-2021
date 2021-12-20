<template>
  <div class="col-3">
    <label :for="inputId" class="form-label">{{ labelText }}</label>
    <b-form-input :type="inputType" :id="inputId" v-model="value" />
  </div>
</template>

<script>
export default {
  name: "IndexSmallForm",
  props: {
    labelText: String,
    inputId: String,
    inputType: String,
    value: {
      type: String,
      required: true
    }
  },
  watch: {
    value() {
      this.$emit("input", this.value)
    }
  }
}
</script>

<style>
</style>
