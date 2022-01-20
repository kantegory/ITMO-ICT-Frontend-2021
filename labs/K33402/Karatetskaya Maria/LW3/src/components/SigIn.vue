<template>
  <main>
<div class="container">
  <div class="col-lg-3"></div>
  <div class="col-lg-6 col-12 login">

<!--    <form class="form-fly">-->
      <div class="title"><a>Вход</a></div>
      <div class="mb-3">
        <input type="text" name="login" id="login" class="form-control" placeholder="Логин">
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" name="passw" id="passw" placeholder="Пароль"></div>
    <a href="/Tickets"><button type="submit" class="btn btn-primary show_btn">Войти</button></a>
<!--    </form>-->
  </div>
  <div class="col-lg-3"></div>
</div>
</main>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'SignIn'
}

</script>

<style scoped>

</style>
