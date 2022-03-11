<template>
  <h1>
    Hi,
    <span v-if="username"> {{ username }} </span>
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
