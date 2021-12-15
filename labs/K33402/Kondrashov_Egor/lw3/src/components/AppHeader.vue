<template>
  <header>
    <b-nav class="navbar navbar-expand navbar-light">
      <div class="container">
        <a class="navbar-brand text-white" href="index.html"
          >Бронирование жилья</a
        >

        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link text-white px-3" href="login.html"> Вход </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white px-3" href="register.html">
              Регистрация
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white px-3" href="my-bookings.html">
              Мои бронирования
            </a>
          </li>
        </ul>
      </div>
    </b-nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
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
