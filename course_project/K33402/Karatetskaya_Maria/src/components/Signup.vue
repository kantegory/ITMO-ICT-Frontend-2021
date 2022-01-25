<template>
  <main>
    <div class="container">
      <div class="col-lg-3"></div>
      <div class="col-lg-6 col-12 login">

<!--        <form class="form-fly">-->
          <div class="title"><a>Регистрация</a></div>
          <div class="mb-3">
            <input type="text" name="name" id="name" class="form-control" placeholder="ФИО">
          </div>
          <div class="mb-3">
            <input type="text" name="email" id="login" class="form-control" placeholder="Логин">
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" name="email" id="email" placeholder="name@example.com">
          </div>
          <div class="mb-3">
            <input type="password" name="passw1" id="passw1"  class="form-control" placeholder="Пароль"></div>
          <div class="mb-3">
            <input type="password" name="passw2" id="passw2" class="form-control" placeholder="Повторите пароль"></div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label">
              Согласие на обработку персональных данных
            </label>
          </div>
        <a href="/Main"><button class="btn btn-primary show_btn">Зарегестрироваться</button></a>
<!--        </form>-->
      </div>
      <div class="col-lg-3"></div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Signup'
}
</script>

<style scoped>

</style>
