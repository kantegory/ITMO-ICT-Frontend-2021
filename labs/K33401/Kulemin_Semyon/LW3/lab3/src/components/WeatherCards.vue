<template>
  <div>
    <City city="Moscow" api-key="5fa8289d2a7fa01e858bb2efe6a2b11b" lat="55.75222" lon="37.61556"/>
    <City city="London" api-key="5fa8289d2a7fa01e858bb2efe6a2b11b" lat="55.75222" lon="37.61556"/>
  </div>
</template>

<script>
import City from '@/components/City'
export default {
  name: 'WeatherCards',
  components: { City }
}
</script>

<style scoped>

</style>
