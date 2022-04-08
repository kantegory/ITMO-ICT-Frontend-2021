<template>
  <main class="form-signin">
    <form @submit.prevent="register">
      <h1 class="h3 mb-3 fw-normal">Регистрация</h1>

      <div class="form-floating">
        <input type="email" class="form-control" id="emailInput" placeholder="Адрес электронной почты"  v-model="email" required>
        <label for="emailInput">Адрес электронной почты</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" id="passwordInput" placeholder="Пароль"  v-model="password" required>
        <label for="passwordInput">Пароль</label>
      </div>

      <div class="form-floating">
        <input type="password" class="form-control" id="repasswordInput" placeholder="Повторите пароль"  v-model="repassword" required>
        <label for="repasswordInput">Повторите пароль</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Соглашаюсь с условиями обслуживания
        </label>
      </div>
      <button class="w-100 btn btn-lg" type="submit">Зарегистрироваться</button>
    </form>
  </main>
</template>

<script>
export default {
  name: 'registerPage',

  data() {
    return {
      email: "",
      password: "",
      rePassword: ""
    }
  },

  methods: {
    async register() {
      if (this.password === this.rePassword) {
        const registrationData = {
          email: this.email,
          password: this.password
        }

        const resp = await this.axios({
          url: "http://localhost:8000/api/auth/register",
          data: registrationData,
          method: "POST"
        })

        if (resp.status !== 201) {
          throw new Error(resp.error)
        }

        this.$router.push({ name: "Login" })
      }
    }
  }
}
</script>

<style scoped>
html,
body {
  height: 100%;
}
body {
  display: flex;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}
.form-signin {
  width: 100%;
  max-width: 400px;
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
#floatingPassword {
  margin-bottom: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
#floatingRePassword {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.btn {
  background-color: #4263a2;
  color: #f5f5f5;
  margin: 10px auto;
}
.btn:hover {
  background-color: #4247a2;
  color: #f5f5f5;
}
.h3 {
  margin: 25px auto !important;
}
</style>
