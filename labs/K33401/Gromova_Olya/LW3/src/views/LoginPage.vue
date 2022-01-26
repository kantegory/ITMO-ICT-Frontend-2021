<template>
  <main>
    <div class="container">
      <div class="col-lg-3"></div>
      <div class="col-lg-6 col-12 login">

        <form class="fly">

          <div class="title">
            <a>Вход</a>
          </div>

          <div class="mb-3">
            <input type="text" name="login" id="login" class="form-control" placeholder="Логин">
          </div>

          <div class="mb-3">
            <input type="password" class="form-control" name="passw" id="passw" placeholder="Пароль">
          </div>

          <button type="submit" class="btn btn-primary show_btn">Войти</button>

        </form>
      </div>
      
    </div>
  </main>
</template>

<script>
export default {
    name: 'LoginPage',
    components: {}
}
</script>