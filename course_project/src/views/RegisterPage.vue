<template>
  <main>
    <div class="container">
      <div class="col-3"></div>
      <div class="col-6 login">

        <form class="form-fly">
          <div class="title"><a>Регистрация</a></div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="ФИО">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" placeholder="Логин">
          </div>
          <div class="mb-3">
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
          <div class="mb-3">
            <input type="password" class="form-control" placeholder="Пароль"></div>
            <div class="mb-3">
            <input type="password" class="form-control" placeholder="Повторите пароль"></div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox">
            <label class="form-check-label" for="flexCheckDefault">
              Согласие на обработку персональных данных
            </label>
          </div>
          <a href="tickets.html" class="btn btn-primary show">Зарегистрироваться</a>
        </form>
      </div>
      <div class="col-3"></div>
    </div>
  </main>
</template>

<script>
export default {
    name: 'RegisterPage',
    components: {}
}
</script>