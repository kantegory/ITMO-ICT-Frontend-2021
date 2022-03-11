<template>
  <main class="form-signin">
    <form>
      <centered-heading text="Вход в аккаунт" />

      <centered-form-input
        labelText="Адрес электронной почты"
        type="email"
        id="emailInput"
      />
      <centered-form-input
        labelText="Пароль"
        type="password"
        id="passwordInput"
      />
      <checkbox text="Запомнить меня" value="remember-me" />
      <big-button text="Войти" />
    </form>
  </main>
</template>

<script>
import CenteredHeading from "./CenteredHeading.vue"
import CenteredFormInput from "../components/CenteredFormInput.vue"
import Checkbox from "../components/Checkbox.vue"
import BigButton from "./BigButton.vue"

export default {
  name: "IndexMain",

  components: {
    CenteredHeading,
    CenteredFormInput,
    Checkbox,
    BigButton
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
</style>
