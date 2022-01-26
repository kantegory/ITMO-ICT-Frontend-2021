<template>
  <div>
    <headers/>
    <login/>
  </div>
</template>

<script>
import login from '../components/login'
import headers from '../components/headers'

export default {
  name: 'Login',
  components: {
    headers,
    login
  }
}
</script>

<style scoped>

</style>
