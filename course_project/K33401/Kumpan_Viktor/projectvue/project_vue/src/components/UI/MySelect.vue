<template>
  <select v-model="modelValue" @change="changeOption">
    <option disabled value="">Select from the list</option>
    <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'my-select',
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    }
  }
}
</script>

<style scoped>
select{
  display: flex;
  position: relative;
  border-radius: 20px;
  border: 1px solid #019b9b;
  left: 95%;
  transform: translate(-95%, 0);
}

</style>