<template>
  <v-row>
    <h1 style="margin: 20px">Войти в профиль</h1>
    <br />
    <v-form
      @submit.prevent="logIn"
      ref="form"
      class="my-2"
      id="check-login-form"
    >
      <v-row>
        <v-col cols="3" class="mx-auto">
          <v-text-field label="Никнейм" v-model="username" />

          <v-text-field label="Пароль" v-model="password" type="password" />
          <v-btn type="submit" color="accent" class="mb-3 mr-3">Войти</v-btn>
          <v-btn color="accent" class="mb-6 mr-3" @click="$router.push('/reg/')"
            >Зарегистрироваться</v-btn
          >
        </v-col>
      </v-row>
    </v-form>
  </v-row>
</template>

<script>
export default {
  name: "Log",
  data: () => ({
    password: null,
    username: null,
  }),
  methods: {
    logIn() {
      try {
        this.axios
          .post("http://127.0.0.1:8000/auth/token/login/", {
            password: this.password,
            username: this.username,
          })
          .then((response) => {
            this.setLogIn(response);
          });
      } catch (e) {
        console.error("AN API ERROR", e);
      }
    },
    setLogIn(response) {
      console.log(this.password);
      console.log(this.username);
      localStorage.setItem("token", response.data.auth_token);
      localStorage.setItem("username", this.username);
      this.$router.push("/");
    },
  },
};
</script>