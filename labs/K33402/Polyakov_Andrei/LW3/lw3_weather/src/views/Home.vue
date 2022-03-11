<template>
 <div>
   <Header/>
   <h1>Привет!</h1>
   <h2>Это твой прогноз погоды!</h2>
 </div>
</template>

<script>
import Header from '@/components/Header'

export default {
  name: 'Home',

  components: {
    Header
  }
}
</script>

<style>
html, body {
    width: 100%;
    height: 100%;
}
body {
    display: flex;
    align-items: center;
    justify-content: center;
}
header {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
}
</style>
