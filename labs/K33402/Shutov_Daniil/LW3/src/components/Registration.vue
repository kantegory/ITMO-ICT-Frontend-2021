<template>
  <div class="body">
    <div class="container form">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Repeat Password</label>
        <input type="password" class="form-control" id="exampleInputPasswordRepeat"/>
      </div>
      <div class="mb-3 form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
        <label class="form-check-label" for="exampleCheck1">Я принемаю условия</label>
      </div>
      <a href="/Login" class="link"><button type="submit" class="btn btn-success">Зарегистрировать</button></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Registration'
}
</script>

<style scoped>
.body{
  min-height: calc(100vh - 80px);
}
.form{
  width: 320px;
  background: #E2E2E2;
  border-radius: 20px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin-top: 150px;
}
</style>
