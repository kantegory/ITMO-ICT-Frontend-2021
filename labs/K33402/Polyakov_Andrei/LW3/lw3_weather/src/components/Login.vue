<template>
  <div class="body">
  <div class="container form" >
    <h3>Вход</h3>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Пароль</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <a href="/account" class="link me-3"><button type="submit" class="btn btn-success">Войти</button></a>
    <a href="/account" class="link"><button type="submit" class="btn btn-success">Регистрация</button></a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>
