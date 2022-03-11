<template>
  <v-app >
    <Header/>
    <v-main class="d-flex align-center text-center">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Header from '@/components/Header'
export default {
  name: 'App',
  components: { Header },
  data: () => ({
    //
  })
}
</script>
