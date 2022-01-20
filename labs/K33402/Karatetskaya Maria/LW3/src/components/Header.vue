<template>
  <header class="container container-fluid mb-5">
    <nav class="navbar navbar-expand-lg navbar-light mt-1 ">
      <a class="navbar-brand" href="/Main">
        <img src="../../public/image/logo1.png" width="250" height="66" alt="logo" class="d-inline-block img align-text-top mt-4">
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto menu_ul mb-2 mb-lg-0 mr-0">
          <li class="nav-item menu_nav">
            <a class="nav-link" href="/Main">Главная</a>
          </li>
          <li class="nav-item menu_nav">
            <a class="nav-link" href="/Tickets">Мои билеты</a>
          </li>
<!--          <li class="nav-item menu_nav">-->
<!--            <a class="nav-link" href="#">Контакты</a>-->
<!--          </li>-->
          <li class="nav-item menu_nav log">
            <a class="nav-link"  href="/SignIn">Login</a>
          </li>
          <li class="nav-item menu_nav">
            <a class="nav-link" href="/Signup">Sign up</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>

</style>
