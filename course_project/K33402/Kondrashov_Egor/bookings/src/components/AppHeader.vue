<template>
  <header>
    <b-navbar>
      <div class="container">
        <header-nav-brand />
        <b-navbar-nav class="justify-content-end">
          <header-nav-item
            v-if="!this.$store.getters.isLoggedIn"
            routeName="Login"
            navText="Вход"
          />
          <header-nav-item
            v-if="!this.$store.getters.isLoggedIn"
            routeName="Registration"
            navText="Регистрация"
          />
          <header-nav-item
            v-if="this.$store.getters.isLoggedIn"
            routeName="MyBookings"
            navText="Мои бронирования"
          />
          <header-nav-item
            v-if="this.$store.getters.isLoggedIn"
            routeName="MyProfile"
            navText="Мои профиль"
          />
          <span v-if="this.$store.getters.isLoggedIn"
            ><b-nav-item @click="logout">Выйти</b-nav-item></span
          >
        </b-navbar-nav>
      </div>
    </b-navbar>
  </header>
</template>

<script>
import HeaderNavItem from "../components/HeaderNavItem.vue"
import HeaderNavBrand from "../components/HeaderBrand.vue"

export default {
  name: "AppHeader",
  components: { HeaderNavItem, HeaderNavBrand },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push({ name: "Login" })
      })
    }
  }
}
</script>

<style>
header {
  background-color: var(--accent-color);
  height: 50px;
}

.nav-link:hover {
  color: var(--nav-link-on-hover) !important;
}
</style>
