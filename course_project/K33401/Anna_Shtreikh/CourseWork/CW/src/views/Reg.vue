<template>
  <v-row>
    <h1 style="margin: 20px">Зарегистрироваться</h1>
    <br />
    <v-form @submit.prevent="signUp" ref="signUpForm" class="my-2">
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-text-field label="Фамилия" v-model="signUpForm.last_name" />
          <v-text-field label="Имя" v-model="signUpForm.first_name" />
          <v-text-field label="Никнейм" v-model="signUpForm.username" />
          <v-text-field
            label="Пароль"
            v-model="signUpForm.password"
            type="password"
          />
          <v-btn type="submit" color="accent" class="mb-6 mr-3">Получить аккаунт</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-row>
</template>

<script>
import axios from "axios";
export default {
  name: "Reg",
  data: () => ({
    signUpForm: {
      first_name: "",
      last_name: "",
      username: "",
      password: "",
    },
  }),
  methods: {
    async signUp() {
      try {
        const response = await axios.post(
          "http://127.0.0.1:8000/auth/users/",
          this.signUpForm
        );
        if (response.status !== 201) {
          throw new Error(response.status);
        }
        this.$refs.signUpForm.reset();
        this.$router.push("/log/");
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
  },
};
</script> 