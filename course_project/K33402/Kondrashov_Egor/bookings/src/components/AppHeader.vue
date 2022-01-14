<template>
  <header>
    <b-navbar>
      <div class="container">
        <header-nav-brand />
        <b-navbar-nav
          class="justify-content-end"
          v-if="!this.$store.getters.isLoggedIn"
        >
          <header-nav-item routeName="Login" navText="Вход" />
          <header-nav-item routeName="Registration" navText="Регистрация" />
        </b-navbar-nav>
        <b-navbar-nav class="justify-content-end" v-else>
          <header-nav-item routeName="MyBookings" navText="Мои бронирования" />
          <header-nav-item routeName="MyProfile" navText="Мои профиль" />
          <span><b-nav-item @click="logout">Выйти</b-nav-item></span>
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
