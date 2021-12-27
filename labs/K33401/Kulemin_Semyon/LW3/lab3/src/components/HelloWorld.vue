<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div class="container col-xl-10 col-xxl-8 px-4 py-5">
      <div class="row align-items-center g-lg-5 py-5">
        <div class="col-lg-7 text-center text-lg-start">
          <h1 class="display-4 fw-bold lh-1 mb-3">Твоя погода</h1>
          <p class="col-lg-10 fs-4">Место, в котором оперативно можно посмотреть погоду в любой точке мира.</p>
        </div>
        <div class="col-md-10 mx-auto col-lg-5">
          <div class="p-4 p-md-5 border rounded-3 bg-light">
            <div class="form-floating mb-3">
              <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
              <label for="floatingInput">Почта</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
              <label for="floatingPassword">Пароль</label>
            </div>
            <div class="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"> Запомнить меня
              </label>
            </div>
            <form action="">
              <button class="w-100 btn btn-lg btn-primary" type='submit'>Войти</button>
            </form>
            <hr class="my-4">
            <small class="text-muted">Если у вас ещё нет аккаунта, зарегистрируйтесь</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
