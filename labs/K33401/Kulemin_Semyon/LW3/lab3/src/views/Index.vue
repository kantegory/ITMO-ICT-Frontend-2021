<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/Login.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
