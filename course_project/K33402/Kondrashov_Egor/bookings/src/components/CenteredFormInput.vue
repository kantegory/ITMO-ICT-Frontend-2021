<template>
  <div class="form-floating">
    <input
      :type="type"
      class="form-control"
      :id="id"
      :placeholder="labelText"
      required
    />
    <label :for="id" hidden> {{ labelText }}</label>
  </div>
</template>

<script>
export default {
  name: "CenteredFormInput",
  props: {
    labelText: String,
    id: String,
    type: String
  }
}
</script>

<style>
.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-floating > .form-control {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
</style>
