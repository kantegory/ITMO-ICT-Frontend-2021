<template>
  <div>
    <headers-main/>
    <loginPage/>
  </div>
</template>

<script>
import loginPage from '../components/login'
import headersMain from '../components/headers'

export default {
  name: 'LoginMain',
  components: {
    headersMain,
    loginPage
  }
}
</script>

<style scoped>

</style>
