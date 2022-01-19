<template>
  <div>
    <Header/>
    <Acc/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Acc from '@/components/Acc'
export default {
  name: 'Account',
  components: {
    Acc,
    Header
  }
}
</script>
