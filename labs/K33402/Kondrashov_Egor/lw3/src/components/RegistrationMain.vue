<template>
  <main class="form-signin">
    <form>
      <centered-heading text="Регистрация" />

      <centered-form-input
        labelText="Адрес электронной почты"
        type="email"
        id="emailInput"
      />
      <centered-form-input
        labelText="Пароль"
        type="password"
        id="registerPasswordInput"
      />
      <centered-form-input
        labelText="Повторите пароль"
        type="password"
        id="rePasswordInput"
      />
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
import CenteredFormInput from "./CenteredFormInput.vue"
import Checkbox from "./Checkbox.vue"
import BigButton from "./BigButton.vue"

export default {
  name: "RegistrationMain",

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
</style>
