<template>
  <header>
    <nav class="navbar navbar-expand navbar-light">
      <div class="container">
        <a class="navbar-brand text-white" href="/">Бронирование билетов</a>

        <ul class="navbar-nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link text-white px-3" href="/login">
              Вход
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white px-3" href="/register">
              Регистрация
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white px-3" href="/Booking">
              Горячие билеты
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'headers'
}
</script>

<style scoped>
header {
  background-color: #4247a2;
  height: 8%;
}

.nav-link:hover {
  color: #34dfeb !important
}

body {
  background-color: #f5f5f5;
}
</style>
