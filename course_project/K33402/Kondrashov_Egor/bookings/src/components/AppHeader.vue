<template>
  <header>
    <b-navbar>
      <div class="container">
        <header-nav-brand />
        <b-navbar-nav class="justify-content-end">
          <header-nav-item routeName="Login" navText="Вход" />
          <header-nav-item routeName="Registration" navText="Регистрация" />
          <header-nav-item routeName="MyBookings" navText="Мои бронирования" />
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
  components: { HeaderNavItem, HeaderNavBrand }
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
