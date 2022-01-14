<template>
  <main class="form-signin">
    <form class="login" @submit.prevent="login">
      <centered-heading text="Вход в аккаунт" />

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="Адрес электронной почты"
          v-model="email"
          required
          autocomplete="email"
        />
        <label for="emailInput" hidden>Адрес электронной почты</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="passwordInput"
          placeholder="Пароль"
          v-model="password"
          autocomplete="password"
          required
        />
        <label for="passwordInput" hidden>Пароль</label>
      </div>
      <checkbox text="Запомнить меня" value="remember-me" />
      <big-button text="Войти" />
    </form>
  </main>
</template>

<script>
import CenteredHeading from "./CenteredHeading.vue"
import Checkbox from "../components/Checkbox.vue"
import BigButton from "./BigButton.vue"

export default {
  name: "IndexMain",

  components: {
    CenteredHeading,
    Checkbox,
    BigButton
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login: function () {
      const username = this.email
      const password = this.password

      this.$store
        .dispatch("login", { username, password })
        .then(() => this.$router.go(-1))
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
  margin: auto;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}
.form-floating > .form-control {
  padding: 1rem 0.75rem;
}
.form-floating > .form-control,
.form-floating > .form-select {
  height: calc(3.5rem + 2px);
  line-height: 1.25;
}
</style>
