<template>
  <div id="signIn">
    <!-- форма авторизации -->
    <form class="needs-validation" novalidate>
      <a href="/" class="btn btn-dark btn-lg m-3 padding">back</a>
      <div class="container-fluid padding" id="authorizationForm">
        <h1 class="display-3 text-center"> {{ action }}</h1>
        <!-- логин -->
        <div class="form-group m-3">
          <label for="inputEmail">login</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="enter your email or phone number"
                 required>
        </div>
        <!-- пароль -->
        <div class="form-group m-3">
          <label>password</label>
          <div class="input-group" id="show_hide_password">
            <input class="form-control" type="password" placeholder="enter your password" required>
            <div class="input-group-addon">
              <a href=""><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>

        <div class="form-group m-3">
          <label>confirm password*</label>
          <div class="input-group" id="show_hide_password_confirm">
            <input class="form-control" type="password" placeholder="enter your password again">
            <div class="input-group-addon">
              <a href="/"><i class="fa fa-eye-slash" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>

        <!-- запомнить -->
        <div class="custom-control custom-checkbox custom-checkbox m-3">
          <input type="checkbox" class="custom-control-input custom-control-input" id="customCheck">
          <label class="custom-control-label" for="customCheck">remember me</label>
        </div>
        <!-- вход -->
        <a href="/cabinet" type="submit" class="btn btn-outline-light btn-lg" id="signInBtn">sign in</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  props: {
    action: String,
    isARegistration: Object
  }
}
</script>

<style scoped>

</style>