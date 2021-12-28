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
        background: var(--back-color);
        color: var(--body-color);
        min-height: 100vh;
    }
</style>
