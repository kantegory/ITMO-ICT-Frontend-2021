<template>
  <main class="form-signin">
    <form @submit.prevent="register">
      <centered-heading text="Регистрация" />

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="emailInput"
          placeholder="Адрес электронной почты"
          v-model="email"
          required
        />
        <label for="emailInput" hidden>Адрес электронной почты</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="registerPasswordInput"
          placeholder="Пароль"
          v-model="password"
          required
        />
        <label for="registerPasswordInput" hidden>Пароль</label>
      </div>

      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="rePasswordInput"
          placeholder="Повторите пароль"
          v-model="rePassword"
          required
        />
        <label for="rePasswordInput" hidden>Повторите пароль</label>
      </div>
      <checkbox
        text="Соглашаюсь с условиями обслуживания"
        value="accept-terms"
      />
      <big-button text="Зарегистрироваться" />
    </form>
  </main>
</template>

<script>
import CenteredHeading from "./CenteredHeading.vue"
import Checkbox from "./Checkbox.vue"
import BigButton from "./BigButton.vue"

export default {
  name: "RegistrationMain",

  components: {
    CenteredHeading,
    Checkbox,
    BigButton
  },

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

        this.$router.push("/")
      }
    }
  }
}
</script>

<style>
.form-signin {
  max-width: 400px;
  padding: 15px;
  margin: auto;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

#registerPasswordInput {
  margin-bottom: -1px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

#rePasswordInput {
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
