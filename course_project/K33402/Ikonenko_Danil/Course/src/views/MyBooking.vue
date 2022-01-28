<template>
<div>
  <headers-main/>
  <myBookings/>
</div>
</template>

<script>
import headersMain from '../components/headers'
import myBookings from '../components/myBookings'
export default {
  name: 'MyBooking',
  components: { headersMain, myBookings }
}
</script>

<style scoped>

</style>
