<template>
  <div>
    <Header/>
    <Login/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Login from '@/components/Login'
export default {
  name: 'Log',
  components: {
    Login,
    Header
  }
}
</script>
