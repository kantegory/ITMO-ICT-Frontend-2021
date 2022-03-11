<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Logo"
          class="shrink mr-2"
          contain
          src="./assets/logo.svg"
          transition="scale-transition"
          width="90"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="/"
        text
      >
        <span class="mr-2">Главная</span>
      </v-btn>

      <v-btn
        v-if="isLoggedIn === true"
        href="/responses"
        text
      >
        <span class="mr-2">Мои отклики</span>
      </v-btn>

      <v-btn
        v-if="isLoggedIn === false"
        href="/login"
        text
      >
        <span class="mr-2">Войти</span>
      </v-btn>

      <v-btn
        v-if="isLoggedIn === false"
        href="/register"
        text
      >
        <span class="mr-2">Зарегистрироваться</span>
      </v-btn>

      <v-btn
        v-if="isLoggedIn"
        @click="logout"
        text
      >
        <span class="mr-2">Выйти</span>
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
  }),

  computed: {
    isLoggedIn: function () { return this.$store.getters.isLoggedIn }
  },
  methods: {
    logout: function () {
      this.$store.dispatch('logout')
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style>
  main {
    background-image: url('assets/background.jpg');
    background-size: cover;
    max-height:100vh;
  }
</style>
