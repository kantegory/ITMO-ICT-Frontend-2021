<template>
  <div id="signIn">

    <!-- форма регистрации -->
    <form class="needs-validation" novalidate>
      <a href="/" class="btn btn-dark btn-lg m-3">back</a>
      <div class="container-fluid padding" id="registrationForm">
        <h1 class="display-3 text-center">registration</h1>

        <!-- логин -->
        <div class="form-group m-3">
          <label for="inputEmail">login*</label>
          <input type="email" class="form-control" id="inputEmail" placeholder="enter your email or phone number"
                 v-model="loginText">
        </div>

        <!-- пароль -->
        <div class="form-group m-3">
          <label>password*</label>
          <div class="input-group" id="show_hide_password">
            <input class="form-control" type="password" placeholder="enter your password" v-model="password">
          </div>
        </div>

        <!-- подтверждение пароля -->
        <div class="form-group m-3">
          <label>confirm password*</label>
          <div class="input-group" id="show_hide_password_confirm">
            <input class="form-control" type="password" placeholder="enter your password again"
                   v-model="repeatPassword">
          </div>
        </div>

        <!-- регистрация -->
        <div class="authError form-group m-3" v-if="allRegistrationError">
        <span class="authError__list" v-for="(key, i) in Object.keys(allRegistrationError)" :key="i">
          <span class="authError__error" v-for="(message, j) in allRegistrationError[key]" :key="j">
             {{ message }}
          </span>
        </span>
        </div>
        <div class="authError form-group m-3" v-if="repeatPasswordError !== ''">
        <span class="authError__list">
          <span class="authError__error">
             {{ repeatPasswordError }}
          </span>
        </span>
        </div>


        <button type="submit" class="btn btn-outline-light btn-lg" id="signInBtn" v-on:click="submit">create
                                                                                                      account
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {mapMutations} from "vuex";

export default {
  name: "Registration",
  data() {
    return {
      loginText: "",
      password: "",
      repeatPassword: "",
    }
  },
  methods: {

    ...mapMutations(["login", "loadUser", "registerUser", "setRepeatPasswordError"]),
    submit: function (event) {
      event.preventDefault()
      if (this.repeatPassword === this.password) {
        this.registerUser({username: this.loginText, password: this.password})
        this.setRepeatPasswordError("")
      } else {
        this.setRepeatPasswordError("The password doesn't match")
      }
    },
  },
  computed: {
    allRegistrationError() {
      return this.$store.getters.getRegistrationError;
    },
    repeatPasswordError() {
      return this.$store.getters.getRepeatPasswordError;
    },
  }
}
</script>

<style scoped>

</style>