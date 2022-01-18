<template>
  <div>
    <Header/>
    <Weather/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Weather from '@/components/Weather'
export default {
  name: 'Search',
  components: {
    Weather,
    Header
  }
}
</script>
