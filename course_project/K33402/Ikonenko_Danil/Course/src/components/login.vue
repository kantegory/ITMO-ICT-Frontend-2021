<template>
  <main class="form-signin">
    <form class="login" @submit.prevent="login">
      <h1 class="h3 mb-3 fw-normal">Вход в аккаунт</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="emailInput" placeholder="Адрес электронной почты" v-model="email" autocomplete="email" required>
        <label for="emailInput">Адрес электронной почты</label>
      </div>
      <div class="form-floating">
        <input type="password" class="form-control" id="passwordInput" placeholder="Пароль" v-model="password" autocomplete="password" required>
        <label for="passwordInput">Пароль</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Запомнить меня
        </label>
      </div>
      <button class="w-100 btn btn-lg" type="submit">Войти</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'loginPage',
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
        .then(() => this.$router.push({ name: "Index" }))
        .catch((err) => console.log(err))
    }
  }
}
</script>

<style scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: auto;
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
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

.btn {
  background-color: #4247a2;
  color: #f5f5f5;
  margin: 10px auto;
}

.btn:hover {
  background-color: #4247a2;
  color: #f5f5f5;
}

header {
  top: 0;
  position: absolute;
  width: 100%;
}

.h3 {
  margin: 25px auto !important;
}
</style>
