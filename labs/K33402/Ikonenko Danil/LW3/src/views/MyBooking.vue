<template>
<div>
  <headers/>
  <myBookings/>
</div>
</template>

<script>
import headers from '../components/headers'
import myBookings from '../components/myBookings'
export default {
  name: 'MyBooking',
  components: { headers, myBookings }
}
</script>

<style scoped>

</style>
