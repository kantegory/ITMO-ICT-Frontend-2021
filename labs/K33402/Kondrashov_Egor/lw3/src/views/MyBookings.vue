<template>
  <section class="page-content">
    <app-header />
    <my-bookings-main />
  </section>
</template>

<script>
import AppHeader from "../components/AppHeader"
import MyBookingsMain from "../components/MyBookingsMain.vue"

export default {
  name: "MyBookings",

  components: {
    AppHeader,
    MyBookingsMain
  }
}
</script>

<style>
</style>
