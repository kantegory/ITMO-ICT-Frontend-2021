<template>
  <div id="signIn">

    <!-- форма авторизации -->
    <form class="needs-validation" novalidate>
      <a href="/" class="btn btn-dark btn-lg m-3">back</a>
      <div class="container-fluid padding" id="authorizationForm">
        <h1 class="display-3 text-center">login</h1>

        <!-- логин -->
        <div class="form-group m-3">
          <label for="inputEmail">login</label>
          <input class="form-control" id="inputEmail" placeholder="enter your email or phone number"
                 v-model="loginText">
        </div>

        <!-- пароль -->
        <div class="form-group m-3">
          <label>password</label>
          <div class="input-group" id="show_hide_password">
            <input class="form-control" type="password" placeholder="enter your password" v-model="password">
          </div>
        </div>

        <!-- запомнить -->
        <div class="custom-control custom-checkbox custom-checkbox m-3">
          <input type="checkbox" class="custom-control-input custom-control-input" id="customCheck" v-model="loginText">
          <label class="custom-control-label" for="customCheck">remember me</label>
        </div>

        <!-- вход -->
        <div class="authError form-group m-3" v-if="loginError">
        <span class="authError__list" v-for="(key, i) in Object.keys(loginError)" :key="i">
          <span class="authError__error" v-for="(message, j) in loginError[key]" :key="j">
             {{ message }}
          </span>
        </span>
        </div>
        <button class="btn btn-outline-light btn-lg" id="signInBtn" type="submit" v-on:click="submit">Login</button>
      </div>
    </form>
  </div>
</template>


<script>
import {mapMutations} from "vuex";

export default {
  name: "login",
  data() {
    return {
      searchInput: "",
      loginText: "",
      password: "",
      counter: 0,
    };
  },
  methods: {

    ...mapMutations(["login", "loadUser"]),
    submit: function (event) {
      event.preventDefault()
      this.login({username: this.loginText, password: this.password})
    },

  },
  watch: {
    sign: function (event) {
      event.preventDefault()
      this.counter++;
      console.log("alo")
      this.login({login: this.loginText, password: this.password})
    },
  },
  computed: {
    loginError() {
      return this.$store.getters.getLoginError;
    }
  },
}
</script>

<style scoped>

</style>
