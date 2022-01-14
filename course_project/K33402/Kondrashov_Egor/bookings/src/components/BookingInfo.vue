<template>
  <li>С {{ booking.starts_at }} по {{ booking.ends_at }}</li>
</template>
<script>
export default {
  name: "BookingInfo",
  props: {
    booking: Object
  }
}
</script>
<style>
</style>
