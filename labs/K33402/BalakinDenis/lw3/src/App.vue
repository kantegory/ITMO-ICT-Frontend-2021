<template>
    <div id="app">
        <Header />
        <router-view />
    </div>
</template>

<script>

import Header from "@/components/Header";
export default {

  name: 'App',
  components: {
      Header
  }
}
</script>

<style>
    #app {
        background: #0c73fe;
        color: white;
        min-height: 100vh;
    }
</style>
