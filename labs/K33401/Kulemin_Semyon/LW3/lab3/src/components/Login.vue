<template>
  <div class="hello">
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center">
          <h1 class="display-4 fw-bold lh-1 mb-3">Твоя погода</h1>
          <p>Место, в котором оперативно можно посмотреть погоду в любой точке мира.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <div class="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <label for="floatingInput">Почта</label>
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
            </div>
            <div class="form-floating mb-3">
              <label for="floatingPassword">Пароль</label>
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Запомнить меня
              </label>
            </div>
            <router-link to="/home">
              <button class="w-100 btn btn-lg btn-primary" type='submit'>Войти</button>
            </router-link>
            <hr class="my-4">
            <p>Если у Вас ещё нет аккаунта, то самое время</p>
            <router-link to="/signup">
              <button class="w-100 btn btn-lg btn-primary" type='submit'>Зарегистрироваться</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld'
}
</script>
