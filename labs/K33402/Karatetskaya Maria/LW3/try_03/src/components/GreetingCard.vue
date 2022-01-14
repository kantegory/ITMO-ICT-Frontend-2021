<template>
  <h1>Привет,
    <span v-if="username">{{ username }}</span>
    <span v-else>Username</span>!
  </h1>
</template>

<script>
export default {
  name: 'GreetingCard',

  props: {
    username: String
  }
}
</script>

<style>
</style>
