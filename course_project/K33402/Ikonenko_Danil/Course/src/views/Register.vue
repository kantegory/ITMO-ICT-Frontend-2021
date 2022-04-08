<template>
<div>
  <headers-main/>
  <registerPage/>
</div>
</template>

<script>
import headersMain from '../components/headers'
import registerPage from '../components/register'
export default {
  name: 'RegisterMain',
  components: { headersMain, registerPage }
}
</script>

<style scoped>

</style>
