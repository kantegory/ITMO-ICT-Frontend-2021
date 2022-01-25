<template>
  <v-app>
    <v-app-bar
      app
      dense
      color="cyan darken-4"
      dark
      elevation="9"
    >
      <div class="d-flex align-center">
        <span href="/" class="mr-2">FLOWERY</span>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="../shop"
        text
      >
        <span class="mr-2">Shop</span>
      </v-btn>
      <v-btn
        href="../login"
        text
      >
        <span class="mr-2">Login</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  })
}
</script>
