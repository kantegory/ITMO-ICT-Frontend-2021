<template>
  <div class="body">
  <div class="container form" >
    <h3>Вход</h3>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1">
    </div>
    <a href="/Personal" class="link me-3"><button type="submit" class="btn btn-success">Войти</button></a>
    <a href="/" class="link"><button type="submit" class="btn btn-success">Регистрация</button></a>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped>
.form{
  width: 320px;
  background: #E2E2E2;
  border-radius: 20px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-top: 150px;
}
.body{
  min-height: calc(100vh - 80px);
}
</style>
