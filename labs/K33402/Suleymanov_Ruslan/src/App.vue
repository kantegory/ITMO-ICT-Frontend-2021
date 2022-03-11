<template>
  <div id="app" class="wrapper">
    <Header />
    <main class="">
      <router-view />
    </main>
  </div>

</template>

<script>
import Header from "@/components/Header/Header";
import store from './store'

export default {
  name: 'App',
  store: store,
  components: {
    Header
  },
  mounted: () => {
      localStorage.theme?
              store.commit('changeTheme',{theme: localStorage.theme}):null
      localStorage.token?
              store.commit('addToken', localStorage.token):null
      localStorage.token?
              store.dispatch('addUser'):null
  }

}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--text-color);
  }
  #nav a {
    font-weight: bold;
    color: var(--a-color);
  }
  main {
    min-height: 600px;
  }
  footer {
    font-size: 20pt;
  }
  footer .jumbotron {
    height: 160px;
  }
</style>
