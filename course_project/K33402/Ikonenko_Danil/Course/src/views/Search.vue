<template>
<div>
  <headers-main/>
  <search/>
</div>
</template>

<script>
import headersMain from '../components/headers'
import search from '../components/search'
export default {
  name: 'SearchBar',
  components: { headersMain, search }
}
</script>

<style scoped>

</style>
